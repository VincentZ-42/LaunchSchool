function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${year} year student`);
    },

    addCourse(courseInfo) {
     this.courses.push(courseInfo);
    },

    listCourses() {
     return this.courses;
    },

    addNote(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          course.note = course.note || '';
          if (course.note === '') {
            course.note = note;
          } else {
            course.note += '; ' + note;
          }
        }
      });
    },

    updateNote(code, note) {
      this.courses.forEach(course => {
        if (course.code === code) {
          course.note = note;
        }
      });
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`)
        }
      });
    }
  }
}

class School {
  students = [];

  addStudent(name, year) {
    const years = ['1st', '2nd', '3rd', '4th', '5th'];
    
    if (!years.includes(year)) {
      console.log('Invalid Year');
      return;
    }

    let student = createStudent(name, year);
    this.students.push(student);
    return student;
  }

  enrollStudent(course, ...student) {
    student.forEach(person => {
      person.addCourse(Object.assign({}, course));
    });
  }

  addGrade(code, student, grade) {
    student.courses.forEach(course => {
      if (code === course.code) {
        course.grade = grade;
      }
    });
  }

  getReportCard(student) {
    student.courses.forEach(course => {
      console.log(`${course.name}: ${course.grade ? course.grade : 'In progress'}`);
    });
  }

  courseReport(courseName) {
    // Check if there are grades for course, if none, return undefined
    // Create variable to hold all grades to calculate average later
    // Print out 1st line using input courseName
    // Iterate through students, and only output if
    // - Student is enrolled in course
    // - And student has grade
    // - Store the grade in grades variable
    // Print out ---
    // Compute average and print out

    let grades = [];

    this.students.forEach(student => {
      student.courses.forEach(course => {
        if (course.name === courseName && course.grade) {
          grades.push([student.name, course.grade]);
        }
      });
    });

    if (grades.length < 1) {
      console.log('undefined');
    } else {
      console.log(`=${courseName} Grades=`);
      grades.forEach(element => {
        const name = element[0];
        const grade = element[1];
        console.log(`${name}: ${grade}`);
      });
      console.log('---');
      let average = grades.map(ele => ele[1]).reduce((a, b) => a + b) / grades.length;
      console.log(`Course Average: ${average.toFixed(0)}`);
    }
  }
}

// Create school and students
let school = new School();
let foo = school.addStudent('foo', '3rd');
let bar = school.addStudent('bar', '1st');
let qux = school.addStudent('qux', '2nd');

// create courses
const MATH = { name: 'Math', code: 101 };
const ADVANCEDMATH = { name: 'Advanced Math', code: 102 };
const PHYSICS = { name: 'Physics', code: 103 };

// Enroll students to courses
school.enrollStudent(MATH, foo, bar, qux);
school.enrollStudent(ADVANCEDMATH, foo, qux);
school.enrollStudent(PHYSICS, foo);

// Give students grade for their courses
school.addGrade(101, foo, 95);
school.addGrade(101, bar, 91);
school.addGrade(101, qux, 93);
school.addGrade(102, qux, 90);
school.addGrade(102, foo, 90);

console.log(foo.listCourses());
console.log(bar.listCourses());
console.log(qux.listCourses());

school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');