import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store.js'

//IMPORT ROUTES
import auth from './auth'
import miscellanies from './miscellanies'
import home from './home'
import profile from './profile'
import activityCenter from './activityCenter'
import messageCenter from './messageCenter'
import users from './users';
import posts from './posts';


Vue.use(VueRouter);

var allRoutes = [];
allRoutes = allRoutes.concat(auth, miscellanies, home, profile, activityCenter, messageCenter, users, posts);

const routes = allRoutes;

const router = new VueRouter({
	routes,
	mode: 'history'
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