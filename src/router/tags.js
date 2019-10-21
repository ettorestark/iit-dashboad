const routes = [
	{
		path: '/etiquetas',
		component: () => import('@/views/dashboard/tags/List.vue'),
		meta: {
			auth: true
		}
	}
];

export default routes;