import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  carsList: any[] = ['Protonsaga','BMW', 'adaa','asda'];
  constructor(
    private routes : Router
  ) { }

  ngOnInit() {
  }
  SearchCar(){
    this.routes.navigate([ 'search-header', 'search-list', { outlets: { "homechild2": ["chat"] } } ]);
  }
}
