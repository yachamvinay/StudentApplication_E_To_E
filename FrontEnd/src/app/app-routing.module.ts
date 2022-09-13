import { TeacherComponent } from './teacher/teacher.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentregisterComponent } from './studentregister/studentregister.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:StudentregisterComponent},
  {path:'dashboard/:id',component:DashboardComponent},
  {path:'admindashboard',component:AdminComponent,
  children:[
    {path:'',component:StudentlistComponent},
    {path:'teacher',component:TeacherComponent},
    {path:'result',component:ResultComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
