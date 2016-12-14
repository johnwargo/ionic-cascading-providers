import { Injectable } from '@angular/core';

@Injectable()
export class Data2 {

  constructor() {
    console.log('Initializing Data-2')
  }

  test() {
    console.log('Output from Data-2');
  }
}
