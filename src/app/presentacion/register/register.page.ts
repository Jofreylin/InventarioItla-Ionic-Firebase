import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../datos/auth.service';
import {User} from '../../logica/user.class';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: User = new User();

  constructor(private alertController: AlertController,private router: Router, private authSvc: AuthService) { }

  ngOnInit() {
  }

  async onRegister(){
    const user = await this.authSvc.onRegiser(this.user);
    if(user){
      console.log('Usuario creado satisfactoriamente');
      this.alert();
      this.router.navigate(['/login']);
    }
  }

  async alert(){
    const alert = await this.alertController.create({
      header:'',
      message:'USUARIO CREADO SATISFACTORIAMENTE',
      buttons:[
        {
          text: 'OK',
          role: 'OK'
        }
      ]
    });
    alert.present();
  }
}
