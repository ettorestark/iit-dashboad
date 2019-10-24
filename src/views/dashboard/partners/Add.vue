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
              	<input type="text" class="form-control" placeholder="Nombre" v-model="form.name">
              </div>
              <div class="form-group">
              	<input type="text" class="form-control" placeholder="URL" v-model="form.url">
              </div>
              <div class="form-group">
              	<textarea rows="4" class="form-control" placeholder="Descripción" v-model="form.description"></textarea>
              </div>
              <div class="form-group">
              	<label for="file" class="btn btn-primary btn-block mb-0">
              		<i class="fas fa-file-image"></i> Subir un ícono
              	</label>
              	<input type="file" id="file" class="d-none" @change.prevent="uploadIcon" accept="image/">
              	<sub class="text-light">El ícono debe tener contar con dimensiones de 64px por 64px</sub>
              </div>
          </div>
          <div class="card-header border-top">
          	<button type="submit" class="btn btn-primary" @click.prevent="addPartner">
          		Agregar
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
            <i class="fas fa-images display-3 mt-4 mb-4 text-light" v-if="!form.icon"></i>
						<img :src="form.icon" class=""/>
          </div>
          <div class="card-footer">
          	<button class="btn btn-secondary" @click.prevent="deleteIcon">
             <i class="fas fa-trash"></i> 
            </button>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<style>
  #iconPreview i {
    font-size: 3em;
  }
</style>

<script>
  import axios from 'axios';
	export default {
		data() {
			return {
				form: {
					name: '',
					url: '',
					description: '',
					icon: ''
				},
        icon: ''
			}
		},

		methods: {
			addPartner() {
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
            console.log(response);
          })
          .catch(err => {
            console.log(err);
          });
			},

			uploadIcon(e) {
        let files = e.target.files || e.dataTransfer.files;
        let icon = files[0];
        this.form.icon = icon;

				let reader = new FileReader();
				reader.onprogress = () => {
					console.log('Cargando');
				};
				reader.onload = e => {
          this.icon = e.target.result;
        };

        reader.readAsDataURL(icon);
			},

			deleteIcon() {
				this.form.icon = '';
			}
		}
	}
</script>

