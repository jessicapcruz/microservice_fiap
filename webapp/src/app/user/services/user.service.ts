import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';
import { customHeaders } from '../../shared/configs/http-header-config';
import { UserAddRequest } from '../models/request/user-add-request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }

  register(request:UserAddRequest){
    const url = `${environment.apiHost}/api/user/register`;
    return this.http.post(url, request, { headers: customHeaders });
  }

  recover(email: string) {
    const request = { email : email};
    const url = `${environment.apiHost}/api/recover/password`;
    return this.http.post(url, request, { headers: customHeaders });
  }
}
