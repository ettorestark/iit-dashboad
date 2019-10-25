<template>
	<div>
    <div class="form-row mx-4">
      <update-picture-profile/>
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
              <input type="text" class="form-control" :class="error.address.status" v-model="form.address">
            </div>
            <div class="d-block invalid-feedback">
              {{ this.error.address.message[0] }}
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
              <input type="text" class="form-control" :class="error.phone.status" v-model="form.phone">
            </div>
            <div class="d-block invalid-feedback">
              {{ error.address.message[0] }}
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
              <input type="email" class="form-control" :value="this.$store.state.auth.user.email" readonly>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="form-row mx-4">
      <div class="form-group col-md-12">
        <label for="userBio">Descripción</label>
        <textarea style="min-height: 87px;" id="userBio" name="userBio" class="form-control" v-model="form.description"></textarea>
      </div>
    </div>
    <div class="form-row mx-4">
      <div class="form-group col-md-12">
        <button class="btn btn-primary" @click.prevent="updateProfileInfo">Cambiar información</button>
      </div>
    </div>
	</div>
</template>

<script>
  import axios from 'axios'
  import UpdatePictureProfile from './UpdatePictureProfile.vue'
  export default {
    components: {
      UpdatePictureProfile
    },

    data() {
      return {
        form: {
          address: '',
          phone: '',
          description: ''
        },
        error: {
          address: {
            status: '',
            message: ''
          },
          phone: {
            status: '',
            message: ''
          }
        }
      }
    },

    mounted() {
      this.form.address = this.$store.state.auth.user.address;
      this.form.phone = this.$store.state.auth.user.phone;
      this.form.description = this.$store.state.auth.user.description;
    },

    methods: {
      updateProfileInfo() {
        this.cleanErrors();
        axios.put('http://integralit.test/api/user/'+this.$store.state.auth.user.id, {
            'address': this.form.address,
            'phone': this.form.phone,
            'description': this.form.description
          })
          .then(response => {
            this.successfullUpdate();
          })
          .catch(err => {
            let errors = err.response.data.errors;
            switch (err.response.status) {
              case 422:
                if(errors.address) {
                  this.error.address.status = 'is-invalid';
                  this.error.address.message = errors.address; 
                }
                if(errors.phone) {
                  this.error.phone.status = 'is-invalid';
                  this.error.phone.message = errors.phone; 
                }
                break;
            }
          });
      },
      cleanErrors() {
        this.error.address.status = '';
        this.error.address.message = '';

        this.error.phone.status = '';
        this.error.phone.message = '';
      },

      successfullUpdate() {
        this.$toasted.show("¡Información actualizada!", { 
           theme: "toasted-primary", 
           position: "top-right", 
           duration : 2000
        });
        window.scrollTo(0, 0);
      }
    }
  }
</script>