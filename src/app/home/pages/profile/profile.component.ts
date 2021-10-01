import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { valueChanges, passwordValidation, passNotSame } from 'src/app/helper/formerror.helper';
import { HeaderService } from 'src/app/home/services/header.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public inactive:boolean = true;
  public isValid:boolean = true;

  userInfo : FormGroup
  passwordForm : FormGroup

  user : {
    firstname : "jaydeep",
    lastname : "deshmukh",
    email : "jay@gmail.com",
    phone : "123456"
    }

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


    this.passwordForm = this._fb.group({
      currentPassword : ["", [Validators.required, Validators.minLength(6)]],
      newPassword : ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword : ["", [Validators.required, Validators.minLength(6)]]
    },
    {
      validators: [passwordValidation.match('newPassword', 'confirmPassword'), 
                    passNotSame.match('currentPassword', 'newPassword')]
    }
)
    this.passwordForm.valueChanges.subscribe(() => {
      this.formErrors = valueChanges(this.passwordForm, {...this.formErrors}, this.formErrorMessages);
    });
  }

  formErrors = {
    firstname: '',
    lastname  : '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
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
    },
    currentPassword: {
      required: 'Current Password is Required',
      minlength: 'Minimum length must be 6'
    },
    newPassword: {
      required: 'New Password is Required',
      minlength: 'Minimum length must be 6',
      same: 'Current Password and new password should not be same'
    },
    confirmPassword: {
      required: 'Confirm Password is Required',
      minlength: 'Minimum length must be 6',
      matching: 'Password not matched'
    }
  };

  constructor(private _fb : FormBuilder, private _headerServ : HeaderService) {
   }

   upload(file){
     var file = file.files[0];
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
  submitPassword(){
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      this.formErrors = valueChanges(this.passwordForm, {...this.formErrors}, this.formErrorMessages);
      return;
    }
    console.log(this.passwordForm.value)
  }
  submit(){
    if (this.userInfo.invalid) {
      this.userInfo.markAllAsTouched();
      this.formErrors = valueChanges(this.userInfo, {...this.formErrors}, this.formErrorMessages);
      return;
    }
    this._headerServ.subject.next(this.userInfo.value.firstname+' '+this.userInfo.value.lastname);
    this.isValid = !this.isValid
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

  ngOnInit(): void {
    this.createForm()

    this.userInfo.setValue({
      firstname : "Jaydeep",
      lastname : "Deshmukh",
      email : "jay@gmail.com",
      phone : "1234567890"
      })

  }


}
