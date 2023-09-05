import { Component } from '@angular/core';

interface Componente{
  name: string;
  icon: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {

  constructor() {}

  componentes : Componente[]=[
    {
      name:'Inicio',
      icon: 'cloudy-night-outline',
      redirecTo:'/inicio'
    },
    {
      name:'Info',
      icon: 'nutrition-outline',
      redirecTo:'/info'
    },
    {
      name:'Registrar Asistencia',
      icon: 'sparkles-outline',
      redirecTo:'/profe'
    },
    {
      name:'Mi Asistencia',
      icon: 'fish-outline',
      redirecTo:'/alumno'
    }
  ]

}
