<template>
 	<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
          <img class="user-avatar rounded-circle mr-2" src="images/avatars/0.jpg" alt="User Avatar"> <span class="d-none d-md-inline-block">Juan Paredes</span>
        </a>
        <div class="dropdown-menu dropdown-menu-small">
          <router-link to="/perfil" class="dropdown-item">
            <i class="fas fa-user text-secondary mr-1"></i>
            Perfil
          </router-link>
          <router-link to="/perfil/editar" class="dropdown-item">
            <i class="fas fa-edit text-secondary mr-1"></i>
            Editar perfil
          </router-link>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item text-danger" @click.prevent="signOut">
            <i class="fas fa-sign-out-alt mr-1"></i>
        	   Cerrar sessión
          </button>
        </div>
     </li>
</template>

<script>
  export default {
   methods: {
    signOut() {
      this.$store.dispatch('signOut')
        .then(response => {
          this.$router.replace('/');
        })
        .catch(err => {
          console.log(err);
        });
    }
   }
  }
</script>