export class Search {

    itemsData: any[];

    constructor() {
        this.initializeItemsData();
    }

    filterItemsData(ev: any) {
        this.initializeItemsData();
        const val = ev.target.value.toLowerCase();
        if (val && val.trim() != '') {
            this.itemsData = this.itemsData.filter((item) => {
                
                return (item.title.toLowerCase().includes(val.toLowerCase()));
            })
        }
        
    }

    initializeItemsData() {
        this.itemsData = [
            {
                title: 'Ryzen 5 2600',
                category: 'CPU',
                quantity: '5',
                price: '10,000.00',
                description: '3.0 Ghz',
                date: new Date().toDateString()
            },
            {
                title: 'iPhone 6',
                category: 'iPhone',
                quantity: '10',
                price: '9,000.00',
                description: '16GB',
                date: 'Sat Feb 15 2020'
            },
            {
                title: 'iPhone 8',
                category: 'iPhone',
                quantity: '10',
                price: '9,000.00',
                description: '16GB',
                date: 'Sat Feb 15 2020'
            },
            {
                title: 'iPhone 9',
                category: 'iPhone',
                quantity: '10',
                price: '9,000.00',
                description: '16GB',
                date: 'Sat Feb 15 2020'
            },
            {
                title: 'iPhone 10',
                category: 'iPhone',
                quantity: '10',
                price: '9,000.00',
                description: '16GB',
                date: 'Sat Feb 15 2020'
            }
            
        ];
    }

    getCountItems(){
        return this.itemsData.length;
    }

}