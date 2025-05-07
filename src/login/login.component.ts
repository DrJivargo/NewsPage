import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {HeaderComponent} from '../page-components/header/header.component';
import {StickyHeaderComponent} from '../page-components/sticky-header/sticky-header.component';
import {SvgIconComponent} from '../helpers/svg-icon.component';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    HeaderComponent,
    StickyHeaderComponent,
    SvgIconComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public myForm = new FormGroup({
    login: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required])
  })
  public handleValue() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    } else {
      alert('Форма не валидна')
    }
    console.log(this.myForm.get(['login'])?.value)
  }
}
