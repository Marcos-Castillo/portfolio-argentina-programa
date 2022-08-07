import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private apiServerUrl =environment.apiBaseUrl;
   
  constructor(private http: HttpClient) { }

  public verSkills():Observable<Skill[]>{
    return this.http.get<Skill[]>(`${this.apiServerUrl}/ver/skill`);
  }

  public buscarSkill(idSkill:number):Observable<Skill>{
    return this.http.get<Skill>(`${this.apiServerUrl}/ver/skill/${idSkill}`);
  }

  public crearSkill(skill:Skill):Observable<Skill>{
    return this.http.post<Skill>(`${this.apiServerUrl}/agregar/skill`,skill);
  }

  public editarSkill(skill:Skill):Observable<Skill>{
    return this.http.put<Skill>(`${this.apiServerUrl}/editar/skill`, skill);
  }

  public borrarSkill(idSkill:Number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/eliminar/skill/${idSkill}`);
  }
}

