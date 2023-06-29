import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../../model/student";

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss']
})
export class StudentManagementComponent {

  studentList:Array<Student>=[];

  constructor(private http:HttpClient,private student:Student) {

  }

  studentAdd(txtName: HTMLInputElement, txtAddress: HTMLInputElement, $event: MouseEvent) {
    $event.preventDefault();
    const name=txtName.value.trim();
    const address=txtAddress.value.trim();
    const regxName=/^[A-Za-z ]+$/
    const regxAddress=/^([A-Za-z0-9 ]){3,}/
    if(!name ||!regxName.test(name)){
      txtName.select();
      alert("Name can't be empty or Can't give numbers")
      return
    }
    if(!address ||!regxAddress.test(address)){
      txtAddress.select();
      alert("Please enter maximum 3 characters for the address")
      return
    }
    const newStudent=new Student(0,name,address);
    this.http.post('http://localhost:8080/api/v1/student',newStudent).subscribe(result=>{
      this.studentList.push(newStudent);
      txtName.value='';
      txtAddress.value='';
      txtName.focus();
    },error => {

    })

  }
}
