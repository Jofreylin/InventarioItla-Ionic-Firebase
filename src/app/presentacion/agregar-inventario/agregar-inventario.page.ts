import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {InventarioService} from '../../datos/inventario.service';
import {ProductInfo} from '../../logica/productInfo.class'
import {NavController, LoadingController} from '@ionic/angular'
@Component({
  selector: 'app-agregar-inventario',
  templateUrl: './agregar-inventario.page.html',
  styleUrls: ['./agregar-inventario.page.scss'],
})
export class AgregarInventarioPage implements OnInit {
  
  producto: ProductInfo={
    title: '',
    quantity: 0,
    price: 0,
    category: '',
    description: '',
    date: new Date().toString(),
    secondCode: ''

  }

  constructor(public router: Router, private nav: NavController, private loading: LoadingController, private invService: InventarioService) { }

  ngOnInit() {
  }

  async addProducto(){
    const loading = await this.loading.create({
      message: 'Creando....'
    });
    loading.present();
    this.invService.addInventario(this.producto).then(()=>{
      loading.dismiss();
      this.nav.navigateForward('/homeinventario');
    })
  }
  

}
