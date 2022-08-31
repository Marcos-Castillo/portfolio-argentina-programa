import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';


@Component({
  selector: 'app-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.css'],
})
export class AbilitiesComponent implements OnInit {
  @Input('skillList') skills?:Skill[];

  editSkill?:Skill;
  deleteSkill?:Skill;
  id_persona!: Number;

  constructor(
    private skillService:SkillService
    ) {}

  ngOnInit(): void {
    this.verSkill();
  }

  
  public verSkill(): void {
    this.skillService.verSkills().subscribe(
      (response: Skill[]) => {
        this.skills=response;
        response.map(aux=>{
          this.id_persona = aux.id_persona;
        });
       
      },
      (error:HttpErrorResponse) => {
        console.log(error)
      }
    );
  }

  public borrarSkill(): void {
    
    let idBorrar: Number=this.deleteSkill?.id|| 0;
    this.skillService.borrarSkill(idBorrar).subscribe(
      (response) => {
        console.log(response);
        this.verSkill();
      },
      (error:HttpErrorResponse) => {
        alert(error.message)
      }
    );
  }

  public agregarSkill(addForm: NgForm): void {
    document.getElementById('add--form')?.click();
    this.skillService.crearSkill(addForm.value).subscribe(
      (response: Skill) => {
        console.log(response);
        addForm.reset();
        this.verSkill();
        addForm.controls['id_persona'].setValue(this.id_persona);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
        addForm.controls['id_persona'].setValue(this.id_persona);
      }
    );
  }

  public editarSkill(skill: Skill): void {
    this.skillService.editarSkill(skill).subscribe(
      (response: Skill) => {
        console.log(response);
        this.verSkill();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(skill?: Skill, mode?: string): void {
    const contenedor = document.getElementById('skill-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-bs-target', '#addSkillModal');
    }
    if (mode === 'edit') {
      this.editSkill = skill;
      button.setAttribute('data-bs-target', '#skillModal');
    }
    if (mode === 'delete') {
      this.deleteSkill = skill;
      button.setAttribute('data-bs-target', '#deleteSkillModal');
    }
    contenedor?.appendChild(button);
    button.click();
  }
}
