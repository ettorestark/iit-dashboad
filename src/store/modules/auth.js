import axios from 'axios'

const state = {
	status: '',
	token: localStorage.getItem('token'),
	user: {}
};

const getters = {
	isLoggedIn: state => !!state.token,
	authStatus: state => state.status
};

const mutations = {
	auth_request(state) {
		state.status = 'loading';
	},

	auth_success(state, data) {
		state.status = 'success';
		state.token = data.token;
		state.user = data.user;
	},

	auth_error(state) {
		state.token = '';
		state.status = '';
	},

	auth_sign_out(state) {
		state.token = '';
		state.status = '';
	},

	check_success(state, user) {
		state.status = 'verify sucess';
		state.user = user;
	},

	check_err(state) {
		state.status = 'error';
	}
};

const actions = {
	sign_in({commit}, data) {
		return new Promise((resolve, reject) => {
			commit('auth_request');
			axios.post('http://integralit.test/api/user/sign_in',{
					email: data.email,
					password: data.password
				})
				.then(response => {
					const token = response.data.token;
					const user = response.data.user;
					localStorage.setItem('token', token);
					commit('auth_success', {token, user});
					resolve(response);
				})
				.catch(err => {	
					commit('auth_error');
					localStorage.removeItem('token');
					reject(err);
				});
		});
	},

	signOut({commit}) {
		return new Promise((resolve, reject) => {
			axios.get('http://integralit.test/api/user/sign_out',{
					headers: {
						'Authorization': 'Bearer ' + localStorage.getItem('token')
					}
				})
				.then(response => {
					commit('auth_signout');
					localStorage.removeItem('token');
					resolve(response);
				})
				.catch(err => {
					reject(err);
				})
		});
	},

	verifyUser({commit}){
		return new Promise((resolve, reject) => {
			axios.get('http://integralit.test/api/user/check',{ 
					headers: {
						'Authorization': 'Bearer ' + localStorage.getItem('token')
					}
				})
				.then(response => {
					commit('check_success', response.data);
					resolve(response);
				})
				.catch(err => {
					commit('check_err');
					reject(err);
				})
		});
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}

