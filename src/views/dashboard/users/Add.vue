<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
				<span class="text-uppercase page-subtitle">Usuarios</span>
				<h3 class="page-title">Registro de usuario</h3>
			</div>
		</div>
	    <div class="row mt-4">
		      <div class="col-lg-8">
	        <div class="card card-small user-activity mb-4">
	          <div class="card-header border-bottom">
	            <h6 class="m-0">Datos generales</h6>
	            <div class="block-handle"></div>
	          </div>
	          <div class="card-body p-3">
			   <div class="form-row">
	            <div class="form-group col-md-6">
	              <label for="firstName">Nombres</label>
	              <input type="text" class="form-control" v-model="form.name">
	            </div>
	            <div class="form-group col-md-6">
	              <label for="lastName">Apellidos</label>
	              <input type="text" class="form-control" v-model="form.lastname">
	            </div>
	            <div class="form-group col-md-6">
	              <label for="userLocation">Ubicaciòn</label>
	              <div class="input-group input-group-seamless">
	                <div class="input-group-prepend">
	                  <div class="input-group-text">
	                    <i class="fas fa-map-marker"></i>
	                  </div>
	                </div>
	                <input type="text" class="form-control" v-model="form.address">
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
	                <input type="text" class="form-control" id="phoneNumber" v-model="form.phone">
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
	                <input type="email" class="form-control" v-model="form.profile">
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
	                <input type="email" class="form-control" v-model="form.email">
	              </div>
	            </div>
	          </div>
	          </div>
	          <div class="card-footer border-top">
	            <a @click="addUser" href="#" class="btn btn-sm btn-accent ml-auto d-table mr-3">Agregar usuario</a>
	          </div>
	        </div>
	      </div>

	      <div class="col-sm-12 col-lg-4 d-none d-lg-block">
	        <div class="card card-small user-details mb-4">
	          <div class="card-header p-0">
	            <div class="user-details__bg">
	              <img src="/images/user-profile/up-user-details-background.jpg" alt="User Details Background Image">
	            </div>
	          </div>
	          <div class="card-body p-0">
	            <div class="user-details__avatar mx-auto">
	              <img src="/images/avatars/unknown.jpg" alt="User Avatar">
	            </div>
	            <h4 class="text-center m-0 mt-2">{{ form.name }} {{ form.lastname }}</h4>
	            <p class="text-center text-light m-0 mb-2 text-uppercase">{{ form.profile }}</p>
	            <div class="user-details__user-data border-top border-bottom p-4">
	              <div class="row mb-3">
	                <div class="col w-50">
	                  <span>Correo electrónico</span>
	                  <span>{{ form.email }}</span>
	                </div>
	                <div class="col w-50">
	                  <span>Ubicación</span>
	                  <span>{{ form.address }}</span>
	                </div>
	              </div>
	              <div class="row">
	                <div class="col w-50">
	                  <span>Celular</span>
	                  <span>{{ form.phone }}</span>
	                </div>
	              </div>
	            </div>
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
					name: 'Fulanito',
					lastname: 'De Tal',
					address: 'La Libertad, Trujillo',
					phone: '000000000',
					profile: 'Practicante',
					email: 'fulanito@integralit.com.pe',
				}
			}
		},

		methods: {
			addUser() {
				axios.post('http://integralit.test/api/user/sign_up',{
					name: this.form.name,
					lastname: this.form.lastname,
					address: this.form.address,
					phone: this.form.phone,
					profile: this.form.profile,
					email: this.form.email,
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
						console.log(err);
					});
			}
		}
	}
</script>