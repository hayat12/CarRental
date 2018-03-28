import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { Service } from '../securiry/service.service';
@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

	constructor(
		private router	: Router,
		private service: Service
	) { }

	ngOnInit() {
		var x = this.service.getCreat();
	}
	NextPage() {
		this.router.navigate([ '/profile', 'profile-info', { outlets: { "homechild2": ["chat"] } } ]);
	}
	LogOut(){
		var x = confirm('are you sure you want to log out?');
		if (x===true) {
			this.router.navigate(['./'])
		} else {
			// this.router.navigate(['./profile/payment']);
		}
		
	}
	ChangePassword(){
		this.router.navigate(['profile', 'change-password'])
	}
}

@Component({
	selector: 'app-profile',
	templateUrl: 'mypro.component.html',
	styleUrls: ['./profile.component.scss']
})export class mypro implements OnInit {

	constructor(
		private service: Service,
		private router	: Router,
	) { }

	ngOnInit() {

	}
}

@Component({
	selector: 'app-profile',
	templateUrl: 'mypro.component.html',
	styleUrls: ['./profile.component.scss']
})export class commnet implements OnInit {

	constructor(
		private service: Service,
		private router	: Router,
	) { }

	ngOnInit() {

	}
}

