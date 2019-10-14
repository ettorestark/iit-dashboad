<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
				<span class="text-uppercase page-subtitle">Perfil de usuario</span>
				<h3 class="page-title">Editar</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12 mx-auto mt-4">
				<div class="card card-small edit-user-details mb-4">
          <div class="card-body p-0">
            <form action="#" class="py-4">
              <div class="form-row mx-4">
                <div class="col mb-3">

                </div>
              </div>
              <div class="form-row mx-4">
              	<div class="col-lg-4">
                  <label for="userProfilePicture" class="text-center w-100 mb-4">Foto de perfil</label>
                  <div class="edit-user-details__avatar m-auto">
                    <img src="/images/avatars/0.jpg" alt="User Avatar">
                    <label class="edit-user-details__avatar__change">
                      <i class="material-icons mr-1">&#xE439;</i>
                      <input type="file" id="userProfilePicture" class="d-none">
                    </label>
                  </div>
                  <button class="btn btn-sm btn-white d-table mx-auto mt-4" type="none"><i class="fas fa-upload mr-1"></i> Subir imagen</button>
                </div>
                <div class="col-lg-8">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="firstName">Nombres</label>
                      <input type="text" class="form-control" id="firstName" value="Juan Carlos">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="lastName">Apellidos</label>
                      <input type="text" class="form-control" id="lastName" value="Bruno Paredes">
                    </div>
                    <div class="form-group col-md-6">
                      <label for="userLocation">Ubicaciòn</label>
                      <div class="input-group input-group-seamless">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <i class="fas fa-map-marker"></i>
                          </div>
                        </div>
                        <input type="text" class="form-control" value="La Libertad, Trujillo">
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
                        <input type="text" class="form-control" id="phoneNumber" value="+40 1234 567 890">
                      </div>
                    </div>
                    <div class="form-group col-md-12">
                      <label for="emailAddress">Corre Electrónico</label>
                      <div class="input-group input-group-seamless">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <i class="fas fa-envelope"></i>
                          </div>
                        </div>
                        <input type="email" class="form-control" id="emailAddress" placeholder="jcpared@integralit.com.pe">
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="form-row mx-4">
                <div class="form-group col-md-12">
                  <label for="userBio">Descripción</label>
                  <textarea style="min-height: 87px;" id="userBio" name="userBio" class="form-control">Ingeniero en Sistemas. Fundador de Integral-it y Pakamuros.</textarea>
                </div>
              </div>
              <hr>
              <div class="form-row mx-4">
                <div class="col mb-3">
                  <p class="form-text text-muted m-0">Configura la información de tus perfiles personales.</p>
                </div>
              </div>
              <div class="form-row mx-4">
                <div class="form-group col-md-4">
                  <label for="socialFacebook">Facebook</label>
                  <div class="input-group input-group-seamless">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="fab fa-facebook-f"></i>
                      </div>
                    </div>
                    <input type="text" class="form-control" id="socialFacebook">
                  </div>
                </div>
                <div class="form-group col-md-4">
                  <label for="socialTwitter">Twitter</label>
                  <div class="input-group input-group-seamless">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="fab fa-twitter"></i>
                      </div>
                    </div>
                    <input type="email" class="form-control" id="socialTwitter">
                  </div>
                </div>
                <div class="form-group col-md-4">
                  <label for="socialGitHub">GitHub</label>
                  <div class="input-group input-group-seamless">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="fab fa-github"></i>
                      </div>
                    </div>
                    <input type="text" class="form-control" id="socialGitHub">
                  </div>
                </div>
              </div>
              <div class="form-row mx-4">
                <div class="form-group col-md-4">
                  <label for="socialSlack">Slack</label>
                  <div class="input-group input-group-seamless">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="fab fa-slack"></i>
                      </div>
                    </div>
                    <input type="email" class="form-control" id="socialSlack">
                  </div>
                </div>
                <div class="form-group col-md-4">
                  <label for="socialDribbble">Linkedin</label>
                  <div class="input-group input-group-seamless">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="fab fa-linkedin-in"></i>
                      </div>
                    </div>
                    <input type="email" class="form-control" id="socialDribbble">
                  </div>
                </div>
                <div class="form-group col-md-4">
                  <label for="socialGoogle">YouTube</label>
                  <div class="input-group input-group-seamless">
                    <div class="input-group-prepend">
                      <div class="input-group-text">
                        <i class="fab fa-youtube"></i>
                      </div>
                    </div>
                    <input type="email" class="form-control" id="socialGoogle">
                  </div>
                </div>
              </div>
              <hr>
              <div class="form-row mx-4">
                <div class="col mb-3">
                  <p class="form-text text-muted m-0">Cambia tu contraseña</p>
                </div>
              </div>
              <div class="form-row mx-4">
                <div class="form-group col-md-4">
                  <label for="firstName">Antigua contraseña</label>
                  <input type="text" class="form-control" id="firstName" placeholder="**********">
                </div>
                <div class="form-group col-md-4">
                  <label for="lastName">Nueva contraseña</label>
                  <input type="text" class="form-control" id="lastName" placeholder="Nueva contraseña">
                </div>
                <div class="form-group col-md-4">
                  <label for="emailAddress">Repite la nueva contraseña</label>
                  <input type="email" class="form-control" id="emailAddress" placeholder="Repite la contraseña">
                </div>
              </div>
            </form>
          </div>
          <div class="card-footer border-top">
            <a href="#" class="btn btn-sm btn-accent ml-auto d-table mr-3">Guardar cambios</a>
          </div>
        </div>
			</div>
		</div>
	</div>
</template>