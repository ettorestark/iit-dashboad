const routes = [
{
		path: '/publicaciones',
		component: () => import('@/views/dashboard/post/List.vue'),
		meta: {
			auth: true
		}
	},
	{
		path: '/publicaciones/agregar',
		component: () => import('@/views/dashboard/post/Add.vue'),
		meta: {
			auth: true
		}
	},
		{
		path: '/publicaciones/borradores',
		component: () => import('@/views/dashboard/post/Drafts.vue'),
		meta: {
			auth: true
		}
	}
];

export default routes;