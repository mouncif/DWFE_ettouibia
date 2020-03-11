import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatTableDataSource } from '@angular/material';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  datasource = new MatTableDataSource<User>();
  displayColumns: string[]=['id', 'profil', 'email', 'datecreation', 'datefin', 'actions'];
  constructor(private service:UserService) { }
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

}
