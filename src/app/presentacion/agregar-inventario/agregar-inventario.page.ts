import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-agregar-inventario',
  templateUrl: './agregar-inventario.page.html',
  styleUrls: ['./agregar-inventario.page.scss'],
})
export class AgregarInventarioPage implements OnInit {

  categories: Array<any>=[
    {
      name:'CPU'
    },
    {
      name:'iPhone'
    },
    {
      name:'Mouse'
    }
  ]

  constructor(public router: Router) { }

  ngOnInit() {
  }

  

}
