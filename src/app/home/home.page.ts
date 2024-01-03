import { Component, OnInit } from '@angular/core';
import { LibrosService,Libros } from '../services/libros.service';
import { AlertController } from '@ionic/angular';
import { LibroPruebaService } from '../services/libro-prueba.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  libros: Libros[];
  constructor(private libroservice:LibroPruebaService, private alertController:AlertController) { }

  ngOnInit() {
    this.libroservice.obtenerLibros1().subscribe(response =>{
      console.log("aqui")
    })
  }

  ionViewWillEnter(){
    this.cargarLibros()
    console.log("aqui2")
  }
  cargarLibros(){
    this.libroservice.obtenerLibros1().subscribe(Response =>{
      this.libros = Response
      console.log(Response)
    },err=> console.log(err))
  }
  async eliminarLibro(id: string) {
    const alert = await this.alertController.create({
      header: 'Eliminar Libro',
      message: 'Seguro que desea elminar el Libro',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.libroservice.eliminarLibro1(id).subscribe((res) => {
              this.cargarLibros();
            });
          },
        },
        'Cancelar'
      ],
    });
    alert.present()
  }
}
