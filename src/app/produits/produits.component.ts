import { Component, OnInit } from '@angular/core';
import { Produit } from '../produit';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  private produit: Produit = {
    Name: '',
    CName:'',
    prixbase: '',
    prixvente: '',
    seuil: '',
    image:'',
    unite:'',
    quantiteinitiale: '',
    quantiteactuel:''
  };
  produits: Produit[]=[];
  constructor(private service:ProductService, private route:Router) { }
  
  ngOnInit() {
  }
  onSubmit(){
    this.produit = this.service.form.value;
    console.log(this.produit);
      if(this.service.form.value.id==null){
        console.log(this.produit);
        this.add();
        this.service.form.reset();
      }
      else{
        this.service.update(this.produit).subscribe(()=>this.route.navigate(['/produitsList']));
      }
      this.service.initializeFormGroup();
  }
  add(){
    this.service.AjouterProduit(this.produit).subscribe((produit)=>{
      this.produits = [produit,...this.produits];
      this.route.navigate(['/produitsList']);
    });
  }

}
