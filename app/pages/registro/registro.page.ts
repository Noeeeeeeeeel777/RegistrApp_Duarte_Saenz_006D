import { Component, OnInit } from '@angular/core';
import {
  FormGroup, 
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder) { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'Apellido': new FormControl("",Validators.required),
      'Edad': new FormControl("",Validators.required),
      'Rut': new FormControl("",Validators.required),
      'Correo': new FormControl("",Validators.required),
      'Contraseña': new FormControl("",Validators.required),
      'confirmacionPassword': new FormControl("",Validators.required),
      'Seleccione Jornada': new FormControl("",Validators.required)
    });
  }

  ngOnInit() {
  }

}
