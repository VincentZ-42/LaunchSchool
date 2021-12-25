let Account = (function() {
  return {
    init: function(userEmail, userPassword, userFirstName, userLastName) {
      this.userEmail = userEmail;
      this.userPassword = userPassword;
      this.userFirstName = userFirstName;
      this.userLastName = userLastName;
      this.displayName;
      this.reanonymize(this.userPassword);
      return this;
    },

    reanonymize: function(password) {
      if (password !== this.userPassword) return "Invalid Password";
      let alphabet = 'abcdefghijklmnopqrxtuvwxyz';
      let displayName = "";
      for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * 26);
        displayName += alphabet[randomIndex];
      }
      this.displayName = displayName;
      return true;
    },

    resetPassword: function(password, newPassword) {
      if (password !== this.userPassword) return 'Invalid Password';
      this.userPassword = newPassword;
      return true;
    },

    firstName: function(password) {
      if (password !== this.userPassword) return 'Invalid Password';
      return this.userFirstName;
    },

    lastName: function(password) {
      if (password !== this.userPassword) return 'Invalid Password';
      return this.userLastName;
    },

    email: function(password) {
      if (password !== this.userPassword) return 'Invalid Password';
      return this.userEmail;
    },
  };
})();



let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.userFirstName);
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));                         // returns true
console.log(displayName === fooBar.displayName);   // logs false