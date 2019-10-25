<template>
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
</template>