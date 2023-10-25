import { Company } from "./company/Company";
import { Frontend, Backend } from "./company/Roles";

//Frontend employees
const fEmployee1 = new Frontend("John", "SpaceX");
const fEmployee2 = new Frontend("Jack", "SpaceX");
const fEmployee3 = new Frontend("Derek", "NASA");

const company1 = new Company();
company1.addEmployee(fEmployee1);
company1.addEmployee(fEmployee2);
company1.addEmployee(fEmployee3);

console.log(company1);
console.log(company1.getNameList());
console.log(company1.getProjectList());

//Backend employees
const bEmployee1 = new Backend("Bob", "API Development");
const bEmployee2 = new Backend("Ola", "SpaceX");
const bEmployee3 = new Backend("Derek", "SpaceX");

const company2 = new Company();
company2.addEmployee(bEmployee1);
company2.addEmployee(bEmployee2);
company2.addEmployee(bEmployee3);

console.log(company2);
console.log(company2.getNameList());
console.log(company2.getProjectList());
