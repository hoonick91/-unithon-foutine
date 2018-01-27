import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RoutinePage } from '../pages/routine/routine';
import { AvatarComponent } from '../components/avatar/avatar';
import { LastestComponent } from '../components/lastest/lastest';
import { DetailModalComponent } from '../components/detail-modal/detail-modal';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RoutinePage,
    AvatarComponent,
    LastestComponent,
    DetailModalComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RoutinePage,
    AvatarComponent,
    LastestComponent,
    DetailModalComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
