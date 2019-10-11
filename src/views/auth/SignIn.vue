<template>
	<div class="viewport d-flex justify-content-center align-items-center">
		<div class="col-lg-4">
			<form @submit.prevent="signIn">
				<div class="form-group text-center mb-4">
					<img src="img/icons/brand-test.png"/>
				</div>
				<div class="form-group">
					<div class="input-group mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text" id="basic-addon1">
								<i class="fas fa-envelope"></i>
							</span>
						</div>
						<input type="text" class="form-control" placeholder="Correo electrónico" v-model="form.email">
					</div>
				</div>
				<div class="form-group">
					<div class="input-group mb-3">
						<div class="input-group-prepend">
							<span class="input-group-text">
								<i class="fas fa-lock"></i>
							</span>
						</div>
						<input type="text" class="form-control" placeholder="Contraseña" v-model="form.password">
					</div>
				</div>
				<div class="form-group">
					<router-link to="/">
						¿Olvidaste tu contraseña?
					</router-link>
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn-primary btn-block">
						<i class="fas fa-sign-in-alt mr-1"></i>
						Ingresar
					</button>	 
				</div>
				<div class="form-group">
					<button class="btn btn-secondary btn-block">
						<i class="fab fa-google mr-1"></i>
						Ingresar con Google
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<style>
	.viewport {
		width: 100vw;
		height: 100vh;
	}
</style>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				form: {
					email: '',
					password: ''
				}
			}
		},

		methods: {
			signIn() {
				let data = {
					"email": 'ricardo@test.com',
					"password": 'password'
				};

				fetch('http://integralit.test/api/user/sign_in', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'

					},
					body: JSON.stringify(data)
				})
					.then(response => {
						console.log(response);
					})
					.catch(err => {
						console.log(err);
					})
			}
		}
	}
</script>