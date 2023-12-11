import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Transferencia} from "../../model/transferencia";
import {Usuario} from "../../model/usuario";
import {PilaCoinJson} from "../../model/pilacoinjson";
import {Bloco} from "../../model/bloco";

@Injectable({
  providedIn: 'root'
})
export class CarteiraService {

  private readonly API_BACK = "http://localhost:8080/carteira"
  constructor(private http: HttpClient) {}

  transferirPila(tranferencia: Transferencia): Observable<Transferencia>{
    return this.http.post<Transferencia>(this.API_BACK+'/transferir', tranferencia);
  }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.API_BACK+'/usuarios');
  }

  getPilas(): Observable<PilaCoinJson[]>{
    return this.http.get<PilaCoinJson[]>(this.API_BACK+'/pilas');
  }

  getBlocos(): Observable<Bloco[]>{
    return this.http.get<Bloco[]>(this.API_BACK+'/blocos');
  }

  atualizarDados(): Observable<number> {
    return this.http.get<number>("http://localhost:8080/dados/atualizar");
  }

}
