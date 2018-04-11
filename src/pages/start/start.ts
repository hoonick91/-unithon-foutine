// import { Component, NgZone } from '@angular/core';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
// import * as io from 'socket.io-client';
import { HomePage } from '../home/home';
import { FitnessProvider } from '../../providers/fitness/fitness';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { EndModalComponent } from '../../components/end-modal/end-modal';


@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  messages: any = [];
  socket: any;
  chat: any;
  username: string = 'jonghoon';
  zone: any;
  
  fitnesses = [];
  cnt: number = 0;
  restTime: boolean = true;
  
  
  // socketHost: string = "https://88aff93f.ngrok.io";

  subscription;
  min = 0;
  sec = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fit: FitnessProvider,
  public modalCtrl: ModalController) {
      // this.fitnesses = navParams.data;
      this.fitnesses.push({title:'삼두들기',check:false,count:'15회',kcal:'50kcal'});


    // this.socket = io.connect(this.socketHost);
    // this.zone = new NgZone({ enableLongStackTrace: false });
    // this.socket.on("complete", (msg) => {
    //   this.zone.run(() => {
    //     this.fitnesses[this.cnt].status = msg.count;
    //     this.cnt++;
    //     console.log('socket', msg.count);
    //   });
    // });
    // this.chatSend(this.fitnesses);
  }
  // chatSend(data) {
  //   this.socket.emit('new message', data);
  //   this.chat = '';
  // }

  ionViewDidLoad() {
    this.subscription = Observable.interval(1000).subscribe(x => {
      this.sec++;
      this.restTime=true;

      if(this.sec == 10){
        this.restTime=false;
        // var list = document.getElementsByClassName
        document.getElementsByClassName('fit-item')[0].style.background = '#DFF0F7';
      }
      if (this.sec == 60) {
        this.min++;
        this.sec = 0;
      }
    });

  }
  stopTheIterations() {
    this.subscription.unsubscribe();
  }

  goHome() {
    this.fit.init();
    // this.navCtrl.setRoot(HomePage);
    let profileModal = this.modalCtrl.create(EndModalComponent,this.fitnesses);
    profileModal.present();
    localStorage.setItem('myfit', JSON.stringify(this.fitnesses));
  }




}



