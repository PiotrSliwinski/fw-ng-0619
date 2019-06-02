import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['../app.component.css']
})
export class DrawComponent implements OnInit {

  @Input() dnaSequence;

}
