import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  private apiServerUrl =environment.apiBaseUrl;
   
  constructor(private http: HttpClient) { }

  public verExperiencias():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/ver/experiencia`);
  }

  public buscarExperiencia(idExperiencia:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(`${this.apiServerUrl}/ver/experiencia/${idExperiencia}`);
  }

  public crearExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServerUrl}/agregar/experiencia`,experiencia);
  }

  public editarExperiencia(experiencia:Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.apiServerUrl}/editar/experiencia`, experiencia);
  }

  public borrarExperiencia(idExperiencia:Number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/eliminar/experiencia/${idExperiencia}`);
  }
}
