import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private servicio:LoginService,private router:Router,private toast:ToastController) { }

  ngOnInit() {}
  login(email,password){
    this.servicio.login(email,password).subscribe(
      res=>{console.log(res)
        if(res.token){
          localStorage.setItem("token",res.token)
          this.router.navigate(['home'])
        }else{
          this.presentToast();
        }
      },err=>{
        

      })
  }
  async presentToast(){
    const toast = await this.toast.create({
      message:"Datos incorrectos",
      duration:2000
    });
    toast.present();
  }
}
