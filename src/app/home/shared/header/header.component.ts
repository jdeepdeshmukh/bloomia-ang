import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/home/services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name : string;

  constructor(private _headerServ : HeaderService, public _router : Router) {
     this._headerServ.subject.subscribe(name=>{
       this.name = name
     });
   }

  ngOnInit(): void {
  }

}
