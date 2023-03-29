import { reactive } from "vue";
//
import { ledgerList } from './ledger.js';

const state = reactive({
    colors: {
        unit1: '#86cfa3',
        unit2: '#a2c6e0',
        unit3: '#ffc7ec',
        unit4: '#f8faa0',
        unit5: '#adffd8',
        unit6: '#f2c48f',
        unit7: '#e3bfe2',
        unit8: '#6f75ad',
    },
    user: '',
    users: [],
    banks: [],
    ledger: [],
});

const methods = {
    setUser: (user) => {
        state.user = user;
    },
    logout: () => {
        state.user = '';
    },
    getUsersfromDB: () => {
        // Заготовка
        state.users = [
            {
                name: 'Sergey',
                email: 'palmers@yandex.ru',
                password: '123456'
            },
            {
                name: 'Юлия',
                email: 'titovaosa@mail.ru',
                password: '123456'
            }
        ]
    },
    getBanksFromDB: () => {
        state.banks = [
            {
                id: 1,
                name: 'EC',
                balance: 31892.51,
                holders: [
                    {
                        name: 'Евгений',
                        email: 'pavlovsk1y@yandex.ru',
                        proportion: 50,
                        role: 'owner',
                    },
                    {
                        name: 'Сергей',
                        email: 'palmers@yandex.ru',
                        proportion: 50,
                        role: 'owner',
                    }
                ]
            },
            {
                id: 2,
                name: 'АС',
                balance: 2671.1,
                holders: [
                    {
                        name: 'Сергей',
                        email: 'palmers@yandex.ru',
                        proportion: 50,
                        role: 'owner',
                    },
                    {
                        name: 'Андрей',
                        email: 'andrey@yandex.ru',
                        proportion: 50,
                        role: 'owner',
                    }
                ]
            },
            {
                id: 3,
                name: 'ИС',
                balance: 3722.98,
                holders: [
                    {
                        name: 'Сергей',
                        email: 'palmers@yandex.ru',
                        proportion: 50,
                        role: 'owner',
                    },
                    {
                        name: 'Илья',
                        email: 'ilya@yandex.ru',
                        proportion: 50,
                        role: 'owner',
                    }
                ]
            },
            {
                id: 4,
                name: 'КС',
                balance: 2875.95,
                holders: [
                    {
                        name: 'Сергей',
                        email: 'palmers@yandex.ru',
                        proportion: 50,
                        role: 'owner',
                    },
                    {
                        name: 'Константин',
                        email: 'konstantin@yandex.ru',
                        proportion: 50,
                        role: 'owner',
                    }
                ]
            },
            {
                id: 5,
                name: 'ЛЮКС',
                balance: 8063.21,
                holders: [
                    {
                        name: 'Сергей',
                        email: 'palmers@yandex.ru',
                        proportion: 33.33,
                        role: 'owner',
                    },
                    {
                        name: 'Елизавета',
                        email: 'elizaveta@yandex.ru',
                        proportion: 33.33,
                        role: 'owner',
                    },
                    {
                        name: 'Юлия',
                        email: 'titovaosa@mail.ru',
                        proportion: 33.33,
                        role: 'owner',
                    }
                ]
            },
            {
                id: 6,
                name: 'ЮД',
                balance: 5462.66,
                holders: [
                    {
                        name: 'Юлия',
                        email: 'titovaosa@mail.ru',
                        proportion: 50,
                        role: 'owner',
                    },
                    {
                        name: 'Дарья',
                        email: 'darya@mail.ru',
                        proportion: 50,
                        role: 'owner',
                    },
                ]
            },
            {
                id: 7,
                name: 'ЮC',
                balance: 60265.62,
                holders: [
                    {
                        name: 'Юлия',
                        email: 'titovaosa@mail.ru',
                        proportion: 50,
                        role: 'owner',
                    },
                    {
                        name: 'Сергей',
                        email: 'palmers@yandex.ru',
                        proportion: 50,
                        role: 'owner',
                    }
                ]
            },
            {
                id: 8,
                name: 'Deals',
                balance: 2312.91,
                holders: [
                    {
                        name: 'Сергей',
                        email: 'palmers@yandex.ru',
                        proportion: 100,
                        role: 'owner',
                    }
                ]
            }
        ];
    },
    getLedgerFromBD: () => {
        state.ledger = ledgerList;
    }
};

export default {
    state,
    methods
};