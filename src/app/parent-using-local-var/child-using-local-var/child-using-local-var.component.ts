import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-using-local-var',
  templateUrl: './child-using-local-var.component.html',
  styleUrls: ['./child-using-local-var.component.css']
})
export class ChildUsingLocalVarComponent implements OnInit {
  inputStr1:string;
  inputStr2:string;
  concatinatedStr:string;
  
  constructor() { }

  ngOnInit() {
  }

  concat(){
    this.concatinatedStr = this.inputStr1 + this.inputStr2;
  }
}
