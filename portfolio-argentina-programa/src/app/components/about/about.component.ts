import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
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

  constructor(
    private personaService:PersonaService
    ) {}

  ngOnInit(): void {
    this.verPersona();
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
    document.getElementById('add-employee-form')?.click();
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
