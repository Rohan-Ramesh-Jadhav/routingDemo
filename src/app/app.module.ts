import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { NavComponent } from './shared/nav/nav.component';
import { SigninComponent } from './user-auth/signin/signin.component';
import { SignupComponent } from './user-auth/signup/signup.component';

const routes: Routes = [
	{path: 'signin', component: SigninComponent},
	{path: 'signup', component: SignupComponent}
];

@NgModule({
	declarations: [
		AppComponent,
		NavComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		UserAuthModule,
		RouterModule.forRoot(routes),
	],
	exports: [RouterModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
