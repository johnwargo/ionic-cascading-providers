import { Injectable } from '@angular/core';
import { Data1 } from './data-1';
import { Data2 } from './data-2';

@Injectable()
export class Data {
 
  public provider: any;

  constructor() {    
    console.log('initializing provider (Data)');
    //Set a default provider
    this.provider = Data1.prototype;      
  }

  setProvider1() {
    console.log('Switching to Data-1 provider');
    this.provider = Data1.prototype;
  }

  setProvider2() {
    this.provider = Data2.prototype;
    console.log('Switching to Data-2 provider');
  }

}
