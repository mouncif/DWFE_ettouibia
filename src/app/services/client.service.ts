import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Client } from '../client';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
private url=" http://localhost:3000/clients";
  constructor( private http:HttpClient, private route:Router) { }
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', Validators.minLength[(8)]),
    statut: new FormControl(''),
    city: new FormControl(''),
    adresse:new FormControl(''),
    image:new FormControl('')
  });
  initializeFormGroup(){
    this.form.setValue({
      id:null,
      firstName:'',
      email:'',
      lastName:'',
      statut:'',
      mobile:'',
      city:'',
      adresse:'',
      image:''
    })
  }
  AjouterClient(client){
    return this.http.post<Client>(this.url, client);
  }
  goList(){
    return this.route.navigate(['/ClientList']);
  }
  getAll(){
    return this.http.get<Client[]>(this.url);
  }
  update(row){
    return this.http.put<Client>(`${this.url}/${row.id}`, row);
  }
  setter(row){
    this.form.setValue(row);
    this.route.navigate(['/clients']);
  }
  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
}
