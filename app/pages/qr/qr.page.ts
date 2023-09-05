import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  constructor(private menuController: MenuController ) { }

  ngOnInit() {
  }
  MostrarMenu(){
    this.menuController.open('first');
  }

}
