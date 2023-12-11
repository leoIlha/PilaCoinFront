import { Component, OnInit } from '@angular/core';
import {PilaCoinJson} from "../../model/pilacoinjson";
import {Usuario} from "../../model/usuario";
import {Transferencia} from "../../model/transferencia";
import {CarteiraService} from "./carteira.service";
import {Bloco} from "../../model/bloco";

@Component({
  selector: 'app-carteira',
  templateUrl: './carteira.component.html',
  styleUrls: ['./carteira.component.css']
})
export class CarteiraComponent implements OnInit {

  pila: PilaCoinJson = new PilaCoinJson;
  pilas: PilaCoinJson[] = [];

  blocos: Bloco[] = [];

  primeirosPilasMineradas: PilaCoinJson[] = [];

  usuario: Usuario = new Usuario();
  usuarios: Usuario[] = [];

  transferencia: Transferencia = new Transferencia();
  constructor(private service:CarteiraService) { }

  ngOnInit(): void {
    this.atualizar();
  }

  atualizar() {
    this.service.getUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios;
  })
    this.service.getPilas().subscribe((pilas) => {
      this.pilas = pilas;
      this.primeirosPilasMineradas = this.pilas.slice(0, 10);
    })
    this.service.getBlocos().subscribe((blocos) => {
      this.blocos = blocos;
    })
  }

  transferirPila() {
    const usuarioEncontrado = this.usuarios.find(u => u.nome === this.usuario.nome);
    const pilaEncontrado = this.pilas.find(p => p.id == this.pila.id);
    // Verifique se o usuário foi encontrado
    if (usuarioEncontrado && pilaEncontrado) {
      this.transferencia.chaveUsuarioOrigem = pilaEncontrado.chaveCriador;
      this.transferencia.chaveUsuarioDestino = usuarioEncontrado.chavePublica;
      this.transferencia.nomeUsuarioOrigem = pilaEncontrado.nomeCriador;
      this.transferencia.nomeUsuarioDestino = usuarioEncontrado.nome;
      this.transferencia.noncePila = pilaEncontrado.nonce;
      this.service.transferirPila(this.transferencia).subscribe(() => {
        this.atualizar();
        alert("Pila transferido")
      })
    }
    // this.service.transferirPila(this.transferencia).subscribe(() => {
    //   alert("Pila transferido")
    // })
  }

  atualizarDados() {
    this.service.atualizarDados().subscribe(( )=> {
      this.atualizar();
      alert("Dados atualizados")
    })
  }
}
