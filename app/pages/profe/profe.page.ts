import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-profe',
  templateUrl: './profe.page.html',
  styleUrls: ['./profe.page.scss'],
})
export class ProfePage implements OnInit {

  constructor(private menuController: MenuController ) { }

  ngOnInit() {
  }
  MostrarMenu(){
    this.menuController.open('first');
  }

}
