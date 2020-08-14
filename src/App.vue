<template>
  <div id="app">
    <InputComponent name="username" placeholder="Nom d'utilisateur"
                    v-bind:information="error" />
    <SelectComponent name="list" v-bind:options="options" />
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
      error: {
        type: 'error',
        message: 'Impossible de charger les données de l\'application'
      },

      options: [
        {
          key: '1',
          value: 'option 1'
        },

        {
          key: '2',
          value: 'option 2'
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
