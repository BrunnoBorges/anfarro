import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./src/views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'localization', loadChildren: () => import('./src/views/localization/localization.module').then(m => m.LocalizationModule)
  },
  {
    path: 'among-us', loadChildren: () => import('./src/views/among-us/among-us.module').then(m => m.AmongUsModule)
  },
  {
    path: 'contact', loadChildren: () => import('./src/views/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'about', loadChildren: () => import('./src/views/about/about.module').then(m => m.AboutModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
