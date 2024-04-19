import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-editting-of-post',
  templateUrl: './editting-of-post.component.html',
  styleUrls: ['./editting-of-post.component.scss']
})
export class EdittingOfPostComponent implements OnInit {

  @Output() popupClosed =new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

}
