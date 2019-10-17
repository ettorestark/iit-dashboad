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
	                <input type="email" class="form-control" placeholder="Correo electrónico">
	                <small id="emailHelp" class="form-text text-muted text-center">Recibirás un correo electrónico con un token único.</small>
	              </div>
	              <button type="submit" class="btn btn-pill btn-accent d-table mx-auto">Restablecer contraseña</button>
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