import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{


  constructor(private authService:AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  var currentUser = this.authService.UsuarioAutenticado;
  if(currentUser && currentUser.accessToken){
    req = req.clone({
      setHeaders:{
        Autorization: `Bearer ${currentUser.accessToken}`
      }

    })
  }
  console.log("Interceptor esta corriendo "+JSON.stringify(currentUser));
    return next.handle(req);   
  }
}
