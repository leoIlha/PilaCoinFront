export class Transferencia {
  chaveUsuarioOrigem!: Uint8Array | undefined;
  chaveUsuarioDestino!: Uint8Array| undefined;
  nomeUsuarioOrigem!: string| undefined;
  nomeUsuarioDestino!: string| undefined;
  assinatura!: Uint8Array| undefined;
  noncePila!: string| undefined;
  dataTransacao!: Date| undefined;
  id!: number| undefined;
  status!: string| undefined;
}
