import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	@Input() userDetails:any = '';
	@Output() setRegistration = new EventEmitter();
	constructor(private router:Router) {
		
	}

	ngOnInit(): void {
		
	}
	//function to route the data
	sendData(){
		this.router.navigateByUrl('signin',{state:this.userDetails})
	}

}
