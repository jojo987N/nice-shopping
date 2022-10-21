import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // title = '<i>Home page</i>';
  title = 'Home page';
  description!:string;
  constructor() { }

  ngOnInit(): void {


  }

}
