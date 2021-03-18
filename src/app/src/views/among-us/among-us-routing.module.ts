import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmongUsComponent } from './among-us.component';

const routes: Routes = [
  {
    path: '', component: AmongUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmongUsRoutingModule { }
