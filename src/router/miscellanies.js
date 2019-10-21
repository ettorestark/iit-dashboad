const routes = [
	{
		path: '*',
		component: () => import('@/views/miscellanies/NotFound.vue'),
		name: 'notFound',
		meta: {
			auth: false,
			layout: 'default'
		}
	}
];

export default routes;