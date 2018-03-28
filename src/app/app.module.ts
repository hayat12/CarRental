import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

// ** Components **
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './sub-component/header/header.component';
import { FooterComponent } from './sub-component/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { CarlistComponent } from './carlist/carlist.component';
import { CarAddComponent } from './car-add/car-add.component';
import { MyPostComponent } from './my-post/my-post.component';
import { mypro } from './profile/profile.component'
// ** Services  **
import { Service } from './securiry/service.service';


// ** Plugins **
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgxSelectModule } from 'ngx-select-ex';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { BookInfoComponent } from './book-info/book-info.component';
import { SearchHeaderComponent } from './search-header/search-header.component';
import { SearchListComponent } from './search-list/search-list.component';
import { PaymentComponent } from './payment/payment.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { TestingComponent } from './testing/testing.component';
import { commnet } from './profile/profile.component'
const appRoute: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'profile',
		component: ProfileComponent, children:
			[
				{
					path: 'mycar',
					component: MyPostComponent
				},
				{
					path: 'search',
					component: SearchResultComponent
				},
				{
					path: 'profile-info',
					component: ProfileInfoComponent
				},
				{
					path: 'book-info',
					component: BookInfoComponent
				},
				{
					path: 'test',
					component: TestingComponent
				},
				{
					path: 'mypro',
					component: mypro
				},
				{
					path: 'change-password',
					component: ChangePasswordComponent
				},
				{
					path: 'search-header',
					component: SearchHeaderComponent, children: [
						{
							path: 'search',
							component: SearchResultComponent
						},
						{
							path: 'search-list',
							component: SearchListComponent
						},
					]
				},
				{
					path: 'payment',
					component: PaymentComponent
				},
				{
					path: '**',
					component: NotFoundComponent
				}
			]
	},
	{
		path: 'search-header',
		component: SearchHeaderComponent, children: [
			{
				path: 'search',
				component: SearchResultComponent
			},
			{
				path: 'search-list',
				component: SearchListComponent
			},
		]
	},
	{
		path: 'search',
		component: SearchResultComponent
	},
	{
		path: 'registration',
		component: RegistrationComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}
]
@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HeaderComponent,
		FooterComponent,
		HomeComponent,
		ProfileComponent,
		CarlistComponent,
		CarAddComponent,
		MyPostComponent,
		NotFoundComponent,
		SearchResultComponent,
		RegistrationComponent,
		ProfileInfoComponent,
		BookInfoComponent,
		SearchHeaderComponent,
		SearchListComponent,
		PaymentComponent,
		ChangePasswordComponent,
		TestingComponent,
		mypro,
		commnet
	],
	imports: [
		HttpModule,
		HttpClientModule,
		BrowserModule,
		NgxSelectModule,
		ModalModule.forRoot(),
		RouterModule.forRoot(appRoute),
		CarouselModule.forRoot(),
	],
	providers: [
		Service
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
