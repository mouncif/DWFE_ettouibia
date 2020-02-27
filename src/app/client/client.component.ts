import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  private client: Client = {
    firstName: '',
    lastName:'',
    email: '',
    mobile: '',
    city: '',
    adresse:'',
    image:'',
    isPermanent: false
  };
  clients: Client[]=[];
  
  constructor(private service:UserService, private route:Router) { }
  

  ngOnInit() {
  }
onSubmit(){
  this.client = this.service.form.value;
  console.log(this.client);
    if(this.service.form.value.id==null){
      console.log(this.client);
      this.add();
      this.service.form.reset();
    }
    else{
      this.service.update(this.client).subscribe(()=>this.route.navigate(['/clientList']));
    }
    this.service.initializeFormGroup();
}
add(){
  this.service.AjouterClient(this.client).subscribe((client)=>{
    this.clients = [client,...this.clients];
    this.route.navigate(['/clientList']);
  });
}
}
