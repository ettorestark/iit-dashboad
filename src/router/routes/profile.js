const routes = [
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
	}
];

export default routes;