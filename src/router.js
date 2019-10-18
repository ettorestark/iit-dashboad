import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'

Vue.use(Router);

const routes = [
	{
		path: '/escritorio',
		component: () => import('@/views/dashboard/Home.vue'),
		meta: {
			auth: true
		}
	},
	//CENTRO DE MENSAJES
	{
		path: '/mensajes',
		component: () => import('@/views/dashboard/messages/All.vue'),
		meta: {
			auth: true
		}
	},
	//PROFILE
	{
		path: '/perfil',
		component: () => import('@/views/dashboard/profile/View.vue'),
		meta: {
			auth: true
		}
	},
	{
		path: '/perfil/editar',
		component: () => import('@/views/dashboard/profile/Edit.vue'),
		meta: {
			auth: true
		}
	},
	//CENTRO DE ACTIVIDAD
	{
		path: '/actividades',
		component: () => import('@/views/dashboard/activity/Personal.vue'),
		meta: {
			auth: true
		}
	},
	//USUARIOS
	{
		path: '/usuarios/agregar',
		component: () => import('@/views/dashboard/users/Add.vue'),
		meta: {
			auth: true
		}
	},
	{
		path: '/usuarios',
		component: () => import('@/views/dashboard/users/List.vue'),
		meta: {
			auth: true
		}
	},
	//ACTIVIY
	{
		path: '/actividad',
		component: () => import('@/views/dashboard/activity/Personal.vue'),
		meta: {
			auth: true
		}
	},
	//POSTS
	{
		path: '/publicaciones',
		component: () => import('@/views/dashboard/post/List.vue'),
		meta: {
			auth: true
		}
	},
	{
		path: '/publicaciones/agregar',
		component: () => import('@/views/dashboard/post/Add.vue'),
		meta: {
			auth: true
		}
	},
		{
		path: '/publicaciones/borradores',
		component: () => import('@/views/dashboard/post/Drafts.vue'),
		meta: {
			auth: true
		}
	},

	//AUTHENTICATION
	{
		path: '/',
		component: () => import('@/views/auth/SignIn.vue'),
		name: 'sign_in',
		meta: {
			auth: false,
			layout: 'blank'
		}
	},
	{
		path: '/restaurar',
		component: () => import('@/views/auth/ForgotPassword.vue'),
		meta: {
			auth: false,
			layout: 'blank'
		}
	},
	//ERROR ROUTES
	{
		path: '*',
		component: () => import('@/views/miscellanies/NotFound.vue'),
		name: 'notFound',
		meta: {
			auth: false,
			layout: 'default'
		}
	}
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