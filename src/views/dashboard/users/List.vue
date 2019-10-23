<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
				<span class="text-uppercase page-subtitle">Usuarios</span>
				<h3 class="page-title">Visión general</h3>
			</div>
		</div>
    <div class="row">
      <div class="col-lg-4" v-for="user in users">
        <router-link :to="user.username">
          <div class="card card-small mb-4 pt-3">
            <div class="card-header border-bottom text-center">
              <div class="mb-3 mx-auto">
                <img class="rounded-circle" :src="user.photo" alt="User Avatar" width="110">
              </div>
              <h4 class="mb-0">{{ user.name }}  {{ user.lastname }}</h4>
              <span class="text-muted d-block mb-2">{{ user.profile }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
	</div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        users: null
      }
    },
    methods: {
      getUsers() {
        axios.get('http://integralit.test/api/user')
          .then(response => {
            this.users = response.data;
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    mounted() {
      this.getUsers();
    }
  }
</script>