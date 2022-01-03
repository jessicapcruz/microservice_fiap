import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { customHeaders } from '../../shared/configs/http-header-config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticate(username:string, password:string){
    const url = `${environment.apiHost}/api/auth/login`;
    const request = {username: username, password: password};
    return this.http.post(url, request, { headers: customHeaders });
  }

  isValid(){
    return true;
  }
}
