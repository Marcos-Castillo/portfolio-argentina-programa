import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, map, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
    url="";
    currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient ) { 
   console.log("auth en ejecucion");
    this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currenUser')||'{}'));

  }
 iniciarSesion(credenciales:any):Observable<any>{
  return this.http.post(this.url,credenciales).pipe(map(data=>{
    sessionStorage.setItem('currentUser', JSON.stringify(data));
    return data;
  }))
 }
 
}
