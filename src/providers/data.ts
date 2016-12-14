import { Injectable } from '@angular/core';
import { Data1 } from './data-1';
import { Data2 } from './data-2';

@Injectable()
export class Data {

  public provider: any;

  constructor(
    private data1: Data1,
    private data2: Data2
  ) {
    console.log('Data Provider: Initializing provider');
    //Set the default provider
    this.provider = this.data1;
  }

  public setProvider(provider: number) {
    console.log('Data Provider: Entering setProvider()');
    //Validate input
    if (provider < 3) {
      //switch to the selected provider
      switch (provider) {
        case 1:
          console.log('Data Provider: Setting provider Data1');
          this.provider = this.data1;
          break;
        case 2:
          console.log('Data Provider: Setting provider Data2');
          this.provider = this.data2;
          break;
      }
    } else {
      console.warn('Data Provider: Invalid provider number');
    }
  }

}
