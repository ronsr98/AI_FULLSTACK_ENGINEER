// OOP Basics - OfficeChallenge. Classes derived from the Jasmine spec / UML.

class Document {
  constructor(EmployeeName) {
    this.EmployeeName = EmployeeName;
  }
}

class Employee {
  constructor(name) {
    this.name = name;
  }
  // create 10 documents (with this employee's name) into the office
  work(office) {
    for (let i = 0; i < 10; i++) {
      office.documents.push(new Document(this.name));
    }
  }
}

class Manager {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }
  hireEmployee(name) {
    this.employees.push(new Employee(name));
  }
  askEmployeesToWork(office) {
    this.employees.forEach((employee) => employee.work(office));
  }
}

class Cleaner {
  constructor(name) {
    this.name = name;
  }
  clean() {
    console.log("Clean");
  }
}

class Office {
  constructor() {
    this.documents = [];
    this.managers = [];
    this.cleaners = [];
  }
  hireManager(name) {
    this.managers.push(new Manager(name));
  }
  hireCleaner(name) {
    this.cleaners.push(new Cleaner(name));
  }
  startWorkDay() {
    this.managers.forEach((manager) => manager.askEmployeesToWork(this));
  }
}

// export for the Node verification (the browser SpecRunner doesn't need this)
if (typeof module !== "undefined") {
  module.exports = { Document, Employee, Manager, Cleaner, Office };
}
