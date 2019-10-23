const routes = [
	{
		path: '/:user',
		component: () => import('@/views/dashboard/user/Home.vue'),
		meta: {
			auth: true
		}
	}
];

export default routes;