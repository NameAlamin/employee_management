package com.employee.employee_management_api.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "employee_table")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "Name")
    private String name;

    @Column(name = "Email")
    private String email;

    @Column(name = "Job_title")
    private String jobTitle;

    @Column(name = "Phone")
    private String phone;

    @Column(name = "Image_Url")
    private String imageUrl;

    @Column(name = "Employee_Code")
    private String employeeCode;
}
