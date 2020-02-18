import { Component, OnInit } from '@angular/core';
import { Modify } from 'src/app/logica/modify.class';
 

@Component({
  selector: 'app-modificar-inventario',
  templateUrl: './modificar-inventario.page.html',
  styleUrls: ['./modificar-inventario.page.scss'],
})
export class ModificarInventarioPage implements OnInit {

  code: string = '';

  modifying: Modify = new Modify();

  constructor() { }

  ngOnInit() {
  }
}
