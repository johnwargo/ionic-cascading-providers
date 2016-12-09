import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public data: Data,
    public navCtrl: NavController,
    public platform: Platform
  ) { }

  ionViewDidLoad() {
    console.log('Entering: ionViewDidLoad');
    this.platform.ready().then(() => {
      console.log('Platform is ready');
    });
  }

  setProvider1() {
    this.data.setProvider1();
  }

  setProvider2() {
    this.data.setProvider2();
  }

  sendTestOutput() {
    this.data.provider.test();
  }
}
