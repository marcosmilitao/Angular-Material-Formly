import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contato } from './models/contato.model';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contatoForm: FormGroup;
  contatoModel: Contato;
  contatoFiealds: Array<FormlyFieldConfig>

  constructor() {
    this.contatoForm = new FormGroup({});
    this.contatoModel = new Contato();
    this.contatoFiealds = this.contatoModel.formFields();
  }
  submitForm(contato: Contato){
    console.log(contato);
  }
}
