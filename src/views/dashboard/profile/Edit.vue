edit/<template>
	<div>
		<div class="page-header row no-gutters py-4">
			<div class="col-12 col-sm-4 text-center text-sm-left mb-0">
				<span class="text-uppercase page-subtitle">Perfil de usuario</span>
				<h3 class="page-title">Editar</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12 mx-auto mt-4">
				<div class="card card-small edit-user-details mb-4">
          <div class="card-body p-0">
            <div action="#" class="py-4">
              <profile-info/>
              <hr>
              <social-networks/>
              <hr>
              <change-password/>
            </div>
          </div>
        </div>
			</div>
		</div>
	</div>
</template>

<script>
  import ChangePassword from '@/components/dashboard/profile/edit/ChangePassword.vue'
  import SocialNetworks from '@/components/dashboard/profile/edit/SocialNetworks.vue'
  import ProfileInfo from '@/components/dashboard/profile/edit/ProfileInfo.vue'
  export default {
    components: {
      ChangePassword,
      SocialNetworks,
      ProfileInfo
    }
  }
</script>
