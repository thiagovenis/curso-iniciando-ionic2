import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ConnectionService } from '../../providers/connection-service';

@Component({
  selector: 'page-generated-test',
  templateUrl: 'generated-test.html'
})
export class GeneratedTestPage {

  constructor(public navCtrl: NavController, private connectionService: ConnectionService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneratedTestPage');
  }

  buscarCep() : void {
    this.connectionService.getCep('72300603').then((resp) => {
      let json = resp.json();
      console.log(json);
      console.log(json.localidade);
    }).catch((err) => {
      console.log(err);
    });
  }

}
