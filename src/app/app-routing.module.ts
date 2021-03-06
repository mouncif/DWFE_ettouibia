import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { FournisseurComponent } from './fournisseurs/fournisseur/fournisseur.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ProduitsComponent } from './produits/produits.component';
import{ProduitsListComponent} from './produits-list/produits-list.component'


const routes: Routes = [
  {path : '', redirectTo: '/acceuil', pathMatch: 'full'},
  {path:'clients', component:ClientComponent},
  {path:'acceuil', component:AcceuilComponent},
  {path:'users', component:UserComponent},
  {path:'userList', component:UsersComponent},
  {path:'fournisseurs', component:FournisseurComponent},
  {path:'fournisseurList', component:FournisseursComponent},
  {path:'clientList', component:ClientListComponent},
  {path:'produitsList', component:ProduitsListComponent},
  {path:'produits', component:ProduitsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
