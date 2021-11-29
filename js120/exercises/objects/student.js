function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      // logs name and year of student
      console.log(`${this.name} is a ${year} year student`);
    },

    addCourse(courseInfo) {
      /*  Enrolls student in a course
        Input: 
          - Object literal with name and code
        Output:
          - None
      */
     this.courses.push(courseInfo);
    },

    listCourses() {
      /* Returns a list of courses student is enrolled in
      */
     return this.courses;
    },

    addNote(code, note) {
      /* Adds note property to a course
      Input:
        - code (of course)
        - note (if note exists, append this to note property)
      output:
        - None
      */
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
      /* Updates a note for a course, replacing old with new input
      Input:
        - note String
      Output:
        - None
      */
      this.courses.forEach(course => {
        if (course.code === code) {
          course.note = note;
        }
      });
    },

    viewNotes() {
      // Logs notes for all courses. Courses without notes are not displayed
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`)
        }
      });
    }
  }
}


let foo = createStudent('Foo', '1st');
foo.info();   // "Foo is a 1st year student"
foo.listCourses();  // [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();  // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();  // "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();  // "Math: Fun course; Remember to study for algebra"   // "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();  // "Math: Fun course"  // "Advanced Math: Difficult subject"