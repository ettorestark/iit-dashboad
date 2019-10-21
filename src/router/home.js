const routes = [
	{
		path: '/escritorio',
		component: () => import('@/views/dashboard/Home.vue'),
		meta: {
			auth: true
		}
	}
];

export default routes;