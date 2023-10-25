import { ILocation } from './ILocation';
import { Employee } from './Employee';

export class CompanyLocationArray implements ILocation {
    private employees: Employee[] = [];

    addPerson(employee: Employee): void {
        this.employees.push(employee);
    }

    getPerson(index: number): Employee {
        return this.employees[index];
    }

    getCount(): number {
        return this.employees.length;
    }
}
