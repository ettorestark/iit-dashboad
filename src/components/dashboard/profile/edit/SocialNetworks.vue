<template>
	<div>
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
	            <input type="text" class="form-control" v-model="form.facebook">
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
	            <input type="email" class="form-control" v-model="form.twitter">
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
	            <input type="text" class="form-control" v-model="form.github">
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
	            <input type="email" class="form-control" v-model="form.slack">
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
	            <input type="email" class="form-control" id="socialDribbble" v-model="form.linkedin">
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
	            <input type="email" class="form-control" v-model="form.youtube">
	          </div>
	        </div>
	        <div class="form-group">
	          <button @click.prevent="updateOrCreate()" class="btn btn-primary">Actualizar</button>
	        </div>
	    </div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				socialNetworks: [],
				form: {
					facebook: '',
					twitter: '',
					github: '',
					slack: '',
					linkedin: '',
					youtube: ''
				}
			}
		},

		mounted() {
			this.getSocialNetworks();
		},

		methods: {
			getSocialNetworks() {
				axios.get('http://integralit.test/api/social_networks/'+ this.$store.state.auth.user.id)
					.then(response => {
						this.socialNetworks = response.data;
						this.form.facebook = this.socialNetworks.facebook;
						this.form.twitter = this.socialNetworks.twitter;
						this.form.github = this.socialNetworks.github;
						this.form.slack = this.socialNetworks.slack;
						this.form.linkedin = this.socialNetworks.linkedin;
						this.form.youtube = this.socialNetworks.youtube;
					})
					.catch(err => {
						console.log(err);
					})
			},

			updateOrCreate() {
				if(this.socialNetworks == '' ) {
					this.storeSocialNetworks();
				}else {
					this.updateSocialNetworks();
				}
			},

			storeSocialNetworks() {
				axios.post('http://integralit.test/api/social_networks', {
					user_id: this.$store.state.auth.user.id,
					facebook: this.form.facebook,
					twitter: this.form.twitter,
					github: this.form.github,
					slack: this.form.slack,
					linkedin: this.form.linkedin,
					youtube: this.form.youtube
				})
					.then(response => {
						this.success();
					})
					.catch(err => {
						console.log(err);
					});
			},

			updateSocialNetworks() {
				axios.put('http://integralit.test/api/social_networks/' + this.$store.state.auth.user.id, {
					facebook: this.form.facebook,
					twitter: this.form.twitter,
					github: this.form.github,
					slack: this.form.slack,
					linkedin: this.form.linkedin,
					youtube: this.form.youtube
				})
					.then(response => {
						this.success();
					})
					.catch(err => {
						console.log(err);
					});
			},

			success() {
				this.$toasted.show("<i class='fas fa-lock'></i>¡Perfiles sociales actualizados!", { 
					 theme: "toasted-primary", 
					 position: "top-right", 
					 duration : 2000
				});
				window.scrollTo(0, 0);
			}
		}
	}
</script>