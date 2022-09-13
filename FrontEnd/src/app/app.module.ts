import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { StudentregisterComponent } from './studentregister/studentregister.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ResultComponent } from './result/result.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentregisterComponent,
    DashboardComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    AdminhomeComponent,
    AdminheaderComponent,
    StudentlistComponent,
    TeacherComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
