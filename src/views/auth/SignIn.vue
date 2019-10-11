<template>
	<div class="viewport d-flex justify-content-center align-items-center">
		<div class="col-lg-4 col-xl-3">
			<div id="signIn" class="card p-4">
				<form @submit.prevent="signIn">
					<div class="form-group text-left mb-4">
						<img src="img/icons/brand-3.png"/>
					</div>
					<div class="form-group">
						<h4 class="font-weight-bold">Iniciar sesión</h4>
					</div>
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Correo electrónico">
					</div>
					<div class="form-group">
						<input type="text" class="form-control" placeholder="Contraseña">
					</div>
					<div class="form-group">
						<router-link to="/dashboard">¿Olvidaste tu contraseña?</router-link>
					</div>
					<div class="form-group mt-4 text-right">
						<button type="submit" class="btn btn-primary">
							Ingresar
						</button>	 
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<style>
	.viewport {
		width: 100vw;
		height: 100vh;
		background-image: url('/images/background.png');
		background-size: cover;
	}

	#signIn {
		opacity: 0.95;
	}
	
	#signIn input[type=text] {
		border: none;
		padding: 0.8em 0;
		border-radius: none;
		border-bottom:  1px solid #e8412a;
		transition: border-bottom .4s;
	}

	#signIn input[type=text]:hover {
		box-shadow: none;
		border-bottom:  1px solid #444444;
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