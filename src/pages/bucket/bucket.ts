import { Component } from '@angular/core';
import { NavController, NavParams, reorderArray } from 'ionic-angular';
import { StartPage } from '../start/start';


@Component({
  selector: 'page-bucket',
  templateUrl: 'bucket.html',
})
export class BucketPage {
  items=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // console.log('this.items',navParams);
    console.log(JSON.stringify(navParams.data));
    this.items = navParams.data;
    // for (let x = 0; x < 5; x++) {
    //   this.items.push(x);
    // }
  }

  reorderItems(indexes) {
    this.items = reorderArray(this.items, indexes);
  }

  ionViewDidLoad() {
  }

  goStart(){
    this.navCtrl.push(StartPage,this.items);
  }

}
