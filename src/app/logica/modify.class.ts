import {ModificarInventarioPage} from '../presentacion/modificar-inventario/modificar-inventario.page';

export class Modify  {

    arreglo: any[];

    code: string = '';
    title: string = '';
    quantity: number = 0;
    price: number = 0.00;
    category: string = '';
    description: string = '';
    date: Date;

    cadena: string = "";

    constructor(){

        
    }

    loadArreglo(){
        console.log(this.arreglo)
    }
}