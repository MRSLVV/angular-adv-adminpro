import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AcountSettingsComponent } from './acount-settings/acount-settings.component';

const routes: Routes = [ 
     {path: 'dashboard', 
     component: PagesComponent, 
        //Para crear las rutas hijo dentro hay varias formas
        //
     children:[

     {path: '', component: DashboardComponent},
     {path: 'progress', component: ProgressComponent},
     {path: 'grafica1', component: Grafica1Component},
     {path: 'acount-settings', component: AcountSettingsComponent},
     {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
  ]
    },


];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
}) 

export class PagesRoutingModule {}



