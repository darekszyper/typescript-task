import { Employee } from "./Employee";
import { ILocation } from "./ILocation";

export class Company<T extends ILocation> {
  constructor(private location: T) {}

  add(employee: Employee): void {
    this.location.addPerson(employee);
  }

  getProjectList(): string[] {
    return Array.from({ length: this.location.getCount() }, (_, i) =>
      this.location.getPerson(i).getCurrentProject()
    );
  }

  getNameList(): string[] {
    return Array.from({ length: this.location.getCount() }, (_, i) =>
      this.location.getPerson(i).getName()
    );
  }
}
