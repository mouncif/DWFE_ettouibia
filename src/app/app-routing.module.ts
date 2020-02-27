import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AcceuilComponent } from './acceuil/acceuil.component';


const routes: Routes = [
  {path:'users', component:ClientComponent},
  {path:'acceuil', component:AcceuilComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
