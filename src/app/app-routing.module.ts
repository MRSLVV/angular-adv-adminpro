import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRautingModule } from './auth/auth.routing';

import { NotpagefoundComponent } from './notpagefound/notpagefound.component';





const routes: Routes =[ 
  //path: '/dashboard PagesRouting
  //path: '/auth' AuthRouting
  
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: '**', component: NotpagefoundComponent}

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule, 
    AuthRautingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
