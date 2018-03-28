import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { commnet } from '../profile/profile.component';

interface User{
	name: string;
	callingCodes: string;
}
@Injectable()
export class Service {

	data: any
	ROOT_URL = 'https://restcountries.eu/rest/v2/';
	url = 'https://api.github.com/users/seeschweiler';
	constructor(
		private http: Http,
		private https: HttpClient
	) {

	}

	// getCountries(){
	//   this.http.get(this.ROOT_URL).subscribe((params)=>{
	//     this.data = params
	//   })
	// }

	// getComments(): Observable<Comment[]> {
	// 	return this.https.get(this.ROOT_URL)
	// 		.map((res: Response) => res.json())
	// 		.catch((error: any) => Observable.throw(error.json().error || 'Server error'));

	// }

	getComments(){
		var no = 0;
		return this.https.get<User>(this.ROOT_URL).subscribe((res)=>{
			this.data = res;
			this.data.forEach(element => {
				console.log(no+=1,element.name, element.callingCodes);
			});
		},error=>{
			console.log("an Error has occured");
			
		});

		}

	// Add a new comment
	addComment(body: Object): Observable<Comment[]> {
		let bodyString = JSON.stringify(body); // Stringify payload
		let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
		let options = new RequestOptions({ headers: headers }); // Create a request option

		return this.http.post(this.ROOT_URL, body, options) // ...using post request
			.map((res: Response) => res.json()) // ...and calling .json() on the response to return data
			.catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
	}

	// Update a comment
	updateComment(body: Object): Observable<Comment[]> {
		let bodyString = JSON.stringify(body); // Stringify payload
		let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
		let options = new RequestOptions({ headers: headers }); // Create a request option

		return this.http.put(`${this.ROOT_URL}/${body['id']}/`, body, options) // ...using put request
			.map((res: Response) => res.json()) // ...and calling .json() on the response to return data
			.catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
	}
	// Delete a comment
	removeComment(id: string): Observable<Comment[]> {
		return this.http.delete(`${this.ROOT_URL}/${id}`) // ...using put request
			.map((res: Response) => res.json()) // ...and calling .json() on the response to return data
			.catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
	}

	// *********	Testing work	**********

	getCreat(){
		this.https.get(this.url).subscribe((res)=>{
			this.data = res;
			console.log(this.data.login);
		})
	}

}
