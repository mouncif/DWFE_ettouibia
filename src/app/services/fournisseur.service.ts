import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Fournisseur } from '../fournisseur';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {
  private url=" http://localhost:3000/fournisseurs";
  constructor(private http:HttpClient, private route:Router) { }
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    courtName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', Validators.minLength[(8)]),
    fix: new FormControl(''),
    city: new FormControl(''),
    adresse:new FormControl(''),
    fax:new FormControl('')
  });

  initializeFormGroup(){
    this.form.setValue({
      id:null,
      fullName:'',
      courtName:'',
      fix:'',
      fax:'',
      email:'',
      adresse:'',
      mobile:'',
      city:''
    })
  }
  AjouterFournisseur(fournisseur){
    return this.http.post<Fournisseur>(this.url, fournisseur);
  }
  goList(){
    return this.route.navigate(['/fournisseurList']);
  }
  getAll(){
    return this.http.get<Fournisseur[]>(this.url);
  }
  update(row){
    return this.http.put<Fournisseur>(`${this.url}/${row.id}`, row);
  }
  setter(row){
    this.form.setValue(row);
    this.route.navigate(['/fournisseurs']);
  }
  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
}
