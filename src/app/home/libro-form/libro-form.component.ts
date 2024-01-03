import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { identity } from 'rxjs';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libro-form',
  templateUrl: './libro-form.component.html',
  styleUrls: ['./libro-form.component.scss'],
})
export class LibroFormComponent implements OnInit {

  constructor(private servicio:LibrosService,private router:Router) { }

  ngOnInit() {}
  registrarLibro(id, titulo, genero,descripcion,autor,urlI) {
    let send = { 
      id: id.value,
      titulo: titulo.value,
      genero:genero.value,
      descripcion:descripcion.value,
      autor:autor.value,
      urlI:urlI.value
    }
    console.log(send)
    this.servicio.createLibro(send).subscribe(
      (res) => {
        this.router.navigate(['/home']);
      },
      (error) => console.log(error)
    );
  }
}

