import { Component, NgZone } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import * as io from 'socket.io-client';
import { HomePage } from '../home/home';
import { FitnessProvider } from '../../providers/fitness/fitness';


@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {

  messages: any = [];
  socketHost: string = "https://88aff93f.ngrok.io";
  socket: any;
  chat: any;
  username: string = 'jonghoon';
  zone: any;

  fitnesses = [];
  cnt: number = 0;



  subscription;
  min = 0;
  sec = 0;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public fit: FitnessProvider) {
    this.fitnesses = navParams.data;

    this.socket = io.connect(this.socketHost);
    this.zone = new NgZone({ enableLongStackTrace: false });
    this.socket.on("complete", (msg) => {
      this.zone.run(() => {
        this.fitnesses[this.cnt].status = msg.count;
        this.cnt++;
        console.log('socket', msg.count);
      });
    });
    this.chatSend(this.fitnesses);
  }
  chatSend(data) {
    this.socket.emit('new message', data);
    this.chat = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StartPage');
    this.subscription = Observable.interval(1000).subscribe(x => {
      this.sec++;
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
    this.navCtrl.setRoot(HomePage);
    localStorage.setItem('myfit', JSON.stringify(this.fitnesses));
  }




}



