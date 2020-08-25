<template>
  <div class="card card-account">
    <div class="card_body">
      <div class="card-account_name">
        <h3>{{ account.name }} n° {{ account.number_account }}</h3>
      </div>
      <div class="card-account_solde">
        <span class="price_positive">{{ account.solde }} €</span>
      </div>

      <div class="card-account_actions">
        <a href="#" class="card-account_btn">Accéder</a>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'CardAccount',
    props: {
      account: Object
    }
  }

</script>