import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Libros{
  id:string;
  titulo:string;
  genero:string;
  descripcion:string;
  autor:string;
  urlI:string;
}
@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private API = "http://localhost:4200/api/libros/"
  constructor(private http:HttpClient) { }
  obtenerLibros():Observable<any>{
    return this.http.get(this.API);
    
  }
  obtenerLibro(id:string):Observable<any>{
    return this.http.get(`${this.API}/${id}`)
  }
  insertarLibro(id:string,titulo:string,genero:string,descripcion:string,autor:string,urlI:string){
    return this.http.post(this.API,{
      id, titulo, genero,descripcion,autor,urlI
    })
  }
  actualizarLibro(libro:{
    id:string;
    titulo:string;
    genero:string;
    descripcion:string;
    autor:string;
    urlI:string;
    }){
    return this.http.put(`${this.API}/${libro.id}`,libro)
      
    }
    createLibro(libro: {
      id:string;
      titulo:string;
      genero:string;
      descripcion:string;
      autor:string;
     urlI:string;
    }) {
      return this.http.post(this.API, libro);
    }
  
  eliminarLibro(id:string){
    return this.http.delete(`${this.API}/${id}`)
  }
}
