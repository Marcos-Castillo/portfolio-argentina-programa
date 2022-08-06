import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from './model/persona';
import { PersonaService } from './service/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'portfolio-argentina-programa';
  public personas: Persona[] = [];
  constructor(private personaService: PersonaService) {} 

  ngOnInit(): void {
      this.verPersonas();
  }

  public verPersonas(): void {
    this.personaService.verPersonas().subscribe(
      (response: Persona[]) => {
        this.personas = response;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }
}
