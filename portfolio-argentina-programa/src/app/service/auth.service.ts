import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = environment.apiBaseUrl + '/auth/login';
  currentUserSubject: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    console.log('auth en ejecucion');
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
  }
  iniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(this.url, credenciales).pipe(
      map((data) => {
        sessionStorage.setItem('currentUser', JSON.stringify(data));
        this.currentUserSubject.next(data);
        return data;
      })
    );
  }

  get UsuarioAutenticado() {
    return this.currentUserSubject.value;
  }
}
