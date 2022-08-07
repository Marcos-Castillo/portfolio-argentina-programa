import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  proyectos?:Proyecto[];
  editProyecto?:Proyecto;
  deleteProyecto?:Proyecto;
  id_persona!: Number;

  constructor(
    private proyectoService:ProyectoService
    ) {}

  ngOnInit(): void {
    this.verProyecto();
  }

  
  public verProyecto(): void {
    this.proyectoService.verProyectos().subscribe(
      (response: Proyecto[]) => {
        this.proyectos=response;
        response.map(edu=>{
          this.id_persona=edu.id_persona;
        });
      },
      (error:HttpErrorResponse) => {
        console.log(error)
      }
    );
  }

  public borrarProyecto(): void {
    
    let idBorrar: Number=this.deleteProyecto?.id|| 0;
    this.proyectoService.borrarProyecto(idBorrar).subscribe(
      (response) => {
        console.log(response);
        this.verProyecto();
      },
      (error:HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public agregarProyecto(addForm: NgForm): void {
    document.getElementById('add-employee-form')?.click();
    this.proyectoService.crearProyecto(addForm.value).subscribe(
      (response: Proyecto) => {
        console.log(response);
        this.verProyecto();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public editarProyecto(proyecto: Proyecto): void {
    this.proyectoService.editarProyecto(proyecto).subscribe(
      (response: Proyecto) => {
        console.log(response);
        this.verProyecto();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(proyecto?: Proyecto, mode?: string): void {
    const contenedor = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addProyectoModal');
    }
    if (mode === 'edit') {
      this.editProyecto = proyecto;
      button.setAttribute('data-bs-target', '#proyectoModal');
    }
    if (mode === 'delete') {
      this.deleteProyecto = proyecto;
      button.setAttribute('data-bs-target', '#deleteProyectoModal');
    }
    contenedor?.appendChild(button);
    button.click();
  }
}
