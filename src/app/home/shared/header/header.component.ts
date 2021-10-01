import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/home/services/header.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name : string;
  router : boolean;

  constructor(private _headerServ : HeaderService, private _router : Router) {
     this._headerServ.subject.subscribe(name=>{
       this.name = name
     });
     
     if(this._router.url == "/home"){
       this.router = false;
     }
     
   }

  ngOnInit(): void {
  }

}
