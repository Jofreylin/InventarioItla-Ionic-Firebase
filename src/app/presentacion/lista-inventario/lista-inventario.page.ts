import { Component, OnInit } from '@angular/core';
import { Search } from '../../logica/search.class';


@Component({
  selector: 'app-lista-inventario',
  templateUrl: './lista-inventario.page.html',
  styleUrls: ['./lista-inventario.page.scss'],
})
export class ListaInventarioPage implements OnInit {

 itemss: Search = new Search();

 items: any[];

  textobuscar: '';

  constructor() {

    this.items = this.itemss.itemsData;

   }

  ngOnInit() {
  }

  filterSearch(event){
    const texto = event.target.value;
    this.textobuscar = texto;
  }

  


}