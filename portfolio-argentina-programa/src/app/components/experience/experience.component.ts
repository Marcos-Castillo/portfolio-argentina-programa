import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experiencia?:Experiencia[];
  editExperiencia?:Experiencia;
  deleteExperiencia?:Experiencia;
  id_persona!: Number;

  constructor(
    private experienciaService:ExperienciaService
    ) {}

  ngOnInit(): void {
    this.verExperiencia();
  }

  
  public verExperiencia(): void {
    this.experienciaService.verExperiencias().subscribe(
      (response: Experiencia[]) => {
        this.experiencia=response;
        response.map(exp=>{
          this.id_persona=exp.id_persona;
        });
      },
      (error:HttpErrorResponse) => {
        console.log(error)
      }
    );
  }

  public borrarExperiencia(): void {
    
    let idBorrar: Number=this.deleteExperiencia?.id|| 0;
    this.experienciaService.borrarExperiencia(idBorrar).subscribe(
      (response) => {
        console.log(response);
        this.verExperiencia();
      },
      (error:HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public agregarExperiencia(addForm: NgForm): void {
    document.getElementById('add--form')?.click();
    this.experienciaService.crearExperiencia(addForm.value).subscribe(
      (response: Experiencia) => {
        console.log(response);
        this.verExperiencia();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public editarExperiencia(experiencia: Experiencia): void {
    this.experienciaService.editarExperiencia(experiencia).subscribe(
      (response: Experiencia) => {
        console.log(response);
        this.verExperiencia();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(experiencia?: Experiencia, mode?: string): void {
    const contenedor = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addExperienciaModal');
    }
    if (mode === 'edit') {
      this.editExperiencia = experiencia;
      button.setAttribute('data-bs-target', '#experienciaModal');
    }
    if (mode === 'delete') {
      this.deleteExperiencia = experiencia;
      button.setAttribute('data-bs-target', '#deleteExperienciaModal');
    }
    contenedor?.appendChild(button);
    button.click();
  }
}
