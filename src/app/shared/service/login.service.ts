import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../model/ResponseLogin.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  response!: ResponseLogin

  apiurl = "https://automationedgeapp.herokuapp.com/restapi/login";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    body: ''
  };
  
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin'
    })
  };

  constructor(
    private httpClient: HttpClient
) {} 

  public getLogin(usuario: string, senha: string, portal: string):Observable<any>{
    return this.httpClient.post<ResponseLogin>(this.apiurl + '?usuario=' + usuario + '&senha=' +senha + '&portal=' + portal,'',this._httpOptions )
  }
}
