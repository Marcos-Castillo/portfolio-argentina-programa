import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private apiServerUrl =environment.apiBaseUrl;

   
  constructor(private http: HttpClient) { }

  public verEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/ver/educacion`); ///ver/educacion
  }

  public buscarEducacion(idEducacion:Number):Observable<Educacion>{
    return this.http.get<Educacion>(`${this.apiServerUrl}/ver/educacion/${idEducacion}`);
  }

  public crearEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiServerUrl}/agregar/educacion`,educacion);
  }

  public editarEducacion(educacion:Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/editar/educacion`, educacion);
  }

  public borrarEducacion(idEducacion:Number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/eliminar/educacion/${idEducacion}`);
  }
}