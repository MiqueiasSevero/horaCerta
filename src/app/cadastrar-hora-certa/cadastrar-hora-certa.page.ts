import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormControlName, Validators, FormGroup, FormControl} from '@angular/forms';
import {Storage} from '@ionic/storage'

@Component({
  selector: 'app-cadastrar-hora-certa',
  templateUrl: './cadastrar-hora-certa.page.html',
  styleUrls: ['./cadastrar-hora-certa.page.scss'],
})
export class CadastrarHoraCertaPage implements OnInit {
  formCadHoraCerta =  new FormGroup({
    data: new FormControl('', Validators.required),
    hora: new FormControl('', Validators.required),
    falarTexto: new FormControl('', Validators.required),
    cor : new FormControl('', Validators.required)
  });

  


  constructor( private storage:Storage ) {
    /*this.formulario = this.formBuilder.group({
        data: new FormControl('', Validators.required),
        hora:''
    });*/

   }

  ngOnInit() {
  }

  formataZerosEsquerdas(valor:number){
    return valor > 10 ? valor :"0" +valor;
  }

  cadastrarHoraCerta(){

    

    
    let form = this.formCadHoraCerta.value;
    form.status = 0;
    
    let dataCompleta =  new Date(form.data), horaCompleta =  new Date(form.hora);


    let dia = this.formataZerosEsquerdas(dataCompleta.getDate()),
        mes = this.formataZerosEsquerdas(dataCompleta.getMonth() + 1 ),
        ano = this.formataZerosEsquerdas(dataCompleta.getFullYear()),
        hora = this.formataZerosEsquerdas(horaCompleta.getHours()),
        minutos = this.formataZerosEsquerdas(horaCompleta.getMinutes());


        form.data = `${dia} / ${mes} / ${ano}`;
        form.hora = `${hora}:${minutos}`;
        console.log( form);







    let listaHoraCerta = [form];

  this.storage.get('listaHoraCerta').then((value:any) => {
    if (value !== null || value !== undefined) {
      let objeto = JSON.parse(value);
      listaHoraCerta = listaHoraCerta.concat(objeto);
    }
       this.storage.set('listaHoraCerta', JSON.stringify(listaHoraCerta));
    });
  
  this.formCadHoraCerta.reset();
  
  
  
    

  }

}
