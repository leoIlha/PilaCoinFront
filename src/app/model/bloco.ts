import {Transacao} from "./transacao";

export class Bloco {
  numeroBloco!: number;
  nonceBlocoAnterior!: string;
  nonce!: string;
  chaveUsuarioMinerador!: number[];
  nomeUsuarioMinerador!: string;
  transacoes!: Transacao[];
}
