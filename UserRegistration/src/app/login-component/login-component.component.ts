import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { ILogin } from '../../model/ILogin';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  public loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.loginForm.controls[controlName].hasError(errorName);
  }


  public loginUser = (loginForm) => {
    if (this.loginForm.valid) {
      this.executeOwnerCreation(loginForm);
    }
  }

  private executeOwnerCreation = (loginFormValue) => {
    let user: ILogin = {
      email: loginFormValue.email,
      password: loginFormValue.password
    }

    debugger;
    console.log(user);

  }

}
