class AccountStores {

    constructor() {
        this.states = {
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

    addAccount(account) {
        this.states.accounts.push(account)
    }

    getAccount(id) {
        let accounts = this.states.accounts.filter((item) => parseInt(id) === parseInt(item.id));
        return accounts[0];
    }

}

export default AccountStores;