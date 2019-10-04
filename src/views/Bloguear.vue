<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
				<span class="text-uppercase page-subtitle">Escritorio</span>
				<h3 class="page-title">Visión general</h3>
			</div>
		</div>
		<div class="row">
          <div class="col-lg-9 col-md-12">
            <!-- Add New Post Form -->
            <div class="card card-small mb-3">
              <div class="card-body">
                <form class="add-new-post">
                  <input class="form-control form-control-lg mb-3" type="text" placeholder="Título">

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
                <h6 class="m-0">Categoría</h6>
              </div>
              <div class='card-body p-0'>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item px-3 pb-2">
                    <div class="custom-control custom-checkbox mb-1">
                      <input type="checkbox" class="custom-control-input" id="category1" checked>
                      <label class="custom-control-label" for="category1">Sin categoría</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-1">
                      <input type="checkbox" class="custom-control-input" id="category2" checked>
                      <label class="custom-control-label" for="category2">Categoría</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-1">
                      <input type="checkbox" class="custom-control-input" id="category3">
                      <label class="custom-control-label" for="category3">Categoría</label>
                    </div>
                    <div class="custom-control custom-checkbox mb-1">
                      <input type="checkbox" class="custom-control-input" id="category4">
                      <label class="custom-control-label" for="category4">Categoría</label>
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
            <!-- / Post Overview -->
          </div>
        </div>
	</div>
</template>