import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  template:'<br><input [(ngModel)]="name" type="text"> {{name}}',
  styles: []
})


export class ContactComponent implements OnInit {

public name="";

    constructor(){

    }
    ngOnInit(){

    }
    logMessage(value){
      console.log(value)

    }
}
