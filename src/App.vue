<template>
  <div class="container">
    <div id="app">
      <div class="page-auth">
        <div class="wrapper">
          <div class="container-logo">
            <img class="logo" src="img/logo.svg" alt="logo">
          </div>
          <div class="card">
            <h1>Authentification</h1>
            <InputComponent name="username" placeholder="Nom d'utilisateur" v-bind:feedback="errorInput" />
            <SelectComponent name="list" v-bind:options="options" v-bind:feedback="errorSelect" placeholder="Sélectionner une option..."/>
            <input type="submit" class=" btn btn-primaary">
            <a href="#">Vous avez oublier votre mot de passe ?</a>
            <a href="#">Vous n'avez pas encore de compte ?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from './components/Forms/Input.vue';
import SelectComponent from './components/Forms/Select.vue';

export default {
  name: 'App',
  components: {
    InputComponent,
    SelectComponent
  },

  data: () => {
    return {
      errorInput: {
        type: 'error',
        message: 'Impossible de charger les données de l\'application'
      },
      errorSelect: {
        type: 'success',
        message: 'Les données saisie sont correct...'
      },

      options: [
        {
          key: '1',
          value: 'option 1',
          selected: false
        },

        {
          key: '2',
          value: 'option 2',
          selected: false
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, sans-serif;
}
</style>
