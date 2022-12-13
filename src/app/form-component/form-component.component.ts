import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }  

  submit(login : any){
    console.log("Form Submitted",login)
    this.router.navigateByUrl('online-test');
  }

}
