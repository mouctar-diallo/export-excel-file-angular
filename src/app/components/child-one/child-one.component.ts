import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  @Input() item_child_one = '';

  items: any = ['item1', 'item2', 'item3', 'item4'];

  constructor() { }

  ngOnInit(): void {
    console.log(this.items);
    
    
  }

  addItem(item : string) : void {
   this.items.push(item);
  }

}
