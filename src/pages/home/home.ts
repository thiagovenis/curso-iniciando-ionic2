import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import {MenuTestPage} from '../menu-test/menu-test';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage(): void {// insere a pagina na pilha. Retira os icones de menu.
    this.navCtrl.push(MenuTestPage);
  }

}
