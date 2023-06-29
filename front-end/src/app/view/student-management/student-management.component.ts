import { Component } from '@angular/core';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss']
})
export class StudentManagementComponent {

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

  }
}
