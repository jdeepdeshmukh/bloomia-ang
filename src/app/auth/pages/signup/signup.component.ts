import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { valueChanges } from 'src/app/helper/formerror.helper';
import { AuthserviceService } from 'src/app/auth/services/authservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userRegistration : FormGroup;

  createForm(){
    this.userRegistration = this._fb.group({
      firstname : ["", Validators.required],
      lastname : ["", Validators.required],
      email : ["", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password : ["", [Validators.required, Validators.minLength(6)]]
    }
    )

    this.userRegistration.valueChanges.subscribe(() => {
      this.formErrors = valueChanges(this.userRegistration, {...this.formErrors}, this.formErrorMessages);
    });
  }

  formErrors = {
    firstname: '',
    lastname  : '',
    email: '',
    password: ''
  };

  formErrorMessages = {
    firstname: {
      required: 'First name is Required'
    },
    lastname: {
      required: 'Last name is Required'
    },
    email: {
      required: 'Email is Required',
      pattern: 'Valid email is Required'
    },
    password: {
      required: 'Password is Required',
      minlength: 'Minimum length of password must be 6'
    }
  };


  constructor(private _fb : FormBuilder, private _authService : AuthserviceService) {
  }

  submit(){
    if (this.userRegistration.invalid) {
      this.userRegistration.markAllAsTouched();
      this.formErrors = valueChanges(this.userRegistration, {...this.formErrors}, this.formErrorMessages);
      return;
    }
    console.log(this.userRegistration.value);

    this._authService.signup(this.userRegistration.value).subscribe((data)=>{
      console.log(data);
      
    })

  }
  

  ngOnInit(): void {
    this.createForm()
  }



}
