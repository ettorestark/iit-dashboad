<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
			  <span class="text-uppercase page-subtitle">Testimonios</span>
			  <h3 class="page-title">Visión general</h3>
		  </div>
	   </div>
		<div class="row">
		  <div class="col-lg-4" v-for="(item, index) of testimonials">
		    <router-link to="/" class="no-hover">
		      <div class="card card-small mb-4 pt-3">
		        <div class="card-body border-bottom text-center">
		          <div class="mb-3 mx-auto">
		            <img class="rounded-circle" :src="item.photo" alt="User Avatar" width="110">
		          </div>
		          <h4 class="mb-0">{{ item.name }} {{ item.lastname }}</h4>
		        </div>
		        <div class="card-footer text-muted">
		        	{{ item.message }}
		        </div>
						<div class="card-footer border-top text-primary">
							<span class="badge badge-secondary mr-2" @click.prevent="deleteTestimonial(item.id, index)">
								<i class="fas fa-trash"/>
							</span>
							<span class="badge badge-secondary"><i class="fas fa-edit"></i></span>
						</div>
		      </div>
		    </router-link>
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
			},

			async deleteTestimonial(id, index) {
				const location = `integralit.test/api/testimonial/${index}`;

				const settings = {
					method: 'DELETE',
				};

				const response = await fetch(`http://${location}`, settings);
				switch (response.status) {
					case 200:
						this.testimonials.splice(index, 1);
					break;
				}
			}
		}
	}
</script>