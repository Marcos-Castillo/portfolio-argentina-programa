import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {
  personas?: Persona[];
  persona?:Persona;

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

}
