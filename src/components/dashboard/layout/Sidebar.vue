<template>
  <aside id="sidebar" class="main-sidebar col-12 col-md-3 col-lg-2 px-0" @click.prevent="hideNavbar">
    <div class="main-navbar">
      <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
        <a class="navbar-brand w-100 mr-0" href="#" style="line-height: 25px;">
          <div class="d-table m-auto">
            <router-link to="/dashboard">
              <img id="main-logo" class="d-inline-block align-top mr-1" style="max-width: 25px;" src="images/icon.png" alt="Shards Dashboard">
            </router-link>
              <span class="d-none d-md-inline ml-1">Integral-it</span>
          </div>
        </a>
        <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
          <i class="fas fa-bars"></i>
        </a>
      </nav>
    </div>
    <div class="nav-wrapper">
      <ul class="nav nav--no-borders flex-column">
        <li class="nav-item">
          <router-link to="/escritorio" class="nav-link active">
            <i class="fas fa-home"></i>
            <span>Inicio</span>
          </router-link>
        </li>
      </ul>
      <h6 class="main-sidebar__nav-title">Administrar usuarios</h6>
      <ul class="nav nav--no-borders flex-column">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
            <i class="fas fa-users"></i>
            <span>Usuarios</span>
          </a>
          <div class="dropdown-menu dropdown-menu-small">
            <router-link to="/usuarios" class="dropdown-item">Listar</router-link>
            <router-link to="/usuarios/agregar" class="dropdown-item">Agregar</router-link>
          </div>
        </li>
      </ul>
      <h6 class="main-sidebar__nav-title">Web</h6>
      <ul class="nav nav--no-borders flex-column">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">
            <i class="fas fa-pencil-alt"></i>
            <span>Publicaciones</span>
          </a>
          <div class="dropdown-menu dropdown-menu-small">
            <router-link to="/publicaciones" class="dropdown-item">Listar</router-link>
            <router-link to="/publicaciones/agregar" class="dropdown-item">Agregar</router-link>
            <router-link to="/publicaciones/borradores" class="dropdown-item">Borradores</router-link>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            <i class="fas fa-briefcase"></i>
            <span>Proyectos</span>
          </a>
          <div class="dropdown-menu dropdown-menu-small">
            <router-link to="proyectos" class="dropdown-item">Listar</router-link>
            <a class="dropdown-item " href="user-profile-lite.html">Agregar</a>
            <a class="dropdown-item " href="edit-user-profile.html">Borradores</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            <i class="fas fa-handshake"></i>
            <span>Partners</span>
          </a>
          <div class="dropdown-menu dropdown-menu-small">
            <router-link to="/partner" class="dropdown-item" >Listar</router-link>
            <router-link to="/partner/agregar" class="dropdown-item">Agregar</router-link>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            <i class="fas fa-hashtag"></i>
            <span>Categorías</span>
          </a>
          <div class="dropdown-menu dropdown-menu-small">
            <a class="dropdown-item " href="user-profile.html">Listar</a>
            <a class="dropdown-item " href="user-profile-lite.html">Agregar</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle " data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
            <i class="fas fa-tags"></i>
            <span>Etiquetas</span>
          </a>
          <div class="dropdown-menu dropdown-menu-small">
            <router-link to="/etiquetas" class="dropdown-item">Listar</router-link>
            <a class="dropdown-item " href="user-profile-lite.html">Agregar</a>
          </div>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  export default {
    mounted() {
      document.querySelectorAll('#sidebar a:not([href="#"])').forEach(e => {
        e.addEventListener('click', () => {
          document.getElementById('sidebar').classList.remove('open');
        })
      });
    },

    methods: {
      hideNavbar() {
        document.getElementById('sidebar').classList.remove('open');
      }
    }
  }
</script>