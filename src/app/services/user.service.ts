import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url=" http://localhost:3000/users";
  constructor(private http:HttpClient, private route:Router) { }
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    profil: new FormControl(''),
    email: new FormControl('', Validators.email),
    datecreation: new FormControl(''),
    datefin: new FormControl(''),
    imageUrl:new FormControl('')
  });

  initializeFormGroup(){
    this.form.setValue({
      id:null,
      profil:'',
      email: '',
      datecreation: new Date(),
      datefin: new Date(),
      imageUrl:''
    })
  }
  AjouterUser(user){
    return this.http.post<User>(this.url, user);
  }
  goList(){
    return this.route.navigate(['/userList']);
  }
  getAll(){
    return this.http.get<User[]>(this.url);
  }
  update(row){
    return this.http.put<User>(`${this.url}/${row.id}`, row);
  }
  setter(row){
    this.form.setValue(row);
    this.route.navigate(['/users']);
  }
  delete(id){
    return this.http.delete(`${this.url}/${id}`);
  }
}
