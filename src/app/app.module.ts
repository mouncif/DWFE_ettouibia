import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClientComponent } from './client/client.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProduitsComponent } from './produits/produits.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './services/client.service';
import { ClientListComponent } from './client-list/client-list.component';
import { ProduitsListComponent } from './produits-list/produits-list.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { FournisseurComponent } from './fournisseurs/fournisseur/fournisseur.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ClientComponent,
    FooterComponent,
    ProduitsComponent,
    AcceuilComponent,
    ClientListComponent,
    ProduitsListComponent,
    UsersComponent,
    UserComponent,
    FournisseursComponent,
    FournisseurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
