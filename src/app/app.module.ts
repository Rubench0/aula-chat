import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

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
import { MzMediaModule } from 'ngx-materialize';
import { MzBadgeModule } from 'ngx-materialize';
import { MzFeatureDiscoveryModule } from 'ngx-materialize';
import { MzTabModule } from 'ngx-materialize';
import { MzTextareaModule } from 'ngx-materialize'

import { UserStatusPipe } from './pipes/user-status.pipe';
import { LoginComponent } from './security/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { SidenavUserComponent } from './layout/sidenav/sidenav-user/sidenav-user.component';
import { SidenavNavMobileComponent } from './layout/sidenav/sidenav-nav-mobile/sidenav-nav-mobile.component';
import { MainComponent } from './main/main.component';
import { EditComponent } from './user/edit/edit.component';
import { NavChatComponent } from './layout/navbar/nav-chat/nav-chat.component';
import { SideNavChatClassComponent } from './layout/sidenav/side-nav-chat-class/side-nav-chat-class.component';
import { NavbarMainComponent } from './layout/navbar/nav-main/navbar.component';
import { TabResourceClassComponent } from './layout/tab/tab-resource-class/tab-resource-class.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchPipe,
    ConversationComponent,
    UserStatusPipe,
    LoginComponent,
    NavbarMainComponent,
    RegisterComponent,
    SidenavUserComponent,
    SidenavNavMobileComponent,
    MainComponent,
    EditComponent,
    NavChatComponent,
    SideNavChatClassComponent,
    TabResourceClassComponent
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    MzMediaModule,
    MzBadgeModule,
    MzFeatureDiscoveryModule,
    MzTabModule,
    MzTextareaModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
