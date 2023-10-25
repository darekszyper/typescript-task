import { IEmployee } from "./IEmployee";

export class Frontend implements IEmployee {
  constructor(private name: string, private currentProject: string) {}

  getName(): string {
    return this.name;
  }

  getCurrentProject(): string {
    return this.currentProject;
  }
}

export class Backend implements IEmployee {
  constructor(private name: string, private currentProject: string) {}

  getName(): string {
    return this.name;
  }

  getCurrentProject(): string {
    return this.currentProject;
  }
}
