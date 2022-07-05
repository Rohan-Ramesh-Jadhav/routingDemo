import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
	//user details array
	userDetailsGlobal:any[] = []
	constructor() {
		
	}

	ngOnInit(): void {
		this.userDetailsGlobal.push(localStorage.getItem('name'),
			localStorage.getItem('email'),
			localStorage.getItem('phno'),
			localStorage.getItem('place')
		);
	}
}
