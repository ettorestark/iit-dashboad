import axios from 'axios'

const state = {
	status: '',
	token: localStorage.getItem('token'),
	user: {}
};

const getters = {

};

const mutations = {

};

const actions = {
	login({commit}, data) {
		return new Promise((resolve, reject) => {
			
		});
	}
};

export default {
	state,
	getters,
	mutations,
	actions
}

