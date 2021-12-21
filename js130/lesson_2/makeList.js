function makeList() { 
  let list = [];
  return {
    add(str) {
      list.push(str);
      console.log(`${str} added!`)
    },
    
    remove(str) {
      if (list.includes(str)) {
        let index = list.indexOf(str);
        list.splice(index, 1);
        console.log(`${str} removed!`)
      } else {
        console.log(`${task} not in list.`)
      }
    },

    print() {
      if (list.length < 1) {
        console.log('The list is empty');
      } else {
        list.forEach(task => console.log(task));
      }
    },

    includes(str) {
      return list.includes(str);
    }
  };
}

let list = makeList();
list.print();
list.add("make breakfast");
list.add("read book");
list.print();
list.remove("make breakfast");
list.print();
console.log(list.list); // can not access this