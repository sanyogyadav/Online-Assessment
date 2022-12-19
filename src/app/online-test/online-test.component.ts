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

  selectedValue: any;
  exampleFirst : string[] = ['Streams data in asynchronously','Streams data in synchronously','Both','None of above'];

  submit(online : any){

    console.log("Form Submitted",online)
    this.router.navigateByUrl('finish');
  }
}