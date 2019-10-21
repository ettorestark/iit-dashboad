const routes = [
	{
		path: '/actividades',
		component: () => import('@/views/dashboard/activity/Personal.vue'),
		meta: {
			auth: true
		}
	}
];

export default routes;