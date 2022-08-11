import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "./employee.service";
import {Employee} from "./employee";
import {HttpErrorResponse} from "@angular/common/http";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{

  constructor(private employeeService: EmployeeService){} // inject employeeService Class

  public employees?: Employee[];
  public editEmployee?: Employee | null;
  public deleteEmployee?: Employee | null;

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
      (response) => {this.employees = response},
      (error: HttpErrorResponse) => {alert(error.message)}
    );
  }

  // Add Employee Functionality
  public onAddEmployee(addForm: NgForm): void{
    document.getElementById('employee-btn-close')?.click(); // this line need for close modal after click submit button
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response:Employee) => {
        console.log(response);
        this.getEmployees();
        addForm.reset();
      },
    (error: HttpErrorResponse) => {alert(error.message)}
    );
  }

  // Edit Employee Functionality
  public onUpdateEmployee(employee: Employee): void {
    document.getElementById('edit-btn-close')?.click(); // this line need for close modal after click submit button
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // Delete Employee
  onDeleteEmployee(employeeId: number): void{
    this.employeeService.deleteEmployee(employeeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getEmployees();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  // this method use for action add,edit and delete button
  public onOpenModal(employee: Employee | null, mode: string): void{
    const container = document.getElementById('main_container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');

    if(mode === 'add'){
      button.setAttribute('data-target','#addEmployeeModal');
    }
    if(mode === 'edit'){
      this.editEmployee = employee;
      button.setAttribute('data-target','#updateEmployeeModal');
    }
    if(mode === 'delete'){
      this.deleteEmployee = employee;
      button.setAttribute('data-target','#deleteEmployeeModal');
    }
    container?.appendChild(button);
    button.click();

  }



}
