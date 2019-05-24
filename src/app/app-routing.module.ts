import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConversationComponent } from './conversation/conversation.component';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { MainComponent } from './main/main.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { PartnersComponent } from './inbox/partners/partners.component';

const routes: Routes = [
  {path: '', component: MainComponent, canActivate: [AuthenticationGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthenticationGuard]},
	{path: 'login', component: LoginComponent},
	{path: 'register', component: RegisterComponent},
	{path: 'inbox', component: PartnersComponent},
	{path: 'conversation/:uid', component: ConversationComponent, canActivate: [AuthenticationGuard]},
	//{path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
