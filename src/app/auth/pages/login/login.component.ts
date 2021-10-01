import { Component, OnInit } from '@angular/core';
import { valueChanges } from 'src/app/helper/formerror.helper';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthserviceService } from 'src/app/auth/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userLogin : FormGroup;

  createForm(){
    this.userLogin = this._fb.group({
      email : ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password : ["", [Validators.required, Validators.minLength(6)]]
    }
    )

    this.userLogin.valueChanges.subscribe(() => {
      this.formErrors = valueChanges(this.userLogin, {...this.formErrors}, this.formErrorMessages);
    });
  }

  formErrors = {
    email: '',
    password: ''
  };

  formErrorMessages = {
    email: {
      required: 'Email is Required',
      pattern: 'Valid email is required'
    },
    password: {
      required: 'Password is Required',
      minlength: 'Minimum length of password must be 6'
    }
  };

  constructor(private _fb : FormBuilder, private _authService : AuthserviceService) { }

  submit(){
    if (this.userLogin.invalid) {
      this.userLogin.markAllAsTouched();
      this.formErrors = valueChanges(this.userLogin, {...this.formErrors}, this.formErrorMessages);
      return;
    }
    this._authService.login(this.userLogin.value).subscribe((data)=>{
      console.log(data)
    });

  }

  ngOnInit(): void {
    this.createForm()
  }

}
