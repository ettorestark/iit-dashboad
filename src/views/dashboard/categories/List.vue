<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
			  <span class="text-uppercase page-subtitle">Categorías</span>
			  <h3 class="page-title">Listar</h3>
		  </div>
	  </div>
		<div class="row">
			<div class="col-lg-3 col-md-6 col-sm-12 mb-4" v-for="(item, index) of categories">
					<div class="card card-small card-post card-post--1">
						<div class="card-body text-center">
							<h4 class="font-weight-bold text-uppercase">{{ item.name }}</h4>
						</div>
						<div class="card-footer border-top text-primary">
							<span class="badge badge-secondary mr-2">
								<i class="fas fa-trash" @click.prevent="deleteCategory(item.id, index)"/>
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
				categories: []
			}
		},

		mounted() {
			this.getCategories();
		},

		methods: {
			getCategories() {
				axios.get('http://integralit.test/api/category')
					.then(response => {
						this.categories = response.data;
					});
			},

			deleteCategory(id, index) {

			}
		}
	}
</script>