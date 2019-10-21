<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
			  <span class="text-uppercase page-subtitle">Partners</span>
			  <h3 class="page-title">Visión general</h3>
		  </div>
	  	</div>
		<div class="row">
			<div v-for="(item, index) of tags" class="col-lg-3 col-md-6 col-sm-12 mb-4">
				<div class="card card-small card-post card-post--1">
					<div class="card-body text-center">
						<h4 class="font-weight-bold text-uppercase">{{ item.name }}</h4>
					</div>
					<div class="card-footer border-top text-primary">
						<span class="badge badge-secondary mr-2" @click.prevent="deleteTag(item.id, index)">
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
				tags: []
			}
		},

		methods: {
			getTags() {
				axios.get('http://integralit.test/api/tag')
					.then(response => {
						this.tags = response.data;
					})
					.catch(err => {
						console.log(err);
					});
			},

			deleteTag(id, index) {
				axios.delete('http://integralit.test/api/tag/' + id)
					.then(response => {
						this.tags.splice(index, 1);
					})
					.catch(err => {
						console.log(err);
					})
			}
		},

		mounted() {
			this.getTags();
		}
	}
</script>