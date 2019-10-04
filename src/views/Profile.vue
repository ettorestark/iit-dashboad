<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
				<span class="text-uppercase page-subtitle">Perfil de usuario</span>
				<h3 class="page-title">Visión general</h3>
			</div>
		</div>
		<div class="row">
          <div class="col-lg-4">
            <div class="card card-small mb-4 pt-3">
              <div class="card-header border-bottom text-center">
                <div class="mb-3 mx-auto">
                  <img class="rounded-circle" src="images/avatars/0.jpg" alt="User Avatar" width="110"> </div>
                <h4 class="mb-0">Sierra Brooks</h4>
                <span class="text-muted d-block mb-2">CEO & FOUNDER</span>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item p-4">
                  <strong class="text-muted d-block mb-2">Descripción</strong>
                  <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="card card-small mb-4">
              <div class="card-header border-bottom">
                <h6 class="m-0">Detalles de cuenta</h6>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item p-3">
                  <div class="row">
                    <div class="col">
                      <form>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="feFirstName">Nombres</label>
                            <input type="text" class="form-control" id="feFirstName" placeholder="First Name" value="Sierra"> </div>
                          <div class="form-group col-md-6">
                            <label for="feLastName">Apellidos</label>
                            <input type="text" class="form-control" id="feLastName" placeholder="Last Name" value="Brooks"> </div>
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="feEmailAddress">Email</label>
                            <input type="email" class="form-control" id="feEmailAddress" placeholder="Email" value="sierra@example.com"> </div>
                          <div class="form-group col-md-6">
                            <label for="fePassword">Password</label>
                            <input type="password" class="form-control" id="fePassword" placeholder="Password"> </div>
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-12">
                            <label for="feDescription">Description</label>
                            <textarea class="form-control" name="feDescription" rows="5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?</textarea>
                          </div>
                        </div>
                        <button type="submit" class="btn btn-accent">Actualizar</button>
                      </form>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
	</div>
</template>