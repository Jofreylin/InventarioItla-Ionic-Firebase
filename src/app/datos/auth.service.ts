import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {User} from '../logica/user.class';
import {AlertController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: any = false;

  constructor(private alertController: AlertController,public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
  }


  //log in
  async onLogin (user: User){
    try{
      return await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    } catch(error){
      const alert = await this.alertController.create({
        header:'ERROR',
        message: error,
        buttons:[{
          text:'OK',
          role: 'cancel'
        }]
      });
      await alert.present();
      //console.log('Error on login: ', error);
    }
  }



  //register
  async onRegiser( user: User){
    try{
      return await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    }catch(error){
      const alert = await this.alertController.create({
        header:'ERROR',
        message: error,
        buttons:[{
          text:'OK',
          role: 'cancel'
        }]
      });
      await alert.present();
      //console.log('Error on register: ', error);
    }
  }
}
