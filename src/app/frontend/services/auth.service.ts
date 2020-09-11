import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { Observable  } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    login(username, password) : Observable<any>{
      return this.http.post('http://148.76.75.204:8032/jobs_api/signin/',{username:username,password:password}).pipe(map((res)=>{
        // return res;
        console.log(res);
        console.log("123==");
      }))
    }
  
}
