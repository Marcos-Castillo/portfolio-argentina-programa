import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}
  logueado: boolean = false;
  currentUser = JSON.parse('{}');
  nombreUsuario = '';

  ngOnInit(): void {
    this.verificarLogin();
  }

  verificarLogin(): void {
    this.currentUser = JSON.parse(
      sessionStorage.getItem('currentUser') || '{}'
    );
    if (this.currentUser.nombreUsuario) {
      this.nombreUsuario = this.currentUser.nombreUsuario;
      this.logueado = true;
    }
  }

  logout(): void {
    sessionStorage.setItem('currentUser', '{}');
    this.authService.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(sessionStorage.getItem('currentUser') || '{}')
    );
    this.verificarLogin();
    console.log('sesion finalizada');
  }
}
