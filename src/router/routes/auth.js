const routes = [
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
	{
		path: '/restablecer/:hash',
		component: () => import('@/views/auth/RestorePassword.vue'),
		meta: {
			auth: false,
			layout: 'blank'
		}
	} 
];

export default routes;