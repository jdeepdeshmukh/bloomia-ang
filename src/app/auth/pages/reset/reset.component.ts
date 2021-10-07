import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { valueChanges } from 'src/app/helper/formerror.helper';
import { AuthserviceService } from '../../services/authservice.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  resetForm : FormGroup;

  constructor(private _authServ : AuthserviceService, private _fb : FormBuilder) { }


  createForm(){
    this.resetForm = this._fb.group({
      password : ["", [Validators.required]],
      newPassword : ["", [Validators.required]]
    })

    this.resetForm.valueChanges.subscribe(() => {
      this.formErrors = valueChanges(this.resetForm, {...this.formErrors}, this.formErrorMessages);
    });
  }

  formErrors = {
    password: ''
  };

  formErrorMessages = {
    password: {
      required: 'Email is Required',
      pattern: 'Valid email is required'
    }
  };

  resetPassword(){
    console.log(this.resetForm.value);
    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();
      this.formErrors = valueChanges(this.resetForm, {...this.formErrors}, this.formErrorMessages);
      return;
    }
    console.log(this.resetForm.value);
    this._authServ.forgotPassword(this.resetForm.value).subscribe((result)=>{
      console.log(result);
      
    })
  }


  ngOnInit(): void {
    this.createForm();
  }

}
