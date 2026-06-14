// OOP Inheritance - Person (parent) with Student, Teacher, and Principal children.

class Person {
  constructor(name, startYear) {
    this.name = name;
    this.startYear = startYear;
    this.courses = [];
  }
  addCourse(course) {
    this.courses.push(course);
  }
}

class Student extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.grades = [];
  }
  receiveGrade(courseName, finalGrade) {
    this.grades.push({ course: courseName, grade: finalGrade });
  }
}

class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(name, startYear);
    this.salary = salary;
  }
}

class Principal extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.teachers = [];
    this.students = [];
  }

  hireTeacher(teacher) {
    this.teachers.push(teacher);
    console.log(`${this.name} just hired ${teacher.name}`);
  }

  recruitStudent(student) {
    this.students.push(student);
  }

  expelStudent(student) {
    this.students = this.students.filter((s) => s.name !== student.name);
  }

  transferStudent(student, otherPrincipal) {
    this.students = this.students.filter((s) => s.name !== student.name);
    otherPrincipal.students.push(student);
  }
}

// --- tests from the exercise ---
const p1 = new Principal("Martin", 1991);
const p2 = new Principal("Martha", 1990);

const t1 = new Teacher("Cassandra", 2002, 40000);
const t2 = new Teacher("Kevin", 2006, 30000);

const s1 = new Student("Ronda", 2017);
const s2 = new Student("Byron", 2016);

p1.hireTeacher(t1); // Martin just hired Cassandra
console.log(p1.teachers.length); // 1
p1.hireTeacher(t2); // Martin just hired Kevin
console.log(p1.teachers.length); // 2

p1.recruitStudent(s1);
p1.recruitStudent(s2);
console.log(p1.students.length); // 2

p1.expelStudent(s1);
console.log(p1.students.map((s) => s.name)); // ['Byron']

p1.transferStudent(s2, p2);
console.log(p1.students.length); // 0
console.log(p2.students.map((s) => s.name)); // ['Byron']
