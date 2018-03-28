import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  BookNow(){
    this.router.navigate([ 'profile/','payment', { outlets: { "homechild2": ["chat"] } } ]);
  }
  BookNewCars(){
    this.router.navigate([ 'profile/search-header/','search-list', { outlets: { "homechild2": ["chat"] } } ]);
  }
}
