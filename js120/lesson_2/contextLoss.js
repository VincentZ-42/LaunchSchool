let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
      return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  },
};

function logReturnVal(func, context) {
  // func = func.bind(context);
  // let returnVal = func.call(context);
  let returnVal = func();
  console.log(returnVal);
}

// If we want getDescription to only execute with turk as its execution context
// logReturnVal(turk.getDescription.bind(turk));

logReturnVal(turk.getDescription, turk);