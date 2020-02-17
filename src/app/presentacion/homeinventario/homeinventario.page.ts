import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';
import {Search} from '../../logica/search.class'

@Component({
  selector: 'app-homeinventario',
  templateUrl: './homeinventario.page.html',
  styleUrls: ['./homeinventario.page.scss'],
})


export class HomeinventarioPage implements OnInit {

  search: Search = new Search();

  cantidad: number = 0;

  pages: Array<any> =[
    {
      title: 'Lista de Inventario',
      url: './lista-inventario',
      icon: 'cube-outline'
    },
    {
      title: 'Agregar productos',
      url: './agregar-inventario',
      icon: 'add-circle-outline'
    },
    
  ]

  selectedPath = '';

  constructor(public router: Router, private menu: MenuController) {
    this.cantidad = this.search.getCountItems();

   }

  ngOnInit() {
  }

  onLogout(){
    this.router.navigate(['/home']);
  }

  openFirst(){
    this.menu.enable(true,'first');
    this.menu.open('first');
  }

  goToPage(p){
    this.router.navigate([p.url]);
  }

  goToList(){
    this.router.navigate(['./lista-inventario']);
  }

  

}
