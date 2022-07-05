import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	//global members of the class
	//authState will take true if signin, for signup it will take false as value 
	userData:any = '';
	private userNameState:boolean = false;
	private userPassword: boolean = false;
	userEmailErr: boolean = false;
	userPasswordErr: boolean = false;

	//Input and Output Variables
	@Input() userDetails: any = [];
	@Output() loginState = new EventEmitter();
	@Output() passingNewUserData = new EventEmitter();

	constructor(private route:Router) {
		this.userData = this.userData = this.route.getCurrentNavigation()?.extras.state
	}

	ngOnInit(): void {
		
	}

	//global member functions of the class
	//selected input style
	changeInputState(inputTag:string):void{
		if(inputTag=='userName')
		{
			this.userNameState = true;
		}
		else if(inputTag=='userPass'){
			this.userPassword = true;
		}
	}

	//unset the sellection to the input 
	unsetSelected(inputTag:string):void{
		if(inputTag=='userName')
		{
			this.userNameState = false;
		}
		else if(inputTag=='userPass'){
			this.userPassword = false;
		}
	}

	//set the style to the selected and unselected inputs
	changeStyleSelected(inputTag:string):string{
		if(inputTag=='userName')
		{
			if(this.userNameState==false)
			{
				return 'form-control bg-dark text-center text-light my-1';
			}
			else
			{
				return 'form-control text-center my-1';
			}
		}
		else
		{
			if(this.userPassword==false)
			{
				return 'form-control bg-dark text-center text-light my-1';
			}
			else
			{
				return 'form-control text-center my-1';
			}
		}
	}

	//check is the user details correct or not
	CheckUserData(userEmail:string, password:string){
		for(let eachKey in this.userData.user)
		{
			if(this.userData.user[eachKey]['email']==userEmail && this.userData.user[eachKey]['password']==password)
			{
				localStorage.setItem('email',this.userData.user[eachKey]['email']);
				localStorage.setItem('name',this.userData.user[eachKey]['username']);
				localStorage.setItem('phno',this.userData.user[eachKey]['phno']);
				localStorage.setItem('place',this.userData.user[eachKey]['place']);
				this.route.navigateByUrl('/dashboard');
			}
			else
			{
				this.userPasswordErr = true;
			}
		}
	}
}
