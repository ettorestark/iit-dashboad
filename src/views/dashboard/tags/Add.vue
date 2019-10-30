<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
			  <span class="text-uppercase page-subtitle">Etiquetas</span>
			  <h3 class="page-title">Agregar</h3>
		  </div>
	   </div>
		<div class="row">
      <div class="col-12">
        <div class="card card-small mb-3">
          <div class="card-body">
            <div class="form-group">
            	<input type="text" class="form-control" placeholder="Nombre" v-model="form.name">
            </div>
            <div class="form-group">
            	<input type="text" class="form-control" v-model="slug" readonly>
            </div>
            <div class="form-group">
            	<textarea rows="4" class="form-control" placeholder="Descripción" v-model="form.description"></textarea>
            </div>
          </div>
          <div class="card-footer border-top">
          	<button type="submit" class="btn btn-primary" @click.prevent="addTag">
          		Agregar
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
				form: {
					name: '',
					description: ''
				},

				error: {
					name: {
						status: '',
						message: ''
					},
					description: '',
					message: ''
				}
			}
		},

		computed: {
			slug: function() {
				return this.form.name.toLowerCase().split(' ').join('_')
			}
		},

		methods: {
			addTag() {
				axios.post('http://integralit.test/api/tag', {
					user_id: this.$store.state.auth.user.id,
					name: this.form.name,
					slug: this.slug,
					description: this.form.description
				})
					.then(response => {
            this.$toasted.show("<i class='fas fa-tags'></i> ¡Etiqueta agregada!", { 
               theme: "toasted-primary", 
               position: "top-right", 
               duration : 2000
            });
            window.scrollTo(0, 0);
            this.cleanInputs();
					})
			},

			cleanInputs() {
				this.form.name = '';
				this.slug = '';
				this.form.description = '';
			}
		}
	}
</script>