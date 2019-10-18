<template>
    <main class="viewport main-content col">
      <div class="main-content-container container-fluid px-4 my-auto h-100">
        <div class="row no-gutters h-100">
          <div class="col-lg-3 col-md-5 auth-form mx-auto my-auto">
            <div class="card">
              <div class="card-body">
                <img class="auth-form__logo d-table mx-auto mb-3" src="img/icons/icon.png" alt="Shards Dashboards - Register Template">
                <h5 class="auth-form__title text-center mb-4">Bienvenido al Dashboard de <br/><b>Integral-it</b></h5>
                <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Dirección de correo electrónico</label>
                    <input type="email" class="form-control" :class="error.email.status" placeholder="Correo electrónico" v-model="form.email">
                    <div class="invalid-feedback">
                      {{ error.email.message[0] }}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Contraseña</label>
                    <input type="password" class="form-control" :class="error.password.status" placeholder="contraseña" v-model="form.password">
                    <div class="invalid-feedback">
                      {{ error.password.message[0] }}
                    </div>
                  </div>
                  <div class="form-group mb-3 d-table mx-auto">
                  </div>
                  <button @click.prevent="signIn" class="btn btn-pill btn-accent d-table mx-auto">Acceder</button>
                </form>
              </div>
              <div class="card-footer border-top">
                <ul class="auth-form__social-icons d-table mx-auto">
                  <li><a href="#"><i class="fab fa-google"></i></a></li>
                </ul>
              </div>
            </div>
            <div class="auth-form__meta mt-4 text-center">
              <router-link to="/restaurar">¿Olvidaste tu contraseña?</router-link>
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
					email: '',
					password: ''
				},
        error: {
          email: {
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
			signIn() {
        let email = this.form.email;
        let password = this.form.password;
        this.error.email.status = '';
        this.error.email.message = '';
        this.error.password.status = '';
        this.error.password.message = '';
        this.$store.dispatch('sign_in', { email, password })
          .then(response => {
            this.$router.replace('/escritorio');
          })
          .catch(err => {
            switch (err.response.status) {
              case 401:
                    this.error.email.status = 'is-invalid';
                    this.error.email.message = ['Usuario o contraseña inválido'];
                break;
              case 422:
                let errors = err.response.data.errors;
                if(errors.email) {
                    this.error.email.status = 'is-invalid';
                    this.error.email.message = errors.email;
                }

                if(errors.password) {
                    this.error.password.status = 'is-invalid';
                    this.error.password.message = errors.password;
                }
                break;
            }
          });
			}
		}
	}
</script>