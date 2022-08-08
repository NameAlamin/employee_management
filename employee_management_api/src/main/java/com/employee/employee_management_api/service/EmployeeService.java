package com.employee.employee_management_api.service;

import com.employee.employee_management_api.model.Employee;
import com.employee.employee_management_api.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class EmployeeService {
    private final EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

    // Operations = findAll, add, update, delete, findById

    public List<Employee> findAllEmployee(){
        return employeeRepo.findAll();
    }

    public Employee addEmployee(Employee employee){
        employee.setEmployeeCode(UUID.randomUUID().toString());
        return employeeRepo.save(employee);
    }

    public Employee updateEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public void deleteEmployee(Long id){
        employeeRepo.deleteById(id);
    }

}
