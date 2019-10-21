const routes = [
	{
		path: '/partner',
		component: () => import('@/views/dashboard/partners/List.vue'),
		meta: {
			auth: true
		}
	},
	{
		path: '/partner/agregar',
		component: () => import('@/views/dashboard/partners/Add.vue'),
		meta: {
			auth: true
		}
	}
];

export default routes;