<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
			  <span class="text-uppercase page-subtitle">Partners</span>
			  <h3 class="page-title">Agregar</h3>
		  </div>
	   </div>
    <div class="row">
      <div class="col-lg-9 col-md-12">
        <!-- Add New Post Form -->
        <div class="card card-small mb-3">
          <form type="POST" enctype="multipart/form-data">
          <div class="card-body">
              <div class="form-group">
              	<input type="text" class="form-control" :class="error.name.status"  placeholder="Nombre" v-model="form.name">
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
              	<drag-and-drop
                  message="Presiona o arrastra y suelta un archivo"
                  @file="setFile"
                  @base64="setBase64"
                />
              </div>
          </div>
          <div class="card-header border-top">
          	<button type="submit" class="btn btn-primary" @click.prevent="addPartner">
          		Agregar
          	</button>
          </div>
          </form>
        </div>
      </div>
      <div class="d-none d-md-inline-block col-lg-3 col-md-12">
        <div class='card card-small mb-3'>
          <div class="card-header border-bottom">
            <h6 class="m-0">Vista previa</h6>
          </div>
          <div class='card-body p-2 d-flex justify-content-center'>
            <i class="fas fa-images display-3 mt-4 mb-4 text-light" v-if="!form.icon"></i>
						<img id="preview" :src="icon.src"/>
          </div>
          <div class="card-footer">
          	<button class="btn btn-secondary" v-if="form.icon" @click.prevent="deleteIcon">
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
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
  import axios from 'axios';
  import DragAndDrop from '@/components/general/DragAndDrop.vue'
	export default {
    components: {
      'drag-and-drop': DragAndDrop
    },

		data() {
			return {
				form: {
					name: '',
					url: '',
					description: '',
					icon: ''
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

		methods: {
			setFile(data) {
        this.form.icon = data;
      },

      setBase64(data) {
        this.icon.src = data;
      },

      addPartner() {
        this.error.name.status = '';
        this.error.name.message = '';

        this.error.icon.status = '';
        this.error.icon.message = '';

        let formData = new FormData();
        formData.append('user_id', this.$store.state.auth.user.id);
        formData.append('name', this.form.name);
        formData.append('url', this.form.url);
        formData.append('description', this.form.description);
        formData.append('icon', this.form.icon);

        axios.post('http://integralit.test/api/partner', formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          .then(response => {
            this.$toasted.show("<i class='fas fa-handshake'></i> ¡Partner agregado!", { 
               theme: "toasted-primary", 
               position: "top-right", 
               duration : 2000
            });
            window.scrollTo(0, 0);
            this.cleanInputs();
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

			deleteIcon() {
				this.form.icon = '';
        this.icon.src = '';
			},

      cleanInputs() {
        this.form.name = '';
        this.form.url = '';
        this.form.description = '';
        this.form.icon = '';
        this.icon = '';
      }
		}
	}
</script>

