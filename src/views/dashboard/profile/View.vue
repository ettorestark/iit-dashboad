<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
				<span class="text-uppercase page-subtitle">Perfil de usuario</span>
				<h3 class="page-title">Visión general</h3>
			</div>
		</div>
    <div class="row mt-4">

      <div class="col-sm-12 col-lg-4">
        <div class="card card-small user-details mb-4">
          <div class="card-header p-0">
            <div class="user-details__bg">
              <img src="images/user-profile/up-user-details-background.jpg" alt="User Details Background Image">
            </div>
          </div>
          <div class="card-body p-0">
            <div class="user-details__avatar mx-auto">
              <img :src="this.$store.state.auth.user.photo" alt="User Avatar">
            </div>
            <h4 class="text-center m-0 mt-2">{{ this.$store.state.auth.user.name }} {{ this.$store.state.auth.user.lastname }}</h4>
            <p class="text-center text-light m-0 mb-2">{{ this.$store.state.auth.user.profile }}</p>
            <social-networks/>
            <div class="user-details__user-data border-top border-bottom p-4">
              <div class="row mb-3">
                <div class="col w-50">
                  <span>Correo electrónico</span>
                  <span>{{ this.$store.state.auth.user.email }}</span>
                </div>
                <div class="col w-50">
                  <span>Ubicación</span>
                  <span>{{ this.$store.state.auth.user.address }}</span>
                </div>
              </div>
              <div class="row">
                <div class="col w-50">
                  <span>Celular</span>
                  <span>{{ this.$store.state.auth.user.phone }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card card-small user-activity mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Actividad del usuario</h6>
            <div class="block-handle"></div>
          </div>
          <div class="card-body p-0">
            <div class="user-activity__item pr-3 py-3">
              <div class="user-activity__item__icon">
                <i class="fas fa-plus-circle"></i>
              </div>
              <div class="user-activity__item__content">
                <span class="text-light">Hace 3 días</span>
                <p>Agregaste una nueva solución.</p>
              </div>
            </div>
            <div class="user-activity__item pr-3 py-3">
              <div class="user-activity__item__icon">
                <i class="fas fa-user-plus"></i>
              </div>
              <div class="user-activity__item__content">
                <span class="text-light">Hace 7 días</span>
                <p>Agregaste a un nuevo usuario.</p>
              </div>
            </div>
            <div class="user-activity__item pr-3 py-3">
              <div class="user-activity__item__icon">
                <i class="fas fa-user-plus"></i>
              </div>
              <div class="user-activity__item__content">
                <span class="text-light">Hace 10 días</span>
                <p>Agregaste a un nuevo usuario.</p>
              </div>
            </div>
            <div class="user-activity__item pr-3 py-3">
              <div class="user-activity__item__icon">
                <i class="fas fa-pencil-alt"></i>
              </div>
              <div class="user-activity__item__content">
                <span class="text-light">Hace 12 días</span>
                <p>Agregaste una nueva publicación.</p>
              </div>
            </div>
          </div>
          <div class="card-footer border-top">
            <router-link to="/actividades">
              <button class="btn btn-sm btn-white d-table mx-auto">
                Ver más
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>

<script>
  import SocialNetworks from '@/components/dashboard/profile/view/SocialNetworks.vue'
  export default {
    components: {
      SocialNetworks
    }
  }
</script>