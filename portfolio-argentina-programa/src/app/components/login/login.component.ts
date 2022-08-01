import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private ruta: Router
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      deviceInfo: this.formBuilder.group({
        deviceId: ['17867868768'],
        deviceType: ['DEVICE_TYPE_ANDROID'],
        notificationToken: ['6765757eececc34'],
      }),
    });
  }

  ngOnInit(): void {}
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  onEnviar(event: Event) {
    event.preventDefault;
    this.authService.iniciarSesion(this.form.value).subscribe((data) => {
      console.log('data: ' + JSON.stringify(data));
      this.ruta.navigate(['/home']);
    });
  }
}
