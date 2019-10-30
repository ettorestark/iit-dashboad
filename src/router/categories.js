const routes = [
	{
		path: '/categorias',
		component: () => import('@/views/dashboard/partners/List.vue'),
		meta: {
			auth: true
		}
	},
	{
		path: '/agregar/categoria',
		component: () => import('@/views/dashboard/partners/Add.vue'),
		meta: {
			auth: true
		}
	},
	{
		path: '/categoria/:slug',
		component: () => import('@/views/dashboard/partners/Edit.vue'),
		meta: {
			auth: true
		}
	}
];

export default routes;