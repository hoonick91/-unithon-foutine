import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ViewController } from 'ionic-angular/navigation/view-controller';

@Component({
  selector: 'end-modal',
  templateUrl: 'end-modal.html'
})
export class EndModalComponent {

  text: string;
  fitnesses={};

  constructor(public params:NavParams, public viewCtrl:ViewController) {
    this.fitnesses = params.data;
    console.log(params.data);
  }

  dismiss() {  
    this.viewCtrl.dismiss();
  }

}
