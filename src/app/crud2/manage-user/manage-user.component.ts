import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
@ViewChild('userForm') userForm:NgForm;

url='https://uxproducts-be9fc.firebaseio.com/user.json';

  constructor(private http:HttpClient) { }
  users=[];

  ngOnInit(): void {
  }
//add Data
  onAddUser(userData: User){
   console.log(userData);
   this.users.push(userData);
   this.http.post<User>(this.url,userData).subscribe(
     (response)=>console.log(response),
     (error)=>console.log(error)
   )
   

  }

  //saveData


}
