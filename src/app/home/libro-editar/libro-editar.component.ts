import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Libros, LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libro-editar',
  templateUrl: './libro-editar.component.html',
  styleUrls: ['./libro-editar.component.scss'],
})
export class LibroEditarComponent implements OnInit {
  libro:Libros = {
    id:"1",
    titulo:"",
    genero:"",
    descripcion:"",
    autor:"",
    urlI:"https://educoencasa.com/wp-content/themes/fox/images/placeholder.jpg"
  }
  constructor(private service:LibrosService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.obtenerLibro(id).subscribe((res)=>{
    this.libro = res.data;
  })
  
  }
  editarLibro(id, titulo, genero,descripcion,autor,urlI) {
    let send = { 
      id: id.value,
      titulo: titulo.value,
      genero:genero.value,
      descripcion:descripcion.value,
      autor:autor.value,
      urlI:urlI.value
    }
    console.log(send)
    this.service.actualizarLibro(send).subscribe(
      (res) => {
        this.router.navigate(['/home']);
      },
      (error) => console.log(error)
    );
  }
  
  
}
