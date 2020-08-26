<template>
  <div class="container">
    <h1>Operation de votre compte</h1>
    <div class="card page-content">

      <div class="page-information">
          <div class="page-information-left">
            <h2>COMPTE COURANT N° 11 137 84 F030</h2>
            <p class="date_now">Solde au 23/07/2020</p>
            <p class="solde">+ 1350 €</p>
          </div>
          <div class="page-information-right">

          </div>
      </div>

      <div class="table_operations">
          <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Ventilé</th>
                </tr>
              </thead>
            <tbody>
            <tr>
              <td>23/07/2020</td>
              <td>ACHAT de vélo de course</td>
              <td class="cells-auto"><span class="price_negative">- 1300 €</span></td>
              <td class="cells-auto">1</td>
            </tr>

            <tr>
              <td>23/07/2020</td>
              <td>ACHAT de vélo de course</td>
              <td class="cells-auto"><span class="price_negative">- 1300 €</span></td>
              <td class="cells-auto">1</td>
            </tr>

              <tr>
                <td>23/07/2020</td>
                <td>ACHAT de vélo de course</td>
                <td><span class="price_negative">- 1300 €</span></td>
                <td class="cells-auto">1</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.account = this.$attrs.accountStores.getAccount(this.$router.app.$route.params.id);
      this.operations = [
        {
          date: Date(),
          description: 'Achat de course carefour',
          price: 150.00,
          pointed: false
        },

        {
          date: Date(),
          description: 'Achat de vélo de course neuf',
          price: 1500.00,
          pointed: false
        }
      ]
    },

    data: () => {
      return {
        account : null,
        operations : []
      }
    }

  }
</script>