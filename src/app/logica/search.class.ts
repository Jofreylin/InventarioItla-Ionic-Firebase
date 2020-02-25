import {ProductInfo} from './productInfo.class';
import {InventarioService} from '../datos/inventario.service'

export class Search {

    itemsData: ProductInfo[];

    constructor() {
        
        console.log(this.itemsData);
    }

    filterItemsData(ev: any) {
        
        const val = ev.target.value.toLowerCase();
        if (val && val.trim() != '') {
            this.itemsData = this.itemsData.filter((item) => {
                
                return (item.title.toLowerCase().includes(val.toLowerCase()))
                || (item.id.toLowerCase().includes(val.toLowerCase()));
            })
        }
        
    }

    initializeItemsData() {
        this.itemsData;
    }

    getCountItems(){
        return 0;
    }

}