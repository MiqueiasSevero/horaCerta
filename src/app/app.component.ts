import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import {BackgroundMode} from '@ionic-native/background-mode/ngx';
import {TextToSpeech} from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private backgroundMode: BackgroundMode,
    private textToSpeech: TextToSpeech,
    private navController: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.backgroundMode.enable();
      this.backgroundMode.disableWebViewOptimizations();
      this.backgroundMode.setDefaults({silent: true});
      
      this.backgroundMode.on('activate').subscribe(() => {
          setInterval(() =>{
            this.navController.navigateRoot('/despertar').then(() =>{
                this.textToSpeech.speak({
                    text:"Boa Noite",
                    locale:"pt-BR",
                    rate: 1
                });
            });
          },15000);
      });
    });


  }


}
