import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
	{
		path: '/dashboard',
		component: () => import('@/views/dashboard/Home.vue'),
		name: 'home'
	},
	//CENTRO DE MENSAJES
	{
		path: '/mensajes',
		component: () => import('@/views/dashboard/messages/All.vue'),
	},
	//PROFILE
	{
		path: '/perfil',
		component: () => import('@/views/dashboard/profile/View.vue'),
		name: 'profile'
	},
	{
		path: '/perfil/editar',
		component: () => import('@/views/dashboard/profile/Edit.vue'),
		name: 'profile'
	},
	//CENTRO DE ACTIVIDAD
	{
		path: '/actividades',
		component: () => import('@/views/dashboard/activity/Personal.vue')
	},
	//USUARIOS
	{
		path: '/usuarios/agregar',
		component: () => import('@/views/dashboard/users/Add.vue')
	},
	{
		path: '/usuarios',
		component: () => import('@/views/dashboard/users/List.vue')
	},
	//ACTIVIY
	{
		path: '/actividad',
		component: () => import('@/views/dashboard/activity/Personal.vue')
	},
	//POSTS
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

	//AUTHENTICATION
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
		path: '*',
		component: () => import('@/views/miscellanies/NotFound.vue'),
		name: 'notFound'
	}
];

const router = new Router({
	mode: 'history',
	routes
});

export default router;