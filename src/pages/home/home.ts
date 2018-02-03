import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BucketPage } from '../bucket/bucket';
import { RoutinePage } from '../routine/routine';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  sections;
  
  lastestFitness = [{
    title:'hell',
    count:'15회',
    kcal:'15kcal'
  },{
    title:'hell2323',
    count:'15회',
    kcal:'15kcal'
  }];
  

  constructor(public navCtrl: NavController) {

    //더미데이터 넣기
    // let test = [{
    //   title:'hell',
    //   count:'15회',
    //   kcal:'15kcal'
    // },{
    //   title:'hell2323',
    //   count:'15회',
    //   kcal:'15kcal'
    // }]
    // let test2 = [{
    //   title:'hell',
    //   count:'15회',
    //   kcal:'15kcal'
    // },{
    //   title:'hell2323',
    //   count:'15회',
    //   kcal:'15kcal'
    // }]
    // localStorage.setItem('test',JSON.stringify(test));
    // localStorage.setItem('test2',JSON.stringify(test2));




    // for(var i in localStorage){
    //   this.lastestFitness.push(localStorage[i]);
    // }
    // console.log(this.lastestFitness[1]);
    // console.log(this.lastestFitness[0]);
    // console.log(localStorage.getItem('test'));
  }
  

  goRoutine(){
    this.navCtrl.push(RoutinePage);
  }

  goBucket(index){
    // this.navCtrl.push(BucketPage,JSON.parse(this.lastestFitness[index]));
  }

}
