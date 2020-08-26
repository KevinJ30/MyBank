<template>
    <div class="container">
        <SoldesComponent v-bind:accounts="accounts"/>
        <h2>Comptes courants</h2>
        <CardAccountComponent v-for="account in accounts" v-bind:key="account.id" v-bind:account="account" />
    </div>
</template>

<script>
  import CardAccountComponent from '@/views/Accounts/Components/CardAccount';
  import SoldesComponent from '@/components/elements/Soldes';

  export default {
    name: 'ViewAccount',
    components: {
      CardAccountComponent,
      SoldesComponent
    },

    mounted() {
      this.accounts = this.$attrs.accountStores.states.accounts;
    },

    data: () => {
      return {
          accounts: []
      }
    }
  }
</script>