import { Injectable } from '@angular/core';

@Injectable()
export class Data1 {

  constructor() {
    console.log('Initializing Data1')
  }

  test() {
    console.log('Output from Data-1');
  }
}
