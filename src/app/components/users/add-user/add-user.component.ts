import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

 user : any;

  constructor() { }

  ngOnInit(): void {
  }

  addUser(event : any){
    console.log("data form from user form component");
    this.user = event;
    console.log(this.user);
    
  }

}
