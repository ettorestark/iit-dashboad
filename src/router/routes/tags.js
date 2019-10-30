const routes = [
	{
		path: '/etiquetas',
		component: () => import('@/views/dashboard/tags/List.vue'),
		meta: {
			auth: true
		}
	},
	{
		path: '/agregar/etiqueta',
		component: () => import('@/views/dashboard/tags/Add.vue'),
		meta: {
			auth: true
		}
	},
	{
		path: '/etiqueta/:slug',
		component: () => import('@/views/dashboard/tags/Edit.vue'),
		meta: {
			auth: true
		}
	}
];


export default routes;