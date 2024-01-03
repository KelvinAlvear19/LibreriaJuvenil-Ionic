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
export class LibroPruebaService {
  private API = "http://localhost:4200/api/libros/"
  constructor(private http:HttpClient) { }
  obtenerLibros1():Observable<any>{
    return this.http.get(this.API);
    
  }
  obtenerLibro1(id:string):Observable<any>{
    return this.http.get(`${this.API}/${id}`)
  }
  insertarLibro1(id:string,titulo:string,genero:string,descripcion:string,autor:string,urlI:string){
    return this.http.post(this.API,{
      id, titulo, genero,descripcion,autor,urlI
    })
  }
  actualizarLibro1(libro:{
    id:string;
    titulo:string;
    genero:string;
    descripcion:string;
    autor:string;
    urlI:string;
    }){
    return this.http.put(`${this.API}/${libro.id}`,libro)
      
    }
    createLibro1(libro: {
      id:string;
      titulo:string;
      genero:string;
      descripcion:string;
      autor:string;
     urlI:string;
    }) {
      return this.http.post(this.API, libro);
    }
  
  eliminarLibro1(id:string){
    return this.http.delete(`${this.API}/${id}`)
  }
}
