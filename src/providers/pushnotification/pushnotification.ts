import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';

import { Platform } from "ionic-angular";

@Injectable()
export class PushnotificationProvider {

  constructor(private oneSignal: OneSignal,
              public platform: Platform) {
    console.log('Hello PushnotificationProvider Provider');
  }

  init_notifications(){

    if(this.platform.is("cordova")){
      this.oneSignal.startInit('99b5a64f-4cb2-4c24-a1bf-37344a421e01', '579596395248');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
       // do something when notification is received
        console.log("notificacion recibida...---->>>>")

      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
        console.log("notificacion ha sido abierta...---->>>>")
      });

      this.oneSignal.endInit();
    }else{
      console.log("No funciona OneSignal sin cordova...")
    }

  }

}
