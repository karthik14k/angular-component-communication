import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  parentMessage:string="This is from parent";

  ngOnInit() {
    
  }
  constructor() { }


  updateFromChild(newMessage: string){
    this.parentMessage = newMessage
  }
}
