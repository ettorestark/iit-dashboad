<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
				<span class="text-uppercase page-subtitle">Usuarios</span>
				<h3 class="page-title">Registro de usuario</h3>
			</div>
		</div>
	    <div class="row">
		      <div class="col-lg-12">
	        <div class="card card-small user-activity mb-4">
	          <div class="card-header border-bottom">
	            <h6 class="m-0">Datos generales</h6>
	            <div class="block-handle"></div>
	          </div>
	          <div class="card-body p-3">
			   <div class="form-row">
	            <div class="form-group col-md-6">
	              <label for="firstName">Nombres</label>
	              <input type="text" class="form-control" :class="error.name.status" placeholder="Nombres" v-model="form.name">
								<div class="invalid-feedback">
									{{ this.error.name.message[0] }}
								</div>
	            </div>
	            <div class="form-group col-md-6">
	              <label for="lastName">Apellidos</label>
	              <input type="text" class="form-control" :class="error.lastname.status" placeholder="Apellidos" v-model="form.lastname">
	              <div class="invalid-feedback">
	              	{{ this.error.lastname.message[0] }}
	              </div>
	            </div>
	            <div class="form-group col-md-6">
	              <label for="userLocation">Ubicación</label>
	              <div class="input-group input-group-seamless">
	                <div class="input-group-prepend">
	                  <div class="input-group-text">
	                    <i class="fas fa-map-marker"></i>
	                  </div>
	                </div>
	                <input type="text" class="form-control" :class="error.address.status" placeholder="Ubicación" v-model="form.address">
	              </div>
	              <div class="invalid-feedback d-block">
	              	{{ this.error.address.message[0] }}
	              </div>
	            </div>
	            <div class="form-group col-md-6">
	              <label for="phoneNumber">Celular</label>
	              <div class="input-group input-group-seamless">
	                <div class="input-group-prepend">
	                  <div class="input-group-text">
	                    <i class="fas fa-phone"></i>
	                  </div>
	                </div>
	                <input type="text" class="form-control":class="error.phone.status" placeholder="Celular" v-model="form.phone">
	              </div>
	              <div class="invalid-feedback d-block">
	              	{{ this.error.phone.message[0] }}
	              </div>
	            </div>
	            <div class="form-group col-md-12">
	              <label for="emailAddress">Cargo</label>
	              <div class="input-group input-group-seamless">
	                <div class="input-group-prepend">
	                  <div class="input-group-text">
	                  	<i class="fas fa-briefcase"></i>
	                  </div>
	                </div>
	                <input type="email" class="form-control" :class="error.profile.status" placeholder="Cargo" v-model="form.profile">
	              </div>
	              <div class="invalid-feedback d-block">
	              	{{ this.error.profile.message[0] }}
	              </div>
	            </div>
	            <div class="form-group col-md-12">
	              <label for="emailAddress">Correo electrónico</label>
	              <div class="input-group input-group-seamless">
	                <div class="input-group-prepend">
	                  <div class="input-group-text">
	                  	<i class="fas fa-envelope"></i>
	                  </div>
	                </div>
	                <input type="email" class="form-control" :class="error.email.status" placeholder="Correo electrónico" v-model="form.email">
	              </div>
	              <div class="invalid-feedback d-block">
	              	{{ this.error.email.message[0] }}
	              </div>
	            </div>
	            <div class="form-group col-md-12">
	              <label for="emailAddress">Nombre de usuario</label>
	              <div class="input-group input-group-seamless">
	                <div class="input-group-prepend">
	                  <div class="input-group-text">
	                  	<i class="fas fa-user"></i>
	                  </div>
	                </div>
	                <input type="email" class="form-control" :class="error.username.status" placeholder="Nombre de usuario" v-model="form.username">
	              </div>
	              <div class="invalid-feedback d-block">
	              	{{ this.error.username.message[0] }}
	              </div>
	            </div>
	          </div>
	          </div>
	          <div class="card-footer border-top">
	            <a @click="addUser" href="#" class="btn btn-sm btn-accent ml-auto d-table mr-3">Agregar usuario</a>
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
					lastname: '',
					address: '',
					phone: '',
					profile: '',
					email: '',
					username: ''
				},

				error: {
					name: {
						status: '',
						message: ''
					},
					lastname: {
						status: '',
						message: ''
					},
					address: {
						status: '',
						message: ''
					},
					phone: {
						status: '',
						message: ''
					},
					profile: {
						status: '',
						message: ''
					},
					email: {
						status: '',
						message: ''
					},
					username: {
						status: '',
						message: ''
					}
				}
			}
		},

		methods: {
			addUser() {
				this.error.name.status = '';
        this.error.name.message = '';

				this.error.lastname.status = '';
        this.error.lastname.message = '';

				this.error.address.status = '';
        this.error.address.message = '';

				this.error.phone.status = '';
        this.error.phone.message = '';

				this.error.profile.status = '';
        this.error.profile.message = '';

				this.error.email.status = '';
        this.error.email.message = '';

				this.error.username.status = '';
        this.error.username.message = '';

				axios.post('http://integralit.test/api/user/sign_up',{
					name: this.form.name,
					lastname: this.form.lastname,
					address: this.form.address,
					phone: this.form.phone,
					profile: this.form.profile,
					email: this.form.email,
					username: this.form.username,
				})
					.then(response => {
						this.$toasted.show("¡Usuario creado!", { 
							 theme: "toasted-primary", 
							 position: "top-right", 
							 duration : 2000
						});
						this.$router.replace('/escritorio');
					})
					.catch(err => {
						let errors = err.response.data.errors;
						switch (err.response.status) {
							case 422:
									if(errors.name) {
										this.error.name.status = 'is-invalid';
						        this.error.name.message = errors.name;
									}

									if(errors.lastname) {
										this.error.lastname.status = 'is-invalid';
						        this.error.lastname.message = errors.lastname;
									}

									if(errors.address) {
										this.error.address.status = 'is-invalid';
						        this.error.address.message = errors.address;
									}

									if(errors.phone) {
										this.error.phone.status = 'is-invalid';
						        this.error.phone.message = errors.phone;
									}

									if(errors.profile) {
										this.error.profile.status = 'is-invalid';
						        this.error.profile.message = errors.profile;
									}

									if(errors.email) {
										this.error.email.status = 'is-invalid';
						        this.error.email.message = errors.email;
									}

									if(errors.username) {
										this.error.username.status = 'is-invalid';
						        this.error.username.message = errors.username;
									}
								break;
						}
					});
			}
		}
	}
</script>