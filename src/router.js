import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
	{
		path: '/home',
		component: () => import('@/views/dashboard/Home.vue'),
		name: 'home'
	},
	//PERFIL
	{
		path: '/perfil',
		component: () => import('@/views/dashboard/user/Profile.vue'),
		name: 'profile'
	},
	{
		path: '/perfil/editar',
		component: () => import('@/views/dashboard/user/EditProfile.vue'),
		name: 'profile'
	},
	//PUBLICACIONES
	{
		path: '/publicaciones',
		component: () => import('@/views/dashboard/post/List.vue'),
	},
	{
		path: '/publicaciones/agregar',
		component: () => import('@/views/dashboard/post/Add.vue'),
	},
		{
		path: '/publicaciones/borradores',
		component: () => import('@/views/dashboard/post/Drafts.vue'),
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