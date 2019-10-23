<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
				<span class="text-uppercase page-subtitle">{{ this.$route.params.username }}</span>
				<h3 class="page-title">Vision general</h3>
			</div>
		</div>
      <div class="col-sm-12 col-lg-4">
        <div class="card card-small user-details mb-4">
          <div class="card-header p-0">
            <div class="user-details__bg">
              <img src="/images/user-profile/up-user-details-background.jpg" alt="User Details Background Image">
            </div>
          </div>
          <div class="card-body p-0">
            <div class="user-details__avatar mx-auto">
              <img :src="'/'+user.photo" alt="User Avatar">
            </div>
            <h4 class="text-center m-0 mt-2">{{ user.name }} {{ user.lastname }}</h4>
            <p class="text-center text-light m-0 mb-2">{{ user.profile }}</p>
		        <ul class="user-details__social user-details__social--primary d-table mx-auto mb-4">
		          <li class="mx-1" v-if="socialNetworks.facebook"><a :href="'http://facebook.com/' + socialNetworks.facebook" target="__black"><i class="fab fa-facebook-f"></i></a></li>
		          <li class="mx-1" v-if="socialNetworks.twitter"><a :href="'http://twitter.com/' + socialNetworks.twitter" target="__black"><i class="fab fa-twitter"></i></a></li>
		          <li class="mx-1" v-if="socialNetworks.github"><a :href="'http://github.com/' + socialNetworks.github" target="__black"><i class="fab fa-github"></i></a></li>
		          <li class="mx-1" v-if="socialNetworks.slack"><a :href="'http://slack.com/' + socialNetworks.slack" target="__black"><i class="fab fa-slack"></i></a></li>
		          <li class="mx-1" v-if="socialNetworks.linkedin"><a :href="'http://linkedin.com' + socialNetworks.linkedin" target="__black"><i class="fab fa-linkedin-in"></i></a></li>
		          <li class="mx-1" v-if="socialNetworks.youtube"><a :href="'http://youtube.com/' + socialNetworks.youtube" target="__black"><i class="fab fa-youtube"></i></a></li>
		        </ul>
            <div class="user-details__user-data border-top border-bottom p-4">
              <div class="row mb-3">
                <div class="col w-50">
                  <span>Correo electrónico</span>
                  <span>{{ user.email }}</span>
                </div>
                <div class="col w-50">
                  <span>Ubicación</span>
                  <span>{{ user.address }}</span>
                </div>
              </div>
              <div class="row">
                <div class="col w-50">
                  <span>Celular</span>
                  <span>{{ user.phone }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				user: [],
				socialNetworks: []
			}
		},

		mounted() {
			this.getUser();
		},

		methods: {
			getUser() {
				axios.get('http://integralit.test/api/user/checkUsername/' + this.$route.params.username)
					.then(response => {
						this.user = response.data;
						this.getSocialNetworks();
					})
					.catch(err => {
						console.log(err);
					})
			},

			getSocialNetworks() {
				axios.get('http://integralit.test/api/social_networks/'+ this.user.id)
					.then(response => {
						this.socialNetworks = response.data;
					})
					.catch(err => {
						console.log(err);
					})
			}
		}
	}
</script>