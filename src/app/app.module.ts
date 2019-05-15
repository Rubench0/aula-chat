import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchPipe } from './pipes/search.pipe';
import { ConversationComponent } from './conversation/conversation.component';

import { MzSidenavModule } from 'ngx-materialize';
import { MzIconModule, MzIconMdiModule } from 'ngx-materialize';
import { MzInputModule } from 'ngx-materialize';
import { MzNavbarModule } from 'ngx-materialize';
import { MzCardModule } from 'ngx-materialize';
import { MzButtonModule } from 'ngx-materialize';
import { MzDropdownModule } from 'ngx-materialize'

import { UserStatusPipe } from './pipes/user-status.pipe';
import { LoginComponent } from './security/login/login.component';
import { NavbarComponent } from './layout/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchPipe,
    ConversationComponent,
    UserStatusPipe,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MzSidenavModule,
    MzIconModule,
    MzIconMdiModule,
    MzInputModule,
    MzNavbarModule,
    MzCardModule,
    MzButtonModule,
    MzDropdownModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
