<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
			  <span class="text-uppercase page-subtitle">Partners</span>
			  <h3 class="page-title">Agregar</h3>
		  </div>
	    </div>
		<div class="row">
			<div class="col-12">
			  <div class="card">
				<div class="card-header">
					<div class="dropzone">
						<i class="fas fa-upload text-primary"></i>
					</div>
				</div>
				<div class="card-body">
					<div class="form-group">
						<label for="nombre">Nombre del partner: </label>
						<input type="text" placeholder="Nombre" class="form-control">
					</div>
				</div>
				<div class="card-footer border-top">
					<button class="btn btn-sm btn-accent ml-auto d-table">Agregar</button>
				</div>
			  </div>
			</div>
		</div>
	</div>
</template>

<style>
	.dropzone	{
		height: 30vh;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 5px;
	}

	.dropzone i {
		font-size: 2em;
	}

	.dropzone:hover {
		background: #F8F8F8;
	}
</style>