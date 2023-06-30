import { Component } from '@angular/core';
import {Courses} from "../../model/courses";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  coursesList:Array<Courses>=[];
  constructor(private http:HttpClient) {
    http.get<Array<Courses>>(`${environment.API_BASE_URL}/api/v1/courses`).
    subscribe(course=>this.coursesList=course);
  }

}
