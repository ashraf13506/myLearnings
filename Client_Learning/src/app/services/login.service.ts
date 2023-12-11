import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { credentialType } from '../model_objects/credential-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginUser(credentials:credentialType)
  {
    const url=environment.baseUrl+'/login';
    return this.http.post(url,credentials)

  }
}
