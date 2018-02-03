import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RoutinePage } from '../pages/routine/routine';
import { AvatarComponent } from '../components/avatar/avatar';
import { DetailModalComponent } from '../components/detail-modal/detail-modal';
import { BucketPage } from '../pages/bucket/bucket';
import { StartPage } from '../pages/start/start';
import { HttpModule } from '@angular/http';
import { FitnessProvider } from '../providers/fitness/fitness';
import { HttpClientModule } from '@angular/common/http';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RoutinePage,
    BucketPage,
    StartPage,
    AvatarComponent,
    DetailModalComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RoutinePage,
    BucketPage,
    StartPage,
    AvatarComponent,
    DetailModalComponent,
    ProgressBarComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    FitnessProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
