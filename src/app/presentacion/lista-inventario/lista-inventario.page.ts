import { Component, OnInit } from '@angular/core';
import { Search } from '../../logica/search.class';
import { Delete } from 'src/app/logica/detele.class';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router'
import { Modify } from 'src/app/logica/modify.class';


@Component({
  selector: 'app-lista-inventario',
  templateUrl: './lista-inventario.page.html',
  styleUrls: ['./lista-inventario.page.scss'],
})
export class ListaInventarioPage implements OnInit {



  constructor(public alertcontroller: AlertController, public router: Router) {

    this.items = this.itemss.itemsData;

  }


  modifying: Modify = new Modify();

  itemss: Search = new Search();

  deleting: Delete = new Delete();

  items: any[];

  temporalItems: any[];

  textobuscar: '';

  ngOnInit() {
  }

  async delete(){
    const alert = await this.alertcontroller.create({
      header: 'Eliminar!',
      message: '¿Está seguro de que desea eliminar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) =>{
            console.log('Confirmacion de cancelacion: blah');
          }
        },{
          text: 'Eliminar',
          cssClass: 'danger',
          handler: () =>{
            console.log('Confirmacion de eliminacion');
          }
        }
      ]
    });

    await alert.present();
    console.log('borrandoooo');

  }

  modify(i) {
    this.temporalItems = this.itemss.itemsData.slice(i,this.itemss.itemsData.length);
    this.modifying.arreglo = this.temporalItems.slice(0,1);
    console.log(this.modifying.arreglo);
    this.router.navigate(['/modificar-inventario']);
  }




}