import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsComponent } from './components/signals/signals.component';
import { DemoComponent } from './components/demo/demo.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';

const routes: Routes = [
  {
    path: '',
    component: SignalsComponent, 
    children: [
      {
        path: 'demo',
        component: DemoComponent
      },
      {
        path: 'rxjs',
        component: RxjsComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
