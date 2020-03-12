import { Component, OnInit } from '@angular/core';
import { FournisseurService } from '../../services/fournisseur.service';
import { Router } from '@angular/router';
import { Fournisseur } from '../../fournisseur';

@Component({
  selector: 'app-fournisseur',
  templateUrl: './fournisseur.component.html',
  styleUrls: ['./fournisseur.component.css']
})
export class FournisseurComponent implements OnInit {
  private fournisseur: Fournisseur = {
      fullName:'',
      courtName:'',
      fix:'',
      fax:'',
      email:'',
      adresse:'',
      mobile:'',
      city:''
  };
  fournisseurs: Fournisseur[]=[];
  constructor(private service:FournisseurService, private route:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.fournisseur = this.service.form.value;
    console.log(this.fournisseur);
      if(this.service.form.value.id==null){
        console.log(this.fournisseur);
        this.add();
        this.service.form.reset();
      }
      else{
        this.service.update(this.fournisseur).subscribe(()=>this.route.navigate(['/fournisseurList']));
      }
      this.service.initializeFormGroup();
  }
  add(){
    this.service.AjouterFournisseur(this.fournisseur).subscribe((fournisseur)=>{
      this.fournisseurs = [fournisseur,...this.fournisseurs];
      this.route.navigate(['/fournisseurList']);
    });
  }
}
