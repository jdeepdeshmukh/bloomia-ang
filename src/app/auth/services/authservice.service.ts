import { Injectable } from '@angular/core';
import { HttpserviceService } from 'src/app/services/httpservice.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private _httpServices: HttpserviceService) { }
  
  login(obj){
    return this._httpServices.post(environment.serverUrl, obj);
  }
  signup(obj){
    return this._httpServices.post(environment.serverUrl, obj);
  }
}

