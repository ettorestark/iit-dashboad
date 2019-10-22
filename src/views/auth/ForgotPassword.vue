<template>
	<main class="viewport main-content col">
	  <div class="main-content-container container-fluid px-4 my-auto h-100">
	    <div class="row no-gutters h-100">
	      <div class="col-lg-3 col-md-5 auth-form mx-auto my-auto">
	        <div class="card">
	          <div class="card-body">
	            <img class="auth-form__logo d-table mx-auto mb-3" src="img/icons/icon.png" alt="Shards Dashboards - Register Template">
	            <h5 class="auth-form__title text-center mb-4">Restablecer contraseña</h5>
	            <form>
	              <div class="form-group mb-4">
	                <label for="exampleInputEmail1">Dirección de correo electrónico</label>
	                <input type="email" class="form-control" :class="error.email.status" placeholder="Correo electrónico" v-model="form.email">
	                <div class="invalid-feedback">
	                	{{ error.email.message }}
	                </div>
	                <small id="emailHelp" class="form-text text-muted text-center">Recibirás un correo electrónico con un token único.</small>
	              </div>
	              <button class="btn btn-pill btn-accent d-table mx-auto" @click.prevent="restore">Restablecer contraseña</button>
	            </form>
	          </div>
	        </div>
	        <div class="auth-form__meta d-flex mt-4">
	          <router-link to="/" class="mx-auto">Inicio de sesión.</router-link>
	        </div>
	      </div>
	    </div>
	  </div>
	</main>
</template>

<style>
	.viewport {
		width: 100vw;
		height: 100vh;
		background-size: cover;
	}
</style>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				form: {
					email: ''
				},
				error: {
					email: {
						status: '',
						message: ''
					}
				}
			}
		},

		methods: {
			restore() {
				this.error.email.status = '';
       			this.error.email.message = '';
				axios.post('http://integralit.test/api/user/password/request',{
						email: this.form.email
					})
					.then(response => {
						this.$router.replace('/');
						this.$toasted.show('<i class="fas fa-envelope mr-2"></i> Correo enviado', { 
							 theme: "toasted-primary", 
							 position: "top-right", 
							 duration : 2000
						});
					})
					.catch(err => {
						switch (err.response.status) {
							case 401:
			                    this.error.email.status = 'is-invalid';
			                    this.error.email.message = 'El correo electrónico no se encuentra registrado.';
								break;
							case 422: 
			                    this.error.email.status = 'is-invalid';
			                    this.error.email.message = err.response.data.errors.email[0];
								break;
						}
					})
			}
		}
	}
</script>