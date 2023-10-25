import { ILocation } from "./ILocation";
import { Employee } from "./Employee";

export class CompanyLocationLocalStorage implements ILocation {
  private getEmployeesFromLocalStorage(): any[] {
    return JSON.parse(localStorage.getItem("employees") || "[]");
  }

  addPerson(employee: Employee): void {
    const currentData = this.getEmployeesFromLocalStorage();
    currentData.push({
      name: employee.getName(),
      currentProject: employee.getCurrentProject(),
    });
    localStorage.setItem("employees", JSON.stringify(currentData));
  }

  getPerson(index: number): Employee {
    const employees = this.getEmployeesFromLocalStorage();
    const data = employees[index];
    if (data) {
      return new Employee(data.name, data.currentProject);
    }
    throw new Error("Employee not found");
  }

  getCount(): number {
    const employees = this.getEmployeesFromLocalStorage();
    return employees.length;
  }
}
