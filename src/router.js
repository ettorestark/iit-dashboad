import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
	{
		path: '/',
		component: () => import('@/views/Home.vue'),
		name: 'home'
	},
	{
		path: '/perfil',
		component: () => import('@/views/Profile.vue'),
		name: 'profile'
	},
	{
		path: '/bloguear',
		component: () => import('@/views/Bloguear.vue'),
		name: 'bloguear'
	},
];

const router = new Router({
	mode: 'history',
	routes
});

export default router;