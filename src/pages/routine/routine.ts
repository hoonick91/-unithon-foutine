import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { DetailModalComponent } from '../../components/detail-modal/detail-modal';
import { BucketPage } from '../bucket/bucket';
import { FitnessProvider } from '../../providers/fitness/fitness';
import _ from 'lodash';


@Component({
  selector: 'page-routine',
  templateUrl: 'routine.html',
})
export class RoutinePage {

  count:number;
  myFitness:Array<{title:string,count:string,kcal:string}>=[];

  chests: Array<{ title: string, check: boolean}>=[];
  backs: Array<{ title: string, check: boolean }>=[];
  shoulders: Array<{ title: string, check: boolean }>=[];
  lowers: Array<{ title: string, check: boolean }>=[];
  twos: Array<{ title: string, check: boolean }>=[];
  threes: Array<{ title: string, check: boolean }>=[];

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    fitness: FitnessProvider) {
      this.count=0;
      this.chests = fitness.getChests();
      this.backs = fitness.getBacks();
      this.shoulders = fitness.getShoulders();
      this.lowers = fitness.getLowers();
      this.twos = fitness.getTwos();
      this.threes = fitness.getThrees();
  }

  
  ionViewDidLeave(){
    this.myFitness = [];
  }



  selFitness(body) {
    body.check = !body.check;
    if(body.check==true){
      this.count++;
    }else{
      this.count--;
    }
    
  }

  fitDetail(){
    let profileModal = this.modalCtrl.create(DetailModalComponent);
    profileModal.present();
  }

  goBucket() {
    _.forEach(this.chests,value=>{
      if(value.check==true){
        return this.myFitness.push({title:value.title,count:value.count,kcal:value.kcal});
      }
    })
    _.forEach(this.backs,value=>{
      if(value.check==true){
        return this.myFitness.push({title:value.title,count:value.count,kcal:value.kcal});
      }
    })
    _.forEach(this.shoulders,value=>{
      if(value.check==true){
        return this.myFitness.push({title:value.title,count:value.count,kcal:value.kcal});
      }
    })
    _.forEach(this.lowers,value=>{
      if(value.check==true){
        return this.myFitness.push({title:value.title,count:value.count,kcal:value.kcal});
      }
    })
    _.forEach(this.twos,value=>{
      if(value.check==true){
        return this.myFitness.push({title:value.title,count:value.count,kcal:value.kcal});
      }
    })
    _.forEach(this.threes,value=>{
      if(value.check==true){
        return this.myFitness.push({title:value.title,count:value.count,kcal:value.kcal});
      }
    })

    this.navCtrl.push(BucketPage,this.myFitness);
  }

  searchFitness(fitness:any){
    

  }

}
