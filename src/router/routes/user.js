const routes = [
	{
		path: '/usuario/:username',
		component: () => import('@/views/dashboard/user/Home.vue'),
		meta: {
			auth: true
		}
	}
];

export default routes;