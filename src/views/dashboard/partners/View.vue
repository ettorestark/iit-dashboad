<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
			  <span class="text-uppercase page-subtitle">Edición</span>
			  <h3 class="page-title text-uppercase">{{ this.$route.params.name }}</h3>
		  </div>
	  </div>
 		<div class="row">
      <div class="col-lg-9 col-md-12">
        <div class="card card-small mb-3">
          <form type="POST" enctype="multipart/form-data">
          <div class="card-body">
              <div class="form-group">
              	<input type="text" class="form-control" :class="error.name.status" placeholder="Nombre" v-model="form.name">
                <div class="invalid-feedback">
                  {{ error.name.message[0] }}
                </div>
              </div>
              <div class="form-group">
              	<input type="text" class="form-control" placeholder="URL" v-model="form.url">
              </div>
              <div class="form-group">
              	<textarea rows="4" class="form-control" placeholder="Descripción" v-model="form.description"></textarea>
              </div>
              <div class="form-group">
                <label id="dropzone" for="file">
                  <i class="fas fa-cloud-upload-alt mr-2"></i>
                  <span class="d-block">Presiona o arrastra y suelta archivos</span>
                </label>
                <input type="file" id="file" class="d-none is-invalid" @change="uploadIcon" accept="image/">
                <sub class="d-block mt-2 text-error">
                  {{ error.icon.message[0] }}
                </sub>
              </div>
          </div>
          <div class="card-header border-top">
          	<button type="submit" class="btn btn-primary" @click.prevent="updatePartner()">
          		Actualizar
          	</button>
          </div>
          </form>
        </div>
        <!-- / Add New Post Form -->
      </div>
      <div class="col-lg-3 col-md-12">
        <!-- Post Overview -->
        <div class='card card-small mb-3'>
          <div class="card-header border-bottom">
            <h6 class="m-0">Vista previa</h6>
          </div>
          <div class='card-body p-2 d-flex justify-content-center'>
						<img :src="image.src" v-if="this.form.icon == '' || this.form.icon == undefined"/>
            <img :src="icon.src" v-if="this.form.icon"/>
          </div>
          <div class="card-footer">
          	<button class="btn btn-secondary" v-if="form.icon" @click.prevent="deleteIcon()">
              <i class="fas fa-trash"></i> 
            </button>
          </div>
          <div class="card-footer border-top" v-if="form.icon">
            <div class="d-block text-uppercase">
              <span class="font-weight-bold">tipo</span>
              {{ form.icon.type }}
            </div>
            <div class="d-block text-uppercase">
              <span class="font-weight-bold">tamaño</span>
              {{ ((form.icon.size)/1024).toFixed(2) }} kilobytes
            </div>
            <div class="d-block text-uppercase">
              <span class="font-weight-bold">dimensiones</span>
              {{ icon.width }}x{{ icon.height }} pixeles
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<style>
  #dropzone {
    width: 100%;
    height: 20vh;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed #CCC;
  }

  #dropzone i {
    font-size: 2em;
  }

  .text-error {
    color: #c4183c;
  }
</style>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				partner: [],
				form: {
					name: '',
					url: '',
					description: '',
					icon: ''
				},
        image: {
          src: ''
        },
        icon: {
          src: '',
          width: '',
          height: ''
        },
        error: {
          name: {
            status: '',
            message: ''
          },
          icon: {
            status: '',
            message: ''
          }
        }
			}
		},

		mounted() {
			this.getPartner();
		},

		methods: {
			getPartner() {
				axios.get('http://integralit.test/api/partner/' + this.$route.params.name)
					.then(response => {
						this.partner = response.data;
            this.form.name = this.partner.name;
            this.form.url = this.partner.url;
            this.form.description = this.partner.description;
            this.image.src = this.partner.icon;
            this.convertToBase64();
					})
					.catch(err => {
						console.log(err);
					})
			},

      convertToBase64() {
        

      },

      uploadIcon(e) {
        this.form.icon = e.target.files[0];
        console.log(this.form.icon);

        let reader = new FileReader();
        reader.readAsDataURL(this.form.icon);

        reader.onload = e => {
          this.icon.src = e.target.result;     
          let image = new Image();
          image.src = this.icon.src;
          this.icon.width = image.width;
          this.icon.height = image.height;
        };
      },

      deleteIcon() {
        this.form.icon = '';
        this.icon.src = '';
      },

      updatePartner() {
        this.error.name.status = '';
        this.error.name.message = '';

        this.error.icon.status = '';
        this.error.icon.message = '';

        let formData = new FormData();
        formData.append('user_id', this.$store.state.auth.user.id);
        formData.append('name', this.form.name);
        formData.append('url', this.form.url);
        formData.append('description', this.form.description);
        if(this.form.icon) {
          formData.append('icon', this.form.icon);
        }

        axios.put('http://integralit.test/api/partner/'+this.partner.id, formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(response => {
            this.successResponse();
          })
          .catch(err => {
            let errors = err.response.data.errors;
            switch (err.response.status) {
              case 422:
                if(errors.name) {
                  this.error.name.status = 'is-invalid';
                  this.error.name.message = errors.name;
                }
                if(errors.icon) {
                  this.error.icon.status = 'is-invalid';
                  this.error.icon.message = errors.icon;
                }
                break;
            }
          });
      },

      successResponse() {
        this.$router.replace('/partners');
        window.scrollTo(0, 0);
      }

		}
	}
</script>