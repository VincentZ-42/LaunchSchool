function Contact(name, gender) {
  this.name = name;
  this.gender = gender;
}

Contact.prototype.hasName = function(name) {
  if (name === this.name) return true;
}

let contacts = {
  list: [],
  add(name, gender) {
    let contact = new Contact(name, gender);
    this.list.push(contact);
  },
  males() {
    return this.list.filter(function(contact) {
      return contact.gender === 'male';
     });
  },
  females() {
    return this.list.filter(function(contact) {
      return contact.gender === 'female';
    });
  },
  filterByName(name) {
    return this.list.filter(function(contact) {
      return contact.hasName(name);
    });
  },
};

contacts.add('Will', 'male');
contacts.add('Smith', 'male');
contacts.add('Vincent', 'male');
contacts.add('Zhao', 'male');
contacts.add('Sarah', 'female');
contacts.add('Ashley', 'female');
console.log(contacts.list);
console.log(contacts.males());
console.log(contacts.females());
console.log(contacts.filterByName('Wi'));
console.log(contacts.filterByName('Will'));
console.log(contacts.filterByName('Will')[0] instanceof Contact);