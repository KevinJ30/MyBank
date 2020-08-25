<template>
  <div class="container">
    <div class="card card-soldes">
        <div class="card_body">
            <h2>Soldes de vos comptes</h2>
            <p class="soldes"><span class="price_positive">{{ soldes }} €</span></p>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'Soldes',
      props: {
        accounts: Array
      },
      data: () => {
        return {
          soldes: 0
        }
      },

      mounted () {
        this.soldes = this.calculatedSoldes(this.accounts);
      },

      watch: {
        accounts: function(val) {
            this.soldes = this.calculatedSoldes(val);
        }
      },
      methods: {
        calculatedSoldes: (items) => {
          // A chaque changement nous remettons a jour la valeur du soldes des comptes
          let count_soldes = 0;

          // Calcul du nouveau soldes total des comptes
          items.forEach((item) => {
            count_soldes += item.solde
          })

          return count_soldes;
        }
      }
  }
</script>