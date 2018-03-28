import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  BookNow(){
    this.router.navigate(['/registration', { outlets: { "homechild2": ["chat"] } }])
  }
}
