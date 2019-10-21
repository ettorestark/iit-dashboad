const routes = [
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
	}
];

export default routes;