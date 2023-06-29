import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { StudentManagementComponent } from './view/student-management/student-management.component';
import { CoursesComponent } from './view/courses/courses.component';
import {FormsModule} from "@angular/forms";

const routers:Routes=[
  {
    path:'students',
    component:StudentManagementComponent
  },
  {
    path:'courses',
    component:CoursesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StudentManagementComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
