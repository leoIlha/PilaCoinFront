import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Usuario} from "../../model/usuario";
import {PilaCoinJson} from "../../model/pilacoinjson";

@Injectable({
  providedIn: 'root'
})
export class LogService {

  private readonly API_BACK = "http://localhost:8080/log"
  constructor(private http: HttpClient) {}

  getLogMineracaoPila(): Observable<string[]>{
    return this.http.get<string[]>(this.API_BACK+'/logMineracaoPila');
  }

  getLogMineracaoBloco(): Observable<string[]>{
    return this.http.get<string[]>(this.API_BACK+'/logMineracaoBloco');
  }

  getLogValidacaoPila(): Observable<string[]>{
    return this.http.get<string[]>(this.API_BACK+'/logValidacaoPila');
  }

  getLogValidacaoBloco(): Observable<string[]>{
    return this.http.get<string[]>(this.API_BACK+'/logValidacaoBloco');
  }

  getLogMensagens(): Observable<string[]>{
    return this.http.get<string[]>(this.API_BACK+'/logMensagens');
  }
}
