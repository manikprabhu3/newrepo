import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarchartComponent } from './barchart/barchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { RadarchartComponent } from './radarchart/radarchart.component';
import { RegistrationComponent } from './registration/registration.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
    { path: 'submit', component: WelcomeComponent,
      children: [
          { path: 'barchart', component: BarchartComponent },
          { path: 'piechart', component: PiechartComponent },
          { path: 'radarchart', component: RadarchartComponent }
      ]
    },
    { path: '', component: RegistrationComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [WelcomeComponent, RegistrationComponent, BarchartComponent, ]