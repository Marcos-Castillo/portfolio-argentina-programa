import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiServerUrl =environment.apiBaseUrl;
   
  constructor(private http: HttpClient) { }

  public verProyectos():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(`${this.apiServerUrl}/ver/proyecto`);
  }

  public buscarProyecto(idProyecto:number):Observable<Proyecto>{
    return this.http.get<Proyecto>(`${this.apiServerUrl}/ver/proyecto/${idProyecto}`);
  }

  public crearProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.post<Proyecto>(`${this.apiServerUrl}/agregar/proyecto`,proyecto);
  }

  public editarProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.http.put<Proyecto>(`${this.apiServerUrl}/editar/proyecto`, proyecto);
  }

  public borrarProyecto(idProyecto:Number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/eliminar/proyecto/${idProyecto}`);
  }
}

