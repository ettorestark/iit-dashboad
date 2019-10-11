<template>
	<aside id="sidebar" class="main-sidebar col-12 col-md-3 col-lg-2 px-0">
      <div class="main-navbar">
        <nav class="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
          <a class="navbar-brand w-100 mr-0" href="#" style="line-height: 25px;">
            <div class="d-table m-auto">
              <img id="main-logo" class="d-inline-block align-top mr-1" style="max-width: 25px;" src="images/icon.png" alt="Shards Dashboard">
              <span class="d-none d-md-inline ml-1">Integral-IT</span>
            </div>
          </a>
          <a class="toggle-sidebar d-sm-inline d-md-none d-lg-none">
            <i class="fas fa-arrow-left"></i>
          </a>
        </nav>
      </div>
      <div class="nav-wrapper">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">
              <i class="fas fa-home"></i>
              <span>Inicio</span>
            </router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-bar">
              <span>PUBLICACIONES</span>
            </a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bloguear">
              <i class="fas fa-list"></i>
              <span>Vista previa</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bloguear">
              <i class="fas fa-plus"></i>
              <span>Agregar</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/bloguear">
              <i class="fas fa-edit"></i>
              <span>Borradores</span>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
</template>

<script>
  export default {
    mounted() {
      document.querySelectorAll('#sidebar .nav-link').forEach(e => {
        e.addEventListener('click', () => {
          document.getElementById('sidebar').classList.remove('open');
        })
      });
    }
  }
</script>