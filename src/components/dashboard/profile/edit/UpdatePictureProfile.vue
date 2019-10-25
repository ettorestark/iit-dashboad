<template>
	<div class="col-lg-4">
    <label for="userProfilePicture" class="text-center w-100 mb-4">Foto de perfil</label>
    <div class="edit-user-details__avatar m-auto">
      <img :src="this.$store.state.auth.user.photo" alt="User Avatar" v-if="!photo.src">
      <img :src="photo.src" v-if="photo.src">
      <label class="edit-user-details__avatar__change">
        <i class="fas fa-upload text-primary"></i>
        <input type="file" id="userProfilePicture" class="d-none" @change="uploadProfilePicture">
      </label>
    </div>
    <div class="d-flex justify-content-center">
      <label for="userProfilePicture" class="btn btn-outline-primary mt-3 mb-4 d-none d-sm-block">Cambiar foto</label>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        form: {
          photo: ''
        },
        photo: {
          src: ''
        }
      }
    },

    methods: {
      uploadProfilePicture(e) {
        this.form.photo = e.target.files[0];

        let reader = new FileReader();
        reader.readAsDataURL(this.form.photo);

        reader.onload = e => {
          this.photo.src = e.target.result;
          this.updateProfilePicture();
        };
      },
      updateProfilePicture() {
        let formData = new FormData();
        formData.append('photo', this.form.photo)
        axios.post('http://integralit.test/api/user/photo/'+this.$store.state.auth.user.id, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(response => {
              this.successfulResponse(response.data);
          });
      },

      successfulResponse(data) {
        this.$store.commit('update_profile_picture', data)
        this.$toasted.show("<i class='fas fa-handshake'></i> Foto actualizada!", { 
           theme: "toasted-primary", 
           position: "top-right", 
           duration : 2000
        });
        window.scrollTo(0, 0);
      }
    }
  }
</script>