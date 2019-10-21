<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
				<span class="text-uppercase page-subtitle">Proyectos</span>
				<h3 class="page-title">Visión general</h3>
			</div>
		</div>
        <div class="row">
          <div v-for="project in projects" class="col-lg-3 col-md-6 col-sm-12 mb-4">
            <div class="card card-small card-post card-post--1">
              <div class="card-post__image" :style="'background-image:url('+project.image+');'">
                <a href="#" class="card-post__category badge badge-pill badge-dark">Seguridad</a>
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  <a class="text-fiord-blue" href="#">{{ project.name }}</a>
                </h5>
                <p class="card-text d-inline-block mb-3">{{ project.excerpt }}</p>
                <span class="text-muted">9 de octumbre del 2019</span>
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
        projects: []
      }
    },

    methods: {
      getProjects() {
        axios.get('http://integralit.test/api/project')
          .then(response => {
            this.projects = response.data;
          })
          .catch(err => {
            console.log(err);
          })
      }
    },

    mounted() {
      this.getProjects();
    }
  } 
</script>
