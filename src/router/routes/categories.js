const routes = [
	{
		path: '/categorias',
		component: () => import('@/views/dashboard/categories/List.vue'),
		meta: {
			auth: true
		}
	},
	{
		path: '/agregar/categoria',
		component: () => import('@/views/dashboard/categories/Add.vue'),
		meta: {
			auth: true
		}
	},
	{
		path: '/categoria/:slug',
		component: () => import('@/views/dashboard/categories/Edit.vue'),
		meta: {
			auth: true
		}
	}
];

export default routes;