import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';
import {GeneratedTestPage} from '../pages/generated-test/generated-test';
import {ConnectionService} from '../providers/connection-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuTestPage,
    GeneratedTestPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuTestPage,
    GeneratedTestPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, {provide: ConnectionService, useClass: ConnectionService}]
})
export class AppModule {}
