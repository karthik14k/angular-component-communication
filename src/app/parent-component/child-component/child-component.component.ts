import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  @Input() childMessage: string
  @Output() parentMessage = new EventEmitter;

  someMessage:string = "some message"
  constructor() { }

  ngOnInit() {
  }

  updateToParent(event: any){
    console.log(this.childMessage)
    this.parentMessage.emit(this.childMessage)
  }

}
