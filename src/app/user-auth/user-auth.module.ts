import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { UserDetailsComponent } from '../dashboard/user-details/user-details.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
	{	
		path:'dashboard',
		component:UserDetailsComponent
	}
]

@NgModule({
	declarations: [
		SigninComponent,
		SignupComponent,
	],
	imports: [
		CommonModule,
		DashboardModule,
		RouterModule.forRoot(route)
	],
	exports: [
		SigninComponent,
		SignupComponent,
		RouterModule
	]
})
export class UserAuthModule { }
