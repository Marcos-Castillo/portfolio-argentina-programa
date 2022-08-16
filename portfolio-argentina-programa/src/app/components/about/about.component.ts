import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Persona } from 'src/app/model/persona';
import { AuthService } from 'src/app/service/auth.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  personas?: Persona[];
  persona?:Persona;
  editPersona?:Persona;
  deletePersona?:Persona;

  logueado: boolean = false;
  currentUser = JSON.parse('{}');
  nombreUsuario = '';
  

  constructor(
    private personaService:PersonaService,
    private authService: AuthService
    ) {}

  ngOnInit(): void {
    this.verPersona();
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

  
  public verPersona(): void {
    this.personaService.verPersonas().subscribe(
      (response: Persona[]) => {
        this.personas=response;
        response.map(pers=>{
          this.persona=pers
        });
      },
      (error:HttpErrorResponse) => {
        console.log(error)
      }
    );
  }

  public borrarPersona(): void {
    
    let idBorrar: Number=this.deletePersona?.id|| 0;
    this.personaService.borrarPersona(idBorrar).subscribe(
      (response) => {
        console.log(response);
        this.verPersona();
      },
      (error:HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public agregarPersona(addForm: NgForm): void {
    document.getElementById('add--form')?.click();
    this.personaService.crearPersona(addForm.value).subscribe(
      (response: Persona) => {
        console.log(response);
        this.verPersona();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public editarPersona(persona: Persona): void {
    this.personaService.editarPersona(persona).subscribe(
      (response: Persona) => {
        console.log(response);
        this.verPersona();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(persona?: Persona, mode?: string): void {
    const contenedor = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addEducationModal');
    }
    if (mode === 'edit') {
      this.editPersona = persona;
      button.setAttribute('data-bs-target', '#educationModal');
    }
    if (mode === 'delete') {
      this.deletePersona = persona;
      button.setAttribute('data-bs-target', '#deletePersonaModal');
    }
    contenedor?.appendChild(button);
    button.click();
  }
}
