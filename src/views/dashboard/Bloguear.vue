<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
				<span class="text-uppercase page-subtitle">Blog</span>
				<h3 class="page-title">Agregar nuevo post</h3>
			</div>
		</div>
		<div class="row">
          <div class="col-lg-9 col-md-12">
            <!-- Add New Post Form -->

            <div class="card card-small mb-3">
              <div class="card-body">
                <form class="add-new-post">
                  <div class="form-group">
                    <input type="text" placeholder="Título de tu publicación" class="form-control">
                  </div>
                  <div class="form-group">
                    <input type="text" placeholder="SLUG o URL amigable" class="form-control">
                  </div>
                  <vue-editor v-model="content" :editorToolbar="customToolbar"></vue-editor>
                </form>
              </div>
            </div>

            <div class="card card-small mb-3">
              <div class="card-header border-bottom">
                <h6 class="m-0">
                  <i class="fas fa-search mr-2"></i>SEO
                </h6>
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group">
                      <textarea placeholder="Meta description" rows="3" class="form-control"></textarea>
                  </div>
                  <div class="form-group">
                      <input placeholder="Meta keywords" class="form-control"/>
                  </div>
                </form>
              </div>
            </div>
            <!-- / Add New Post Form -->
          </div>
          <div class="col-lg-3 col-md-12">
            <!-- Post Overview -->
            <div class='card card-small mb-3'>
              <div class="card-header border-bottom">
                <h6 class="m-0">Acciones</h6>
              </div>
              <div class='card-body p-0'>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item p-3">
                    <span class="d-flex mb-2">
                      <strong class="mr-1">Visibilidad:</strong>
                      <strong class="text-success">Publico</strong>
                      <a class="ml-auto" href="#">Editar</a>
                    </span>
                  </li>
                  <li class="list-group-item d-flex px-3">
                    <button class="btn btn-sm btn-outline-accent">
                      <i class="fas fa-lock"></i>
                      Guardar borrador
                    </button>
                    <button class="btn btn-sm btn-accent ml-auto">
                      <i class="fas fa-upload"></i>
                      Publicar
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <!-- / Post Overview -->
            <!-- Post Overview -->
            <div class='card card-small mb-3'>
              <div class="card-header border-bottom">
                <h6 class="m-0">Categorías</h6>
              </div>
              <div class='card-body p-0'>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item px-3 pb-2">
                    <div class="custom-control custom-checkbox mb-1">
                      <input type="checkbox" class="custom-control-input" id="category2" checked>
                      <label class="custom-control-label" for="category2">Eventos</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-1">
                      <input type="checkbox" class="custom-control-input" id="category3">
                      <label class="custom-control-label" for="category3">Informática</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-1">
                      <input type="checkbox" class="custom-control-input" id="category4">
                      <label class="custom-control-label" for="category4">Seguridad</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-1">
                      <input type="checkbox" class="custom-control-input" id="category4">
                      <label class="custom-control-label" for="category4">Telecomunicaciones</label>
                    </div>
                  </li>
                  <li class="list-group-item d-flex px-3">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Nueva cateogoría" aria-label="Add new category" aria-describedby="basic-addon2">
                      <div class="input-group-append">
                        <button class="btn btn-white px-2" type="button">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

                        <div class='card card-small mb-3'>
              <div class="card-header border-bottom">
                <h6 class="m-0">Tags</h6>
              </div>
              <div class='card-body p-0'>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item px-3 pb-2">
                    <div class="custom-control custom-checkbox mb-1">
                      <input type="checkbox" class="custom-control-input" id="category2" checked>
                      <label class="custom-control-label" for="category2">Lorem</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-1">
                      <input type="checkbox" class="custom-control-input" id="category3">
                      <label class="custom-control-label" for="category3">Ipsum</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-1">
                      <input type="checkbox" class="custom-control-input" id="category4">
                      <label class="custom-control-label" for="category4">Dolor</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-1">
                      <input type="checkbox" class="custom-control-input" id="category4">
                      <label class="custom-control-label" for="category4">Sit</label>
                    </div>
                  </li>
                  <li class="list-group-item d-flex px-3">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Nueva tag" aria-label="Add new category" aria-describedby="basic-addon2">
                      <div class="input-group-append">
                        <button class="btn btn-white px-2" type="button">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- / Post Overview -->
          </div>
        </div>
	</div>
</template>

<script>
  import { VueEditor } from 'vue2-editor'
  export default {
    components: {
      VueEditor
    },

    data() {
      return {
        content: null,
        customToolbar: [
          [{ 'header': [1, 2, 3, 4, false] }],
          ['bold', 'italic', 'underline'],
          [{ 'color': [] }, { 'background': [] }], 
          [{ 'align': [] }],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          ['image']
        ]
      }
    }
  }
</script>