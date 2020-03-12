import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Fournisseur } from '../fournisseur';
import { FournisseurService } from '../services/fournisseur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.css']
})
export class FournisseursComponent implements OnInit {
  datasource = new MatTableDataSource<Fournisseur>();
  displayColumns: string[]=['id', 'fullName','courtName',  'email', 'mobile','fix', 'city','adresse', 'actions'];
  constructor(private service:FournisseurService, private route:Router) { }
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
    this.route.navigate(['/fournisseurs']);
  }


}
