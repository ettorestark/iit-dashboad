/* eslint-disable */
<template>
	<div class="container-fluid">
		<div class="row">
			<sidebar/>
			    <main class="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
         			<div class="main-navbar sticky-top bg-white">
						<navbar/>
         			</div>
         			<div class="main-content-container container-fluid px-4">
         				<slot/>
         			</div>
         			<v-footer/>
         		</main>
		</div>
	</div>
</template>

<script>
	import Navbar from '@/components/dashboard/layout/navbar/Index.vue'
	import Sidebar from '@/components/dashboard/layout/Sidebar.vue'
	import Footer from '@/components/dashboard/layout/Footer.vue'
	export default {
		components: {
			'sidebar': Sidebar,
			'navbar': Navbar,
			'v-footer': Footer
		}
	}
</script>