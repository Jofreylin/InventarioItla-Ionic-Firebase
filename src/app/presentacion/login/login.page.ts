import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../datos/auth.service';
import {User} from '../../logica/user.class';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();

  constructor(private alertController: AlertController, private router: Router, private authSvc: AuthService) { }

  ngOnInit() {
  }

  goRegister(){
    this.router.navigate(['/register']);
  }

  async onLogin(){
    const user = await this.authSvc.onLogin(this.user);
    if(user){
      console.log('Logeo satisfactorio');
      this.router.navigate(['/homeinventario']);
    }
    
  }


}