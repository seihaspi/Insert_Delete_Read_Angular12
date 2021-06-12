import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  users:any= [];
  constructor(){
  }
  ngOnInit() {
    //||'{}'
     let users = JSON.parse(localStorage.getItem("$user_info")||'{}');
     this.users =  users;
  //console.log("resule"+ users[0]['username']);
  }
  createUser(form:NgForm){
  let users =[];
  users = this.users;
  //console.log(form.value);
  //users.push(form.value);
  users.push(form.value);
  let user = JSON.stringify(users);
  localStorage.setItem("$user_info",user);
  form.resetForm();
  }

  deleteUser(index: any){
    console.log(index);
    let ind = this.users.indexOf(this.users[index]);
    if(ind>-1){
      this.users.splice(ind,1);
    }
    localStorage.setItem("$user_info",JSON.stringify(this.users));
  }
  onEdit(index:any){
    console.log(this.users[index]);
  }

}
