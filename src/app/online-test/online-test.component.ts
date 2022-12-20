import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.css']
})
export class OnlineTestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  type1: any;
  type2: any;
  type3: any;
  type4: any;
  type5: any;
  type6: any;
  type7: any;
  type8: any;
  type9: any;
  type10: any;

  exampleFirst : string[] = ['Streams data in asynchronously','Streams data in synchronously','Both','None of above'];
  exampleSecond : string[] = ['Object-Oriented','Object-Based','Assembly-language','High-level'];
  exampleThird : string[] = ['Keywords','Data types','Declaration statements','Prototypes'];
  exampleFourth : string[] = ['Global variable','The local element','The two of the above','None of the above'];
  exampleFifth : string[] = ['Preprocessor','Triggering Event','RMI','Function/Method'];

  submit(online : any){

    console.log("Form Submitted",online)
    this.router.navigateByUrl('finish');
  }
}