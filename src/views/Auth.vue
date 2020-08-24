<template>
  <div class="page-auth">
    <div class="wrapper">
      <img src="img/logo.svg" alt="logo" class="logo">
        <div class="card card-auth">
            <div class="header">
              <h1>Se connecter</h1>

              <form action="#">
                <InputComponent name="username" placeholder="Nom d'utilisateur" v-bind:feedback="error" />
                <InputComponent name="password" placeholder="Mot de passe" v-bind:feedback="error" />
                <button type="submit" class="btn btn-primary">Se connecter</button>
              </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
    import InputComponent from '../components/Forms/Input.vue';

    export default {
        name: 'auth',
        components: {
            InputComponent
        },

        data: () => {
          return {
            error: {
            }
          }
        }
    }
</script>