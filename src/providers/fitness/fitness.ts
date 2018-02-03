import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FitnessProvider {
  chestTitle:boolean=false;
  backTitle:boolean=false;
  shoulderTitle:boolean=false;
  lowerTitle:boolean=false;
  twoTitle:boolean=false;
  threeTitle:boolean=false;

  chests: Array<{ title: string, check: boolean,count:string,kcal:string}>=[];
  backs: Array<{ title: string, check: boolean,count:string,kcal:string}>=[];
  shoulders: Array<{ title: string, check: boolean,count:string,kcal:string}>=[];
  lowers: Array<{ title: string, check: boolean,count:string,kcal:string}>=[];
  twos: Array<{ title: string, check: boolean,count:string,kcal:string}>=[];
  threes: Array<{ title: string, check: boolean,count:string,kcal:string}>=[];

  constructor(public http: HttpClient) {

    this.chests.push({title:'일반푸쉬업',check:false,count:'15회',kcal:'50kcal'});
    this.chests.push({title:'아쳐 푸쉬업',check:false,count:'15회',kcal:'50kcal'});
    this.chests.push({title:'스파이터맨 푸쉬업',check:false,count:'15회',kcal:'50kcal'});
    this.backs.push({title:'풀업',check:false,count:'15회',kcal:'50kcal'});
    this.shoulders.push({title:'어깨운동하기',check:false,count:'15회',kcal:'50kcal'});
    this.lowers.push({title:'스쿼트',check:false,count:'15회',kcal:'50kcal'});
    this.twos.push({title:'이두들기',check:false,count:'15회',kcal:'50kcal'});
    this.threes.push({title:'삼두들기',check:false,count:'15회',kcal:'50kcal'});
  }

  init(){
    for(var i=0;i<this.chests.length;i++){
      this.chests[i].check=false;
    }
    for(var i=0;i<this.backs.length;i++){
      this.backs[i].check=false;
    }
    for(var i=0;i<this.shoulders.length;i++){
      this.shoulders[i].check=false;
    }
    for(var i=0;i<this.lowers.length;i++){
      this.lowers[i].check=false;
    }
    for(var i=0;i<this.twos.length;i++){
      this.twos[i].check=false;
    }
    for(var i=0;i<this.threes.length;i++){
      this.threes[i].check=false;
    }
  }

  getChests(){
    return this.chests;
  }
  getBacks(){
    return this.backs;
  }
  getShoulders(){
    return this.shoulders;
  }
  getLowers(){
    return this.lowers;
  }
  getTwos(){
    return this.twos;
  }
  getThrees(){
    return this.threes;
  }



  



}
