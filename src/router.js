import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
	{
		path: '/home',
		component: () => import('@/views/dashboard/Home.vue'),
		name: 'home'
	},
	{
		path: '/perfil',
		component: () => import('@/views/dashboard/Profile.vue'),
		name: 'profile'
	},
	{
		path: '/bloguear',
		component: () => import('@/views/dashboard/Bloguear.vue'),
		name: 'bloguear'
	},

	//AUTHENTICATION ROUTES
	{
		path: '/',
		component: () => import('@/views/auth/SignIn.vue'),
		name: 'signIn',
		meta: {
			layout: 'default'
		}
	},
	//ERROR ROUTES
	{
		path: '/error',
		component: () => import('@/views/miscellanies/NotFound.vue'),
		name: 'notFound'
	}
];

const router = new Router({
	mode: 'history',
	routes
});

export default router;