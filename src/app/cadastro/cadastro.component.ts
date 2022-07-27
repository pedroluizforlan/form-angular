import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar(form : any){
    if(form.valid){
      this.router.navigate(['sucesso']);
      console.log('Formulário enviado');
      console.log(form);
    }else{
      console.log('Formulário inválido');
      console.log(form);

    }
  }

}
