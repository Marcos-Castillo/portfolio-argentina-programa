import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
 

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educacion?: Educacion[];
  editEducacion?:Educacion;
  deleteEducacion?:Educacion;
  id_persona!: Number;

  constructor(
    private educacionService:EducacionService
    ) {}

  ngOnInit(): void {
    this.verEducacion();
  }

  
  public verEducacion(): void {
    this.educacionService.verEducacion().subscribe(
      (response: Educacion[]) => {
        this.educacion=response;
        response.map(edu=>{
          this.id_persona=edu.id_persona;
        });
      },
      (error:HttpErrorResponse) => {
        console.log(error)
      }
    );
  }

  public borrarEducacion(): void {
    
    let idBorrar: Number=this.deleteEducacion?.id|| 0;
    this.educacionService.borrarEducacion(idBorrar).subscribe(
      (response) => {
        console.log(response);
        this.verEducacion();
      },
      (error:HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public agregarEducacion(addForm: NgForm): void {
    document.getElementById('add--form')?.click();
    this.educacionService.crearEducacion(addForm.value).subscribe(
      (response: Educacion) => {
        console.log(response);
        this.verEducacion();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public editarEducacion(educacion: Educacion): void {
    this.educacionService.editarEducacion(educacion).subscribe(
      (response: Educacion) => {
        console.log(response);
        this.verEducacion();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(educacion?: Educacion, mode?: string): void {
    const contenedor = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addEducationModal');
    }
    if (mode === 'edit') {
      this.editEducacion = educacion;
      button.setAttribute('data-bs-target', '#educationModal');
    }
    if (mode === 'delete') {
      this.deleteEducacion = educacion;
      button.setAttribute('data-bs-target', '#deleteEducacionModal');
    }
    contenedor?.appendChild(button);
    button.click();
  }
}
