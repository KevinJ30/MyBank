<template>
  <div class="container">
    <div class="about">
      <h1>This is an about page</h1>
      <a href="#" v-on:click.prevent="addAccount">Ajouter comptes</a>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      addAccount: function () {
        let account = {
          id: 0,
          name: 'Compte principale Postal',
          number_account: '11 137 84 F030',
          solde: 1500
        }
        console.log(this.$attrs)
        this.$attrs.accountStores.addAccount(account)
      }
    }
  }
</script>