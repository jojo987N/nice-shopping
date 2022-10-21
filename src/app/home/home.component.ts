import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '<h1>Bonjour</h1>',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Home page';
  description!:string;
  constructor() { }

  ngOnInit(): void {

    
  }

}
