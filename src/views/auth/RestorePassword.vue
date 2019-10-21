<template>
  <main class="viewport main-content col">
    <div class="main-content-container container-fluid px-4 my-auto h-100">
      <div class="row no-gutters h-100">
        <div class="col-lg-3 col-md-5 auth-form mx-auto my-auto">
          <div class="card">
            <div class="card-body">
              <img class="auth-form__logo d-table mx-auto mb-3" src="/img/icons/icon.png">
              <h5 class="auth-form__title text-center mb-4">Cambiar contraseña</h5>
              <form>
                <div class="form-group mb-4">
                  <label for="exampleInputEmail1">Contraseña</label>
                  <input type="email" class="form-control"  placeholder="Correo electrónico">
                  <div class="invalid-feedback">
                  </div>
                </div>
                <div class="form-group mb-4">
                  <label for="exampleInputEmail1">Repetir contraseña</label>
                  <input type="email" class="form-control"  placeholder="Correo electrónico">
                  <div class="invalid-feedback">
                  </div>
                </div>
                <button class="btn btn-pill btn-accent d-table mx-auto">Restablecer contraseña</button>
              </form>
            </div>
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
  
</script>