import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//providers
import { Data } from '../providers/data';
import { Data1 } from '../providers/data-1';
import { Data2 } from '../providers/data-2';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [Data, Data1, Data2, { provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
