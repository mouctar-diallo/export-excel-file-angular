import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output() newUserEvent = new EventEmitter();
  userForm : FormGroup | any;
  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
    })
  }

  addUser(){
    this.newUserEvent.emit(this.userForm.value);
  }

}
