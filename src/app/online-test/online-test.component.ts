import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.css']
})
export class OnlineTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  question1!: string;
  types: string[] = ['Boolean, Number, String ', 'Object, String, Number', 'Array, Object, Boolean', 'Object, Array, Symbol'];

  question2!: string;
  inherits: string[] = ['string[]','any[]','string','unknown[]'];

  question3!: string;
  returns: string[] = ['unknown','any[]','any','void'];

  question4!: string;
  accmodis: string[] = ['string[]','any[]','string','unknown[]'];

  question5!: string;
  members: string[] = ['Overload','Extending','Override','inheriting'];
}