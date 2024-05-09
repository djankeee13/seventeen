import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsComponent } from './components/signals/signals.component';
import { DemoComponent } from './components/demo/demo.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignalsComponent,
    DemoComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignalsModule { }
