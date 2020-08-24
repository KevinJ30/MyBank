<template>
  <div>
      <h1>Se connecter</h1>
      <InputComponent name="username" placeholder="Nom d'utilisateur" v-bind:feedback="error"/>
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