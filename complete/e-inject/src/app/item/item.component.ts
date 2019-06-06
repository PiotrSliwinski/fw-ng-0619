import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['../app.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item;
  @Input() detail;

  @Output() select = new EventEmitter();

  constructor() {}
  ngOnInit() {}

}
