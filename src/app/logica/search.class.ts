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
                
                return (item.title.toLowerCase().includes(val.toLowerCase()))
                || (item.code.toLowerCase().includes(val.toLowerCase()));
            })
        }
        
    }

    initializeItemsData() {
        this.itemsData = [
            {
                title: 'Ryzen 5 2600',
                code: 'AHSBF6JH',
                category: 'CPU',
                quantity: '5',
                price: '10,000.00',
                description: '3.0 Ghz',
                date: new Date().toDateString()
            },
            {
                title: 'iPhone 6',
                code: 'AJKSHD78JS',
                category: 'SmartPhone',
                quantity: '10',
                price: '9,000.00',
                description: '16GB',
                date: 'Sat Feb 15 2020'
            },
            {
                title: 'Samsung Galaxy S8',
                code: 'CNVH80LKS',
                category: 'SmartPhone',
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