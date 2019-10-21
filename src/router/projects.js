const routes = [
	{
		path: '/proyectos',
		component: () => import('@/views/dashboard/projects/List.vue'),
		meta: {
			auth: true
		}
	}
];

export default routes;