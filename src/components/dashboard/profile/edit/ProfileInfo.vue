<template>
	<div>
<div class="form-row mx-4">
              	<div class="col-lg-4">
                  <label for="userProfilePicture" class="text-center w-100 mb-4">Foto de perfil</label>
                  <div class="edit-user-details__avatar m-auto">
                    <img :src="'/' + this.$store.state.auth.user.photo" alt="User Avatar">
                    <label class="edit-user-details__avatar__change">
                      <i class="fas fa-upload text-primary"></i>
                      <input type="file" id="userProfilePicture" class="d-none">
                    </label>
                  </div>
                  <button class="btn btn-sm btn-white d-table mx-auto mt-4" type="none"><i class="fas fa-upload mr-1"></i> Subir imagen</button>
                </div>
                <div class="col-lg-8">
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="firstName">Nombres</label>
                      <input type="text" class="form-control" :value="this.$store.state.auth.user.name" readonly>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="lastName">Apellidos</label>
                      <input type="text" class="form-control" id="lastName" :value="this.$store.state.auth.user.lastname" readonly>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="userLocation">Ubicaciòn</label>
                      <div class="input-group input-group-seamless">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <i class="fas fa-map-marker"></i>
                          </div>
                        </div>
                        <input type="text" class="form-control" :value="this.$store.state.auth.user.address" readonly>
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
                        <input type="text" class="form-control" id="phoneNumber" :value="this.$store.state.auth.user.phone">
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
                        <input type="email" class="form-control" id="emailAddress" :value="this.$store.state.auth.user.email" readonly>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div class="form-row mx-4">
                <div class="form-group col-md-12">
                  <label for="userBio">Descripción</label>
                  <textarea style="min-height: 87px;" id="userBio" name="userBio" class="form-control"></textarea>
                </div>
              </div>
              <div class="form-row mx-4">
                <div class="form-group col-md-12">
                  <button class="btn btn-primary">Cambiar información</button>
                </div>
              </div>
	</div>
</template>