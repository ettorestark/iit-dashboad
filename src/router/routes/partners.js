const routes = [
	{
		path: '/partners',
		component: () => import('@/views/dashboard/partners/List.vue'),
		meta: {
			auth: true
		}
	},
	{
		path: '/agregar/partner',
		component: () => import('@/views/dashboard/partners/Add.vue'),
		meta: {
			auth: true
		}
	},
	{
		path: '/partner/:name',
		component: () => import('@/views/dashboard/partners/Edit.vue'),
		meta: {
			auth: true
		}
	}
];

export default routes;