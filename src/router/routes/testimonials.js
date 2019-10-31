const routes = [
	{
		path: '/testimonios',
		component: () => import('@/views/dashboard/testimonials/List.vue'),
		meta: {
			auth: true
		}
	},
	{
		path: '/agregar/testimonio',
		component: () => import('@/views/dashboard/testimonials/Add.vue'),
		meta: {
			auth: true
		}
	},
	{
		path: '/testimonio/:slug',
		component: () => import('@/views/dashboard/testimonials/Edit.vue'),
		meta: {
			auth: true
		}
	}
];

export default routes;