import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RoutinePage } from '../routine/routine';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  goRoutine(){
    // console.log('hello');
    this.navCtrl.push(RoutinePage);
  }

}
