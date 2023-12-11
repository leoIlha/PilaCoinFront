import { LivrosComponent } from './principal/livros/livros.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {FuncionariosComponent} from "./principal/funcionarios/funcionarios.component";
import {PrincipalComponent} from "./principal/principal.component";
import {HomeComponent} from "./home/home.component";
import {AuthGuardService} from "./security/auth-guard.service";
import { ClienteComponent } from './principal/cliente/cliente.component';
import { CarrinhoComponent } from './principal/carrinho/carrinho.component';
import {RelatoriosComponent} from "./principal/relatorios/relatorios.component";
import {LogComponent} from "./principal/log/log.component";
import {CarteiraComponent} from "./principal/carteira/carteira.component";

const routes: Routes = [
  { path: '', redirectTo: 'principal/carteira', pathMatch: 'full' },
  //{ path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
  { path: 'principal', component: PrincipalComponent , /*canActivate: [AuthGuardService],*/
    children: [
      { path: 'carteira', component: CarteiraComponent},
      { path: 'log', component: LogComponent}
      // { path: 'funcionario', component: FuncionariosComponent, /*canActivate: [AuthGuardService]*/},
      // { path: 'home', component: HomeComponent, /*canActivate: [AuthGuardService]*/},
      // { path: 'livro', component: LivrosComponent, /*canActivate: [AuthGuardService]*/},
      // { path: 'cliente', component: ClienteComponent, /*canActivate: [AuthGuardService]*/},
      // { path: 'carrinho', component: CarrinhoComponent, /*canActivate: [AuthGuardService]*/},
      // { path: 'relatorios', component: RelatoriosComponent, /*canActivate: [AuthGuardService]*/}

    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})
export class AppRoutingModule { }
