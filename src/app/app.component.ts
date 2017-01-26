import { Component } from '@angular/core';
import { Platform, MenuController} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { MenuTestPage } from '../pages/menu-test/menu-test';
import { GeneratedTestPage } from '../pages/generated-test/generated-test';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage : any = HomePage;
  pages: Array<{component: any, title: string, icon: string}>;


  constructor(platform: Platform, public menuCtrl: MenuController) {


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.pages = [
      {component: HomePage, title: 'Home', icon: 'home'},
      {component: MenuTestPage, title: 'Menu', icon: 'menu'},
      {component: GeneratedTestPage, title: 'Generated Page', icon: 'home'}
    ];
  }

  clicou() : void {
    console.log(this.pages);
  }

  openPage(page : any) : void {
    console.log(page.component);
    this.rootPage = page.component;
    this.menuCtrl.close();
  }

}
