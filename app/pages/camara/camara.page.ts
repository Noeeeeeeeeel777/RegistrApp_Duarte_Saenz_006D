import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  constructor(private menuController: MenuController ) { }

  ngOnInit() {
  }
  MostrarMenu(){
    this.menuController.open('first');
  }
}
