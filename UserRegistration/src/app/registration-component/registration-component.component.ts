import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { IUserRegistration } from '../../model/IUserRegistration';
import { ToastrService } from 'ngx-toastr'

@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})

export class RegistrationComponentComponent implements OnInit {
  public registrationForm: FormGroup;

 constructor(private userservice:UserService, private toastr: ToastrService) {
}

  ngOnInit() {
    this.registrationForm = new FormGroup({
      fname: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      lname: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      address: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      gender: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfBirth: new FormControl('', [Validators.required, Validators.maxLength(60)]),
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.registrationForm.controls[controlName].hasError(errorName);
  }


  public registerUser = (registrationForm) => {
    if (this.registrationForm.valid) {
      this.executeOwnerCreation(registrationForm);
    }
  }

  private executeOwnerCreation = (userFormValue) => {
    let user: IUserRegistration = {
      fname: userFormValue.fname,
      lname: userFormValue.lname,
      address: userFormValue.address,
      email: userFormValue.email,
      password: userFormValue.password,
      gender: userFormValue.gender,
      dateOfBirth: userFormValue.dateOfBirth
    }

   this.userservice.registerUser(user)
   .subscribe((data: any) => {
    if (data.Succeeded == true) {
      this.toastr.success('User registration successful');
    }
    else
      this.toastr.error(data.Errors[0]);
  });
  }

}
