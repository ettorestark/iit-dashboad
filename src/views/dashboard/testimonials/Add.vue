<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
			  <span class="text-uppercase page-subtitle">Testimonios</span>
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
              	<input type="text" class="form-control" :class="error.name.status" placeholder="Nombre" v-model="form.name">
              	<div class="invalid-feedback">
              		{{ error.name.message[0] }}
              	</div>
              </div>
              <div class="form-group">
              	<input type="text" class="form-control" :class="error.lastname.status" placeholder="Apellido" v-model="form.lastname">
              	<div class="invalid-feedback">
              		{{ error.lastname.message[0] }}
              	</div>
              </div>
              <div class="form-group">
              	<input type="text" class="form-control" placeholder="Slug" v-model="slug" readonly>
              </div>
              <div class="form-group">
              	<drag-and-drop
                  message="Presiona o arrastra y suelta un archivo"
                  @file="setFile"
                  @base64="setBase64"
                />
                <div class="alert alert-danger" v-if="error.photo.message !== ''">
                	<strong class="text-white">{{ error.photo.message[0] }}</strong>
                </div>
              </div>
              <div class="form-group">
              	<textarea rows="4" class="form-control" :class="error.message.status" placeholder="Mensaje" v-model="form.message"></textarea>
              	<div class="invalid-feedback">
              		{{ error.message.message[0] }}
              	</div>
              </div>
          </div>
          <div class="card-header border-top">
          	<button type="submit" class="btn btn-primary" @click.prevent="addTestimonial">
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
            <i class="fas fa-images display-3 mt-4 mb-4 text-light" v-if="!photo.src"></i>
						<img id="preview" :src="photo.src"/>
          </div>
          <div class="card-footer" v-if="photo.src">
          	<button class="btn btn-secondary" @click="deletePhoto">
             <i class="fas fa-trash"></i> 
            </button>
          </div>
          <div class="card-footer border-top" v-if="photo.src">
            <div class="d-block text-uppercase">
              <span class="font-weight-bold">tipo</span>
              {{ }}
            </div>
            <div class="d-block text-uppercase">
              <span class="font-weight-bold">tamaño</span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
	import DragAndDrop from '@/components/general/DragAndDrop.vue'
	export default {
		components: {
			'drag-and-drop': DragAndDrop
		},

		data() {
			return {
				form: {
					name: '',
					lastname: '',
					photo: '',
					message: ''
				},
				photo: {
					src: ''
				},

				error: {
					name: {
						status: '',
						message: ''
					},
					lastname: {
						status: '',
						message: ''
					},
					photo: {
						status: '',
						message: ''
					},
					message: {
						status: '',
						message: ''
					}
				}
			}
		},

		computed: {
			slug: function() {
				return this.form.name.toLowerCase().split(' ').join('_')
			}
		},

		methods: {
			setFile(data) {
				this.form.photo = data;
			},

			setBase64(data) {
				this.photo.src = data;
			},

			deletePhoto() {
				this.form.src = '';
				this.photo.src = '';
			},

			async addTestimonial() {
				this.cleanErrorMessages();

				const location = 'integralit.test/api/testimonial';

				let formData = new FormData();
				formData.append('user_id', this.$store.state.auth.user.id);
				formData.append('name', this.form.name);
				formData.append('lastname', this.form.lastname);
				formData.append('slug', this.slug);
				formData.append('photo', this.form.photo);
				formData.append('message', this.form.message);

				const settings = {
					method: 'POST',
					body: formData
				};

				const response = await fetch(`http://${location}`, settings);
				const data = await response.json();
				const errors = data.errors;
				
				switch (response.status) {
					case 200:
						this.successMessage();
						this.cleanInputs();
						break;
					case 422:
            if(errors.name) {
              this.error.name.status = 'is-invalid';
              this.error.name.message = errors.name;
            }
            if(errors.lastname) {
              this.error.lastname.status = 'is-invalid';
              this.error.lastname.message = errors.lastname;
            }
            if(errors.message) {
              this.error.message.status = 'is-invalid';
              this.error.message.message = errors.message;
            }
            if(errors.photo) {
              this.error.photo.status = 'is-invalid';
              this.error.photo.message = errors.photo;
            }
						break;
				}
			},

			successMessage() {
	      this.$toasted.show("<i class='fas fa-quote-left'></i> ¡Testimonio agregado!", { 
	         theme: "toasted-primary", 
	         position: "top-right", 
	         duration : 2000
	      });
			},

			cleanErrorMessages() {
				this.error.name.status = '';
				this.error.name.message = '';

				this.error.lastname.status = '';
				this.error.lastname.message = '';

				this.error.photo.status = '';
				this.error.photo.message = '';

				this.error.message.status = '';
				this.error.message.message = '';
			},

			cleanInputs() {
				this.form.name = '';
				this.form.lastname = '';
				this.form.photo = '';
				this.photo.src = '';
				this.form.message = '';
			}
		}
	}
</script>