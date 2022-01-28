import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list-one-user',
  templateUrl: './list-one-user.component.html',
  styleUrls: ['./list-one-user.component.css']
})
export class ListOneUserComponent implements OnInit {

  @Input() user : any;

  constructor() { }

  ngOnInit(): void {
    
  }

}
