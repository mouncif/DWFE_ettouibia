import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { MatTableDataSource } from '@angular/material';
import { Client } from '../client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  datasource = new MatTableDataSource<Client>();
  displayColumns: string[]=['id', 'firstName', 'lastName','statut', 'email', 'mobile', 'city', 'adresse', 'actions'];
  constructor(private service:ClientService, private route:Router) { }
  findAll(){
    this.service.getAll().subscribe(res => {
      if (!res) { return; }
      console.log(res);
      this.datasource = new MatTableDataSource(res as any);
    });
  }
  ngOnInit() {
    this.findAll();
  }
  onEdit(row){
    this.service.setter(row);
  }
  onDelete(id){
    this.delete(id);
  }
  delete(id){
    this.service.delete(id).subscribe(()=>{
      this.findAll();
    });
  }
  goAdd(){
    this.route.navigate(['/clients']);
  }

}
