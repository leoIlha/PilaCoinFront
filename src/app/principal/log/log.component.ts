import {Component, OnDestroy, OnInit} from '@angular/core';
import {LogService} from "./log.service";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit, OnDestroy {

  logMineracaoPila: string[] = [];
  logMineracaoBloco: string[] = [];
  logValidacaoPila: string[] = [];
  logValidacaoBloco: string[] = [];
  logMensagens: string[] = [];

  private subscription: Subscription = new Subscription();

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.atualizarLogs();
    this.subscription = interval(5000).subscribe(() => {
      this.atualizarLogs();
    });
  }

  private atualizarLogs(): void {
    this.logService.getLogMineracaoPila().subscribe(logs => {
      this.logMineracaoPila = logs;
    });

    this.logService.getLogMineracaoBloco().subscribe(logs => {
      this.logMineracaoBloco = logs;
    });

    this.logService.getLogValidacaoPila().subscribe(logs => {
      this.logValidacaoPila = logs;
    });

    this.logService.getLogValidacaoBloco().subscribe(logs => {
      this.logValidacaoBloco = logs;
    });

    this.logService.getLogMensagens().subscribe(logs => {
      this.logMensagens = logs;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe(); // Cancela a subscrição ao destruir o componente
  }

}
