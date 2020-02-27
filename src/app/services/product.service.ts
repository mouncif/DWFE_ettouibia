import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    Name: new FormControl('', Validators.required),
    CName: new FormControl('', Validators.required),
    prixbase: new FormControl('', Validators.email),
    mobile: new FormControl('', Validators.minLength[(8)]),
    city: new FormControl(''),
    adresse:new FormControl(''),
    image:new FormControl(''),
    isPermanent: new FormControl(false)
  });
  initializeFormGroup(){
    this.form.setValue({
      id:null,
      Name:'',
      prixbase:'',
      CName:'',
      mobile:'',
      city:'',
      adresse:'',
      image:'',
      isPermanent:false
    })
  }

  id?:number;
    Name:string;
    CName:string;
    prixbase:string;
    prixvente:string;
    seuil:string;
    image:string;
    unité:string;
    quantiteinitiale:string;
    quantiteactuel:string;
}
  constructor() { }
}
