<template>
	<div>
      <div class="form-row mx-4">
        <div class="col mb-3">
          <p class="form-text text-muted m-0">Cambia tu contraseña</p>
        </div>
      </div>
      <div class="form-row mx-4">
        <div class="form-group col-md-4">
          <label for="firstName">Antigua contraseña</label>
          <input type="password" class="form-control" :class="error.old_password.status" placeholder="Contraseña" v-model="form.old_password">
          <div class="invalid-feedback">
          	{{ error.old_password.message[0] }}
          </div>
        </div>
        <div class="form-group col-md-4">
          <label for="lastName">Nueva contraseña</label>
          <input type="password" class="form-control" :class="error.password.status" placeholder="Nueva contraseña" v-model="form.password">
          <div class="invalid-feedback">
          	{{ error.password.message[0] }}
          </div>
        </div>
        <div class="form-group col-md-4">
          <label for="emailAddress">Repite la nueva contraseña</label>
          <input type="password" class="form-control" placeholder="Repite la contraseña" v-model="form.password_confirmation">
        </div>
      </div>
      <div class="form-row mx-4">
        <button class="btn btn-sm btn-accent" @click.prevent="changePassword">Cambiar contraseña</button>
      </div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				form: {
					old_password: '',
					password: '',
					password_confirmation: ''
				},

				error: {
					old_password: {
						status: '',
						message: ''
					},
					password: {
						status: '',
						message: ''
					}
				}
			}
		},

		methods: {
			changePassword() {
				this.error.old_password.status = '';
				this.error.old_password.message = '';

				this.error.password.status = '';
				this.error.password.message = '';

				axios.post('http://integralit.test/api/user/password/change', {
					id: this.$store.state.auth.user.id,
					old_password: this.form.old_password,
					password: this.form.password,
					password_confirmation: this.form.password_confirmation
				})
					.then(response => {
						this.form.old_password = '';
						this.form.password = '';
						this.form.password_confirmation = '';
						window.scrollTo(0, 0);
						this.$toasted.show("<i class='fas fa-lock'></i>¡Contraseña cambiada satisfactoriamente!", { 
							 theme: "toasted-primary", 
							 position: "top-right", 
							 duration : 2000
						});
					})
					.catch(err => {
						let errors = err.response.data.errors;
						switch (err.response.status) {
							case 401:
									this.error.old_password.status = 'is-invalid';
									this.error.old_password.message = ['La contraseña introducida no corresponde con la actual'];
								break;
							case 422:
								if(errors.old_password) {
									this.error.old_password.status = 'is-invalid';
									this.error.old_password.message = errors.old_password;
								}
								if(errors.password) {
									this.error.password.status = 'is-invalid';
									this.error.password.message = errors.password;
								}
								break;
						}
					})
			}
		}
	}
</script>