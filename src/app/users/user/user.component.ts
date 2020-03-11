import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private user: User = {
    profil:'',
    email: '',
    datecreation: new Date(),
    datefin: new Date(),
    imageUrl:''
  };
  users: User[]=[];
  constructor(private service:UserService, private route:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.user = this.service.form.value;
    console.log(this.user);
      if(this.service.form.value.id==null){
        console.log(this.user);
        this.add();
        this.service.form.reset();
      }
      else{
        this.service.update(this.user).subscribe(()=>this.route.navigate(['/userList']));
      }
      this.service.initializeFormGroup();
  }
  add(){
    this.service.AjouterUser(this.user).subscribe((user)=>{
      this.users = [user,...this.users];
      this.route.navigate(['/userList']);
    });
  }
}
