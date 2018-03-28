import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  carsList: any[] = ['Afghanistan', 'Pakistan', 'Malaysia']
  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }
  RegisterNow(){
    this.router.navigate([ 'profile/', 'search', { outlets: { "homechild2": ["chat"] } } ])
  }
}
