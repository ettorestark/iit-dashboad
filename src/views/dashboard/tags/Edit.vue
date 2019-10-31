<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
			  <span class="text-uppercase page-subtitle">{{ this.$route.params.slug }}</span>
			  <h3 class="page-title">EDICIÓN</h3>
		  </div>
	  </div>
		<div class="row">
      <div class="col-12">
        <div class="card card-small mb-3">
          <div class="card-body">
            <div class="form-group">
            	<input type="text" class="form-control" placeholder="Nombre" v-model="name">
            </div>
            <div class="form-group">
            	<input type="text" class="form-control" v-model="slug" readonly>
            </div>
            <div class="form-group">
            	<textarea rows="4" class="form-control" placeholder="Descripción" v-model="form.description"></textarea>
            </div>
          </div>
          <div class="card-footer border-top">
          	<button type="submit" class="btn btn-primary" @click.prevent="updateTag">
          		Actualizar
          	</button>
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
				tag: '',
				form: {
					description: ''
				},
				name: '',
				slug: '',
			}
		},

		watch: {
			name: function(data) {
				this.slug = data.toLowerCase().split(' ').join('_')
			}
		},

		mounted() {
			this.getTag();
		},

		methods: {
			getTag() {
				axios.get('http://integralit.test/api/tag/' + this.$route.params.slug)
					.then(response => {
						let data = response.data;
						this.name = data.name;
						this.slug = data.slug;
						this.form.description = data.description;
					})
			},

			updateTag() {
				axios.put('http://integralit.test/api/tag/' + this.$route.params.slug, {
					user_id: this.$store.state.auth.user.id,
					name: this.name,
					slug: this.slug,
					description: this.form.description
				})
					.then(response => {
            this.$toasted.show("<i class='fas fa-tags'></i> ¡Etiqueta actualizada!", { 
               theme: "toasted-primary", 
               position: "top-right", 
               duration : 2000
            });
            this.$router.replace('/etiquetas');
					});
			}
		}
	}
</script>