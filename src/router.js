import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'

Vue.use(Router);

const routes = [
];

const router = new Router({
	mode: 'history',
	routes
});

router.beforeEach((to, from, next) => {
	let isLoggedIn = store.getters.isLoggedIn;
	let isAuthRequired = to.matched.some(record => record.meta.auth);
	if(isAuthRequired) {
		if(isLoggedIn) {
			if(localStorage.getItem('token') && !store.state.user) {
				store.dispatch('verifyUser')
					.then(response => {
						next();
					})
					.catch(err => {
						console.log(err);
					})
			}else {
				next();
			}
		}else {
			next('/');
		}
	}else {
		if(isLoggedIn) {
			next('/escritorio');
		}else {
			next();
		}
	}
	window.scrollTo(0, 0);
});

export default router;