package com.employee.employee_management_api.repo;

import com.employee.employee_management_api.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<Employee,Long> {
}
