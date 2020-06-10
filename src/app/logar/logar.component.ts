import { Cadastro } from './cadastro.model';
import { LogarService } from './../logar.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {

  usuario: Cadastro ={
    nome: '',
    email: '',
    confirmemail: '',
    senha: ''
  }

  usuarioget: Cadastro[]

  constructor(private logarService : LogarService,
    private router : Router) { }

  ngOnInit(): void {
   this.logarService.readusers().subscribe(usuarioget =>
    {
     this.usuarioget = usuarioget
     console.log(usuarioget)
    })
  }

  usercriado():void{
    if(this.usuario.email == this.usuario.confirmemail){
      this.logarService.createuser(this.usuario).subscribe(()=>{
        console.log("Funcionou!")
        this.router.navigate(['PLAYLIST'])
      })
    }else{
      console.log("E-mail errado")
    }
    }

}
