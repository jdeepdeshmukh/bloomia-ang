import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from 'src/app/home/services/configuration.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  longSqueezeValue: number;
  longRestValue = 0
  longRepsValue = 0
  shortSqueezeValue = 0
  shortRestValue = 0
  shortRepsValue = 0
  rkSqueezeValue = 0
  rkRestValue = 0
  rkRepsValue = 0

  constructor(private _configServ : ConfigurationService) {
    this._configServ.longSqueezeValue.subscribe(value=>{
      this.longSqueezeValue = value
    })
    this._configServ.longRestValue.subscribe(value=>{
      this.longRestValue = value
    })
    this._configServ.longRepsValue.subscribe(value=>{
      this.longRepsValue = value
    })
    this._configServ.shortSqueezeValue.subscribe(value=>{
      this.shortSqueezeValue = value
    })
    this._configServ.shortRestValue.subscribe(value=>{
      this.shortRestValue = value
    })
    this._configServ.shortRepsValue.subscribe(value=>{
      this.shortRepsValue = value
    })
    this._configServ.rkSqueezeValue.subscribe(value=>{
      this.rkSqueezeValue = value
    })
    this._configServ.rkRestValue.subscribe(value=>{
      this.rkRestValue = value
    })
    this._configServ.rkRepsValue.subscribe(value=>{
      this.rkRepsValue = value
    })
   }

  ngOnInit(): void {
  }

}
