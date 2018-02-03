import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'detail-modal',
  templateUrl: 'detail-modal.html'
})
export class DetailModalComponent {
  text: string;

  constructor(public viewCtrl:ViewController) {
    console.log('Hello DetailModalComponent Component');
    this.text = 'Hello World';
  }

  dismiss() {  
    this.viewCtrl.dismiss();
  }

}
