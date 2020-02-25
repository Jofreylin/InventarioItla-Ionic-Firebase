import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { MenuController } from '@ionic/angular';
import {Search} from '../../logica/search.class';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from '../../datos/auth.service';
import {InventarioService} from '../../datos/inventario.service';

@Component({
  selector: 'app-homeinventario',
  templateUrl: './homeinventario.page.html',
  styleUrls: ['./homeinventario.page.scss'],
})


export class HomeinventarioPage implements OnInit {

  search: Search = new Search();

  cantidad: number;

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

  constructor(private invService: InventarioService,public router: Router, private menu: MenuController, private authSvc: AuthService, private afAuth: AngularFireAuth) {
    

   }

  ngOnInit() {
    this.invService.getInventario().subscribe(resultado =>{
      this.cantidad = resultado.length;
    })
    
  }

  onLogout(){

    this.afAuth.auth.signOut();
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
