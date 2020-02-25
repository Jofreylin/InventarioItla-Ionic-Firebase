import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  date: Date;

  constructor(public router: Router) {
    console.log(this.date)
  }

  onLogin(){
    this.router.navigate(['/login']);
  }
}
