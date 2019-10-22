<template>
	<div>
        <ul class="user-details__social user-details__social--primary d-table mx-auto mb-4">
          <li class="mx-1" v-if="socialNetworks.facebook"><a :href="'http://facebook.com/' + socialNetworks.facebook" target="__black"><i class="fab fa-facebook-f"></i></a></li>
          <li class="mx-1" v-if="socialNetworks.twitter"><a :href="'http://twitter.com/' + socialNetworks.twitter" target="__black"><i class="fab fa-twitter"></i></a></li>
          <li class="mx-1" v-if="socialNetworks.github"><a :href="'http://github.com/' + socialNetworks.github" target="__black"><i class="fab fa-github"></i></a></li>
          <li class="mx-1" v-if="socialNetworks.slack"><a :href="'http://slack.com/' + socialNetworks.slack" target="__black"><i class="fab fa-slack"></i></i></a></li>
          <li class="mx-1" v-if="socialNetworks.linkedin"><a :href="'http://linkedin.com' + socialNetworks.linkedin" target="__black"><i class="fab fa-linkedin-in"></i></a></li>
          <li class="mx-1" v-if="socialNetworks.youtube"><a :href="'http://youtube.com/' + socialNetworks.youtube" target="__black"><i class="fab fa-youtube"></i></a></li>
        </ul>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				socialNetworks: []
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
					})
					.catch(err => {
						console.log(err);
					})
			}
		}
	}
</script>