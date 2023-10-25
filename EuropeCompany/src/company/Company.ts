import { Employee } from "./Employee";

export class Company {
  private employees: Employee[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  getProjectList(): string[] {
    return this.employees.map((employee) => employee.getCurrentProject());
  }

  getNameList(): string[] {
    return this.employees.map((employee) => employee.getName());
  }
}
