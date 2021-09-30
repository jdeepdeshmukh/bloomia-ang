import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { valueChanges } from 'src/app/helper/formerror.helper';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public inactive:boolean = true;
  public isValid:boolean = true;

  userInfo : FormGroup;

  createForm(){
    this.userInfo = this._fb.group({
      firstname : ["", Validators.required],
      lastname : ["", Validators.required],
      email : [""],
      phone : ["", [Validators.required, Validators.minLength(10)]]
    }
    )

    this.userInfo.valueChanges.subscribe(() => {
      this.formErrors = valueChanges(this.userInfo, {...this.formErrors}, this.formErrorMessages);
    });
  }

  formErrors = {
    firstname: '',
    lastname  : '',
    phone: ''
  };

  formErrorMessages = {
    firstname: {
      required: 'First name is Required'
    },
    lastname: {
      required: 'Last name is Required'
    },
    phone: {
      required: 'Phone number is Required',
      minlength: 'Minimum length must be 10'
    }
  };

  constructor(private _fb : FormBuilder) {
   }

  changeStatus(){
    this.isValid = !this.isValid;
    if(this.isValid)
    {
      this.userInfo.controls.firstname.disable()
      this.userInfo.controls.lastname.disable()
      this.userInfo.controls.phone.disable()
    }
    else
    {
      this.userInfo.controls.firstname.enable()
      this.userInfo.controls.lastname.enable()
      this.userInfo.controls.phone.enable()
    }
  }

  changePassword(){
    this.inactive = !this.inactive;
  }
  submit(){
    if (this.userInfo.invalid) {
      this.userInfo.markAllAsTouched();
      this.formErrors = valueChanges(this.userInfo, {...this.formErrors}, this.formErrorMessages);
      return;
    }
    console.log(this.userInfo.value);
  }

  ngOnInit(): void {
    this.createForm()

    this.userInfo.setValue({
      firstname : "jaydeep",
      lastname : "deshmukh",
      email : "jay@gmail.com",
      phone : "123456"
      })
  }

}
