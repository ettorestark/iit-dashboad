import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store.js'

//IMPORT ROUTES
import auth from './routes/auth'
import miscellanies from './routes/miscellanies'
import home from './routes/home'
import profile from './routes/profile'
import activityCenter from './routes/activityCenter'
import messageCenter from './routes/messageCenter'
import users from './routes/users';
import user from './routes/user';
import projects from './routes/projects';
import partners from './routes/partners';
import posts from './routes/posts';
import tags from './routes/tags';
import categories from './routes/categories';


Vue.use(VueRouter);

var allRoutes = [];
allRoutes = allRoutes.concat(auth, miscellanies, home, profile, activityCenter, messageCenter, users, user, posts, projects, partners, tags, categories);

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
						next('/');
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