/*
  Christina Durr
  11/26/2019
  Lab 7
*/

class Student {
  constructor(studentId, studentName, classes) {
    this.studentId = studentId;
    this.studentName = studentName;
    this.classes = classes;
  }
}

class Course {
  constructor(courseSessionId, courseName) {
    this.courseSessionId = courseSessionId;
    this.courseName = courseName;
  }
}

class Teacher {
  constructor(name, courseSessionId) {
    this.name = name;
    this.courseSessionId = courseSessionId;
  }
}

let courses = [new Course("j1", "Java 101"), new Course("j2", "Java 102"), new Course("j3", "Java 103"), new Course("c1", "C++ 101"), new Course("c2", "C++ 102"), new Course("c3", "C++ 103"), new Course("p1", "Python 101")];

let students = [new Student("1237483", "Jane", [courses[0].courseSessionId, courses[3].courseSessionId, courses[6].courseSessionId]), new Student("1228902", "John", [courses[1].courseSessionId, courses[4].courseSessionId, courses[6].courseSessionId]), new Student("1233389", "Jacob", [courses[2].courseSessionId, courses[5].courseSessionId, courses[6].courseSessionId])]

let teachers = [new Teacher("Mr.Doe", courses[0].courseSessionId), new Teacher("Mrs.Doe", courses[1].courseSessionId), new Teacher("Mr.Clause", courses[2].courseSessionId), new Teacher("Mr.Weir", courses[3].courseSessionId), new Teacher("Mrs.Wonder", courses[4].courseSessionId), new Teacher("Mr.Grim", courses[5].courseSessionId), new Teacher("Mr.Pilk", courses[6].courseSessionId)];

for (let i = 0; i < teachers.length; i++) {
  let count = 0;
  for (let j = 0; j < students.length; j++) {
    if (students[j].classes.includes(teachers[i].courseSessionId)) {
      count++;
    }
  }
  console.log(teachers[i].name + " has " + count + " student(s) in their class.");
}

for (let i = 0; i < students.length; i++) {
  let s = students[i].studentName + "'s teachers are: ";
  for (let j = 0; j < teachers.length - 1; j++) {
    if (students[i].classes.includes(teachers[j].courseSessionId)) {
      s += teachers[j].name + ", ";
    }
  }
  if (students[i].classes.includes(teachers[teachers.length - 1].courseSessionId)) {
    s += teachers[teachers.length - 1].name + ".";
  }
  console.log(s);
}
