<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
			  <span class="text-uppercase page-subtitle">Partners</span>
			  <h3 class="page-title">Visión general</h3>
		  </div>
	  	</div>
		<div class="row">
			<div v-for="(item, index) of partners" class="col-lg-3 col-md-6 col-sm-12 mb-4">
				<div class="card card-small card-post card-post--1">
					<div class="card-body text-center">
						<img :src="item.icon"/>
					</div>
					<div class="card-footer border-top text-primary">
						<span class="badge badge-secondary mr-2" @click.prevent="deletePartner(item.id, index)">
							<i class="fas fa-trash"/>
						</span>
						<span class="badge badge-secondary"><i class="fas fa-edit"></i></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				partners: []
			}
		},

		mounted() {
			this.getPartners();
		},

		methods: {
			getPartners() {
				axios.get('http://integralit.test/api/partner')
					.then(response => {
						this.partners = response.data;
					})
					.catch(err => {
						console.log(err);
					});
			},

			deletePartner(id, index) {
				window.alert(index);
				axios.delete('http://integralit.test/api/partner/' + id)
					.then(response => {
						this.partners.splice(index, 1);
					})
					.catch(err => {
						console.log(err);
					})
			}
		}
	}
</script>