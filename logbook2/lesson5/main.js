// VÕ QUỲNH NHƯ - GCS230148
const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            description: 'A warm fuzzy pair of socks',
            url: 'https://www.nike.com/vn/w/green-socks-7ny3qzbdka',
            inventory: 100,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green' },
                { id: 2235, color: 'blue' }
            ],
            sizes: ['S', 'M', 'L', 'XL']
        }
    }
})
