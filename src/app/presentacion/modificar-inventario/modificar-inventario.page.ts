import { Component, OnInit } from '@angular/core';
import {InventarioService} from '../../datos/inventario.service';
import {ProductInfo} from '../../logica/productInfo.class';
import {ActivatedRoute} from '@angular/router';
import {NavController, LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-modificar-inventario',
  templateUrl: './modificar-inventario.page.html',
  styleUrls: ['./modificar-inventario.page.scss'],
})
export class ModificarInventarioPage implements OnInit {

  producto: ProductInfo={
    title: '',
    quantity: 0,
    price: 0,
    category: '',
    description: '',
    date: null,
    secondCode: ''
  };
  productoId = null;

  constructor(private route: ActivatedRoute, private nav: NavController,
    private invService: InventarioService, private loadingController: LoadingController) {

     }

  ngOnInit() {
    this.productoId = this.route.snapshot.params['id'];
    if(this.productoId){
      this.loadProducto();
    }
  }

  async loadProducto(){
    const loading = await this.loadingController.create({
      message:'Cargando.....'
    });
    await loading.present();
    this.invService.getProducto(this.productoId).subscribe(resultado =>{
      loading.dismiss();
      this.producto = resultado;
    })
  }

  async modifyProducto(){
    const loading = await this.loadingController.create({
      message:'Actualizando.....'
    });
    await loading.present();
    if(this.productoId){
      this.invService.updateInventario(this.producto,this.productoId).then(()=>{
        loading.dismiss();
        this.nav.navigateForward('/lista-inventario');
      })
    }else{

    }
  }

}
