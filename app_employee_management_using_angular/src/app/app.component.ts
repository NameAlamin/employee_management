import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "./employee.service";
import {Employee} from "./employee";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private employeeService: EmployeeService){} // inject employeeService Class

  public employees: Employee[] | undefined;

  public getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
      (response) => {this.employees = response},
      (error: HttpErrorResponse) => {alert(error.message)}
    );
  }

  ngOnInit(): void {
    this.getEmployees();
  }



}
