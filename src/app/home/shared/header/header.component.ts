import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/home/services/header.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name : string;

  constructor(private _headerServ : HeaderService, public _router : Router, private _cookieServ : CookieService,
    private _userServ : UserService) {
     this._headerServ.subject.subscribe(name=>{
       this.name = name
     });
   }

   logout(){
    this._cookieServ.delete("user");
   }

  ngOnInit(): void {
    this._userServ.getUser().subscribe((result)=>{
  document.getElementById("avatarImage").setAttribute("src", "https://bloomia.herokuapp.com/"+String(result.result.data.profileImage))
});
  }

}
