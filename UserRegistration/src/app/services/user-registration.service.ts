import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { IUserRegistration } from '../../model/IUserRegistration';
 
@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:63101';
  constructor(private http: HttpClient) { }
 
  registerUser(userFormValue : IUserRegistration){
    const body: IUserRegistration = {
      fname: userFormValue.fname,
      lname: userFormValue.lname,
      address: userFormValue.address,
      email: userFormValue.email,
      password: userFormValue.password,
      gender: userFormValue.gender,
      dateOfBirth: userFormValue.dateOfBirth
    }
    return this.http.post(this.rootUrl + '/api/User/Register', body);
  }
 }