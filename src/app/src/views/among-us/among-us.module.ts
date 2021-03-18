import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmongUsRoutingModule } from './among-us-routing.module';
import { AmongUsComponent } from './among-us.component';



@NgModule({
  declarations: [AmongUsComponent],
  imports: [
    CommonModule,
    AmongUsRoutingModule
  ]
})
export class AmongUsModule { }
