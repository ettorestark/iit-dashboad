<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
			  <span class="text-uppercase page-subtitle">Testimonios</span>
			  <h3 class="page-title">Visión general</h3>
		  </div>
	   </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				testimonials: []
			}
		},

		mounted() {
			this.getTestimonials();
		},

		methods: {
			async getTestimonials() {
				let response = await fetch('http://integralit.test/api/testimonial');
				this.testimonials = await response.json();
			}
		}
	}
</script>