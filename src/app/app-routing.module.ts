import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ProduitsComponent } from './produits/produits.component';
import{ProduitsListComponent} from './produits-list/produits-list.component'


const routes: Routes = [
  {path:'users', component:ClientComponent},
  {path:'acceuil', component:AcceuilComponent},
  {path:'clientList', component:ClientListComponent},
  {path:'produitsList', component:ProduitsListComponent},
  {path:'produits', component:ProduitsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
