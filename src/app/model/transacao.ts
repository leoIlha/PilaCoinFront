export class Transacao {
  chaveUsuarioOrige!: string| undefined;
  chaveUsuarioDestino!: string| undefined;
  assinatura!: string| undefined;
  noncePila!: string| undefined;
  dataTransacao!: Date| undefined;
  id!: number| undefined;
  status!: string| undefined;
}
