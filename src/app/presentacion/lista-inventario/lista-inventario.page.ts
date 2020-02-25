import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router'
import { InventarioService } from '../../datos/inventario.service';
import { Observable } from 'rxjs';
import { ProductInfo } from 'src/app/logica/productInfo.class';

@Component({
  selector: 'app-lista-inventario',
  templateUrl: './lista-inventario.page.html',
  styleUrls: ['./lista-inventario.page.scss'],
})
export class ListaInventarioPage implements OnInit {

  items: any[];

  temporalItems: any[];

  textobuscar: '';

  constructor(private loadingController: LoadingController, private invService: InventarioService, public alertcontroller: AlertController, public router: Router) {
    this.invService.getInventario().subscribe(resultado => {
      this.items = resultado;
      
    });
    //this.items = this.itemss.itemsData;

  }


  ngOnInit() {
    this.invService.getInventario().subscribe(resultado => {
      this.temporalItems = resultado;
      
    });
    this.updateList();
    //this.items = this.invService.getInventario();

  }

  updateList(){
    this.items = this.temporalItems;
  }

  filterItemsData(ev: any) {
    this.updateList();
    const val = ev.target.value.toLowerCase();
      if (val && val.trim() != '') {
        this.items = this.items.filter((item) => {

          return (item.title.toLowerCase().includes(val.toLowerCase()))
            || (item.secondCode.toLowerCase().includes(val.toLowerCase()))
            || (item.id.toLowerCase().includes(val.toLowerCase()));
        })
      }

  }



  async delete(id) {
    const alert = await this.alertcontroller.create({
      header: 'Eliminar!',
      message: '¿Está seguro de que desea eliminar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirmacion de cancelacion: blah');
          }
        }, {
          text: 'Eliminar',
          cssClass: 'danger',
          handler: () => {
            console.log('Confirmacion de eliminacion');
            this.deleteConfirmed(id);
          }
        }
      ]
    });

    await alert.present();

  }

  async deleteConfirmed(id) {
    const loading = await this.loadingController.create({
      message: 'Eliminando....'
    })
    loading.present();
    this.invService.deleteInventario(id).then(() => {
      loading.dismiss();
    });
  }

  /*
    modify(i) {
      this.temporalItems = this.itemss.itemsData.slice(i,this.itemss.itemsData.length);
      this.modifying.arreglo = this.temporalItems.slice(0,1);
      console.log(this.modifying.arreglo);
      this.router.navigate(['/modificar-inventario']);
    }
  
  */


}