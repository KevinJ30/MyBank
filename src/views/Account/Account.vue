<template>
    <div class="container">
        <SoldesComponent v-bind:accounts="accounts"/>
        <h2>Comptes courants</h2>
        <CardAccountComponent v-for="account in accounts" v-bind:key="account.id" v-bind:account="account" />
    </div>
</template>

<script>
  import CardAccountComponent from '@/views/Account/Components/CardAccount';
  import SoldesComponent from '@/components/elements/Soldes';

  export default {
    name: 'ViewAccount',
    components: {
      CardAccountComponent,
      SoldesComponent
    },

    data: () => {
      return {
          accounts: [
            {
              id: 0,
              name: 'Compte principale Postal',
              number_account: '11 137 84 F030',
              solde: 1500
            },
            {
              id: 1,
              name: 'Livret A Postale',
              number_account: '11 137 84 F030 A',
              solde: 100
            }
          ]
      }
    }
  }
</script>