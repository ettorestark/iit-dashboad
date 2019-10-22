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
					<input type="file" id="upload" class="d-none"/>
					<label id="dropzone" class="dropzone" for="upload" draggable="true">
						<i class="fas fa-cloud-upload-alt"></i>
					</label>
				</div>
				<div class="card-body">
					<div class="form-group">
						<input type="text" placeholder="Partner" class="form-control">
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
	#dropzone{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 35vh;
		border: 2px dashed #CCC;
	}

	#dropzone i {
		font-size: 3em;
	}
</style>

<script>
	export default {
		mounted() {
			let dropzone = document.getElementById('dropzone');
			dropzone.addEventListener('dragover', () => {
				dropzone.style.border = '2px dashed #e8412a';
			});
		}
	}
</script>