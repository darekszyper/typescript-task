export class Employee {
  constructor(private name: string, private currentProject: string) {}

  getName(): string {
    return this.name;
  }

  getCurrentProject(): string {
    return this.currentProject;
  }
}
