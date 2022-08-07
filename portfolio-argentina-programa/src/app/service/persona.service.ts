import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiServerUrl =environment.apiBaseUrl;
   
  constructor(private http: HttpClient) { }

  public verPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(`${this.apiServerUrl}/ver/persona`);
  }

  public buscarPersona(idPersona:number):Observable<Persona>{
    return this.http.get<Persona>(`${this.apiServerUrl}/ver/persona/${idPersona}`);
  }

  public crearPersona(persona:Persona):Observable<Persona>{
    return this.http.post<Persona>(`${this.apiServerUrl}/agregar/persona`,persona);
  }

  public editarPersona(persona:Persona):Observable<Persona>{
    return this.http.put<Persona>(`${this.apiServerUrl}/editar/persona`, persona);
  }

  public borrarPersona(idPersona:Number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/eliminar/persona/${idPersona}`);
  }
}

