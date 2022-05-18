import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text!: string; // take text of button as input
  
  constructor() { 
  } 

  ngOnInit(): void {
  }

  onClick(){
    console.log("button works")
  }
}
