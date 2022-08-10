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

  public employees: Employee[] | undefined;


  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
      (response) => {this.employees = response},
      (error: HttpErrorResponse) => {alert(error.message)}
    );
  }



  // this method use for action add,edit and delete button

  public onOpenModal(employee: Employee|null, mode: string): void{
    const container = document.getElementById('main_container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle','modal');

    if(mode === 'add'){
      button.setAttribute('data-target','#addEmployeeModal');
    }
    if(mode === 'edit'){
      button.setAttribute('data-target','#updateEmployeeModal');
    }
    if(mode === 'delete'){
      button.setAttribute('data-target','#deleteEmployeeModal');
    }
    // @ts-ignore
    container.appendChild(button);
    button.click();

  }



}
