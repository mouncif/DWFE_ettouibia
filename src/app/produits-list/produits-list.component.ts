import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Produit } from '../produit';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits-list',
  templateUrl: './produits-list.component.html',
  styleUrls: ['./produits-list.component.css']
})
export class ProduitsListComponent implements OnInit {
  datasource = new MatTableDataSource<Produit>();
  displayColumns: string[]=['id', 'Name','CName', 'prixbase','prixvente', 'seuil', 'quantiteactuel', 'unite', 'actions'];
  constructor(private service:ProductService, private route:Router) { }

  ngOnInit() {
    this.findAll();
  }
  findAll(){
    this.service.getAllProducts().subscribe(res => {
      if (!res) { return; }
      console.log(res);
      this.datasource = new MatTableDataSource(res as any);
    });
  }
  onDelete(id){
    this.delete(id);
  }
  delete(id){
    this.service.delete(id).subscribe(()=>{
      this.findAll();
    });
  }
  onEdit(row){
    this.service.setter(row);
  }
  goAdd(){
    this.route.navigate(['/produits']);
  }
}
