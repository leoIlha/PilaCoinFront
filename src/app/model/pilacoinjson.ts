import { DatePipe } from '@angular/common';
import {Transacao} from "./transacao";

export class PilaCoinJson {
  id!: number| undefined;
  dataCriacao!: Date| undefined;
  chaveCriador!: Uint8Array| undefined;
  nomeCriador!: string| undefined;
  status!: string| undefined;
  nonce!: string| undefined;
  transacoes!: Transacao[];
}
