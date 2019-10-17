import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [
	{
		path: '/escritorio',
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
			layout: 'blank'
		}
	},
	{
		path: '/restaurar',
		component: () => import('@/views/auth/ForgotPassword.vue'),
		meta: {
			layout: 'blank'
		}
	},
	//ERROR ROUTES
	{
		path: '*',
		component: () => import('@/views/miscellanies/NotFound.vue'),
		name: 'notFound',
		meta: {
			layout: 'default'
		}
	}
];

const router = new Router({
	mode: 'history',
	routes
});

export default router;