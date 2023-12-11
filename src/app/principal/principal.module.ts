import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    PrincipalComponent,
    LogComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    FormsModule,


  ]
})
export class PrincipalModule { }
