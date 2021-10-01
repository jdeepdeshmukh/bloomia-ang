import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/home/services/header.service';
import SlimSelect from 'slim-select';
import { ConfigurationService } from 'src/app/home/services/configuration.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  
  exercises = ["Beginner", "Intermediate", "Advance", "Quick"]
  selectedExercise = "Beginner"
  values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60]
  long : {
    squeeze : 0,
    rest : 0,
    reps : 0
  }
  longSqueezeValue = 0
  longRestValue = 0
  longRepsValue = 0
  shortSqueezeValue = 0
  shortRestValue = 0
  shortRepsValue = 0
  rkSqueezeValue = 0
  rkRestValue = 0
  rkRepsValue = 0

  changeExercise(name){
    this.selectedExercise = name;
  }

  // changeValue(interval, type, value){
  //   if(interval == "long"){
  //     this.long[type] = value;
  //   }

  //   console.log(interval, type, value)
  //   console.log(this.long);
    
    
  // }

  longSqueezeValueChange(value){
    // this._configServ.longSqueezeValue.next(this.longSqueezeValue);
    // switch (value){
    //   case this.longSqueezeValue : this.longSqueezeValue = value; break;
    // }
    this.longSqueezeValue = value
    // console.log("value",this.longSqueezeValue);
    
    this._configServ.longSqueezeValue.next(this.longSqueezeValue);
    // this._configServ.longSqueezeValue.subscribe(console.log);
    
  }

  longRestValueChange(value){
    this.longRestValue = value;

    this._configServ.longRestValue.next(this.longRestValue);
  }

  longRepsValueChange(value){
    this.longRepsValue = value;

    this._configServ.longRepsValue.next(this.longRepsValue);
  }

  shortSqueezeValueChange(value){
    this.shortSqueezeValue = value;

    this._configServ.shortSqueezeValue.next(this.shortSqueezeValue);
  }

  shortRestValueChange(value){
    this.shortRestValue = value;

    this._configServ.shortRestValue.next(this.shortRestValue);
  }

  shortRepsValueChange(value){
    this.shortRepsValue = value;

    this._configServ.shortRepsValue.next(this.shortRepsValue);
  }

  rkSqueezeValueChange(value){
    this.rkSqueezeValue = value;

    this._configServ.rkSqueezeValue.next(this.rkSqueezeValue);
  }

  rkRestValueChange(value){
    this.rkRestValue = value;

    this._configServ.rkRestValue.next(this.rkRestValue);
  }

  rkRepsValueChange(value){
    this.rkRepsValue = value;

    this._configServ.rkRepsValue.next(this.rkRepsValue);
  }

  constructor(private _headerServ : HeaderService, private _configServ : ConfigurationService) { }

  ngOnInit(): void {
    new SlimSelect({
      select : "single"
    });
  }

}
