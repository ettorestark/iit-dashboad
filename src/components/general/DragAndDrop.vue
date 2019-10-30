<template>
	<div>
		<input type="file" id="file" class="d-none" @change="fileSelected"/>
		<label id="dropZone" for="file" draggable="true" :class="[border, text]">
			<span class="message">
				<i class="fas fa-cloud-upload-alt"></i>
				{{ message }}
			</span>
		</label>
	</div>
</template>

<style>
	#dropZone {
		width: 100%;
		height: 30vh;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 2em;
		font-size: 1.5em;
	}

	.default-border { border: 2px dashed #aaaaaa; }
	.success-border { border: 2px dashed #22bb33; }
  .error-border { border: 2px dashed #bb2124; }

	.default-text { border: #aaaaaa; }
	.success-text { border: #22bb33; }
  .error-text { border: #bb2124; }

</style>

<script>
	export default {
		data(){
			return {
				border: 'default-border',
				text: 'defaul-text'
			}
		},

		props: ['message'],

		mounted() {
			let dropZone = document.getElementById('dropZone');
			dropZone.addEventListener('dragenter', this.dragEnter);
			dropZone.addEventListener('dragover', this.dragOver);
			dropZone.addEventListener('dragleave', this.dragLeave);
			dropZone.addEventListener('dragend', this.dradEnd);
			dropZone.addEventListener('drop', this.drop);
		},

		methods: {
			fileSelected(e) {
				this.processAFile(e.target.files[0]);
			},

			dragEnter() {
				this.border = 'success-border';
				this.text = 'success-text';
			},

			dragOver(e) {
				e.preventDefault();
			},

			dragLeave() {
				this.border = 'error-border';
				this.text = 'error-text';
				console.log('Leave');
			},

			dragEnd() {
				window.alert('Finalizó');
			},

			drop(e) {
				e.preventDefault();
				this.processAFile(e.dataTransfer.files[0]);
				this.border = 'default-border';
			},

			processAFile(file) {
					this.$emit('file', file);
					this.convertToBase64(file);
			},

			convertToBase64(file) {
				let reader = new FileReader();
				reader.onload = e => {
					this.$emit('base64', e.target.result);
				};
				reader.readAsDataURL(file);
			}
		}
	}
</script>