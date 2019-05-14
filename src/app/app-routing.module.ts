import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConversationComponent } from './conversation/conversation.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
	{path: 'conversation/:uid', component: ConversationComponent},
	//{path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
