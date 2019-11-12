import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}
  
  cadastrarHoraCerta() {
    //alert("chegou");
    this.navCtrl.navigateForward('/cadastrar-hora-certa');
  }

}
