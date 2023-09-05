import { Component, OnInit } from '@angular/core';
import {
  FormGroup, 
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {

  formularioRecuperarContra: FormGroup;

  constructor(public fb: FormBuilder) {
    this.formularioRecuperarContra = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    });
   }

  ngOnInit() {
  }

}
