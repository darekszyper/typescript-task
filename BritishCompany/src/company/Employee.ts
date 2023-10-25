export class Employee {
  constructor(private name: string, private currentProject: string) {}

  setCurrentProject(currentProject: string): void {
    this.currentProject = currentProject;
  }

  getName(): string {
    return this.name;
  }

  getCurrentProject(): string {
    return this.currentProject;
  }
}
