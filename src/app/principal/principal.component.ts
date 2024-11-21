import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Aluno } from '../modelo/Aluno';
import { MediaPipe } from "../pipe/media.pipe";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MediaPipe],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  formulario = new FormGroup({
    nome : new FormControl('', [Validators.required]),
    primeiraNota : new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
    segundaNota : new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)])
  });

  btnCadastrar:boolean = true;

  listaAlunos:Aluno[] = [];

  indice:number = -1;

  ngOnInit(){

    let aluno1:Aluno = new Aluno();
    aluno1.nome = "Renato";
    aluno1.primeiraNota = 7;
    aluno1.segundaNota = 6;
    this.listaAlunos.push(aluno1);

    let aluno2:Aluno = new Aluno();
    aluno2.nome = "Jonathan";
    aluno2.primeiraNota = 9;
    aluno2.segundaNota = 7;
    this.listaAlunos.push(aluno2);

  }

  cadastrar(){

    this.listaAlunos.push(this.formulario.value as unknown as Aluno);

    this.formulario.reset(); // Limpar dos inputs

  }

  selecionar(indice:number){

    this.indice = indice;

    this.formulario.setValue({
      nome  : this.listaAlunos[indice].nome,
      primeiraNota : this.listaAlunos[indice].primeiraNota,
      segundaNota: this.listaAlunos[indice].segundaNota
    });

    this.btnCadastrar = false;

  }

  alterar(){

    this.listaAlunos[this.indice] = this.formulario.value as unknown as Aluno;

    this.formulario.reset(); // Limpar dos inputs

    this.btnCadastrar = true;

  }

  excluir(){

    this.listaAlunos.splice(this.indice, 1);

    this.formulario.reset(); // Limpar dos inputs

    this.btnCadastrar = true;

  }

  cancelar(){

    this.formulario.reset(); // Limpar dos inputs

    this.btnCadastrar = true;

  }

}
