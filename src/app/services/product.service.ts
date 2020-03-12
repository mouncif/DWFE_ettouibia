import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Produit } from '../produit';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url=" http://localhost:3000/produits";
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    Name: new FormControl('', Validators.required),
    CName: new FormControl('', Validators.required),
    prixbase: new FormControl(''),
    prixvente: new FormControl(''),
    seuil: new FormControl(''),
    image:new FormControl(''),
    unite:new FormControl(''),
    quantiteinitiale: new FormControl(''),
    quantiteactuel: new FormControl(''),
  });
  initializeFormGroup(){
    this.form.setValue({
      id:null,
      Name:'',
      prixbase:'',
      CName:'',
      prixvente:'',
      seuil:'',
      image:'',
      unite:'',
      quantiteinitiale:'',
      quantiteactuel:''
    })
  }

  AjouterProduit(produit){
    return this.http.post<Produit>(this.url, produit);
  }
  getAllProducts(){
    return this.http.get<Produit[]>(this.url);
  }
  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
  update(row){
    return this.http.put<Produit>(`${this.url}/${row.id}`, row);
  }
  setter(row){
    this.form.setValue(row);
    this.route.navigate(['/produits']);
  }

  constructor(private http:HttpClient , private route:Router) { }
}
