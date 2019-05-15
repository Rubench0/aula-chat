import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConversationComponent } from './conversation/conversation.component';
import { LoginComponent } from './security/login/login.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
	{path: 'login', component: LoginComponent},
	{path: 'conversation/:uid', component: ConversationComponent},
	//{path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
