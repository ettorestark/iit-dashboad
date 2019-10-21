const routes = [
	{
		path: '/mensajes',
		component: () => import('@/views/dashboard/messages/All.vue'),
		meta: {
			auth: true
		}
	}
];

export default routes;