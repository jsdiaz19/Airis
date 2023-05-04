import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  emailError = false;
  formLogin = this.fb.group({
    email: ['', [ Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)], ],
  });

  constructor(
    private fb: FormBuilder,
    private _userService: UserService
  ) { }

  login() {
    this.emailError = false;

    if ( this.formLogin.invalid ) {

      if ( this.formLogin.get('email')?.errors?.['pattern'] ) {
        this.emailError = true;
      }

    } else {

      if ( this.formLogin.value.email ) {
          this._userService.login( this.formLogin.value.email ).subscribe();
      }

    }
  }

}
