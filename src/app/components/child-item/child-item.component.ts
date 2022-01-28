import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child-item',
  templateUrl: './child-item.component.html',
  styleUrls: ['./child-item.component.css']
})
export class ChildItemComponent implements OnInit {

  @Input() items: any;

  @Output() itemEvent = new EventEmitter<string>();

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

  addItem(value: string): void {
    this.itemEvent.emit(value)
  }

}
