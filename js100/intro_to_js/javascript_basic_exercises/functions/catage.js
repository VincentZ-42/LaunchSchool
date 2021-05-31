function catAge(age) {
  let catAge = 0;
  while (age > 0) { 
    if (catAge === 0) {
      catAge += 15;
    } else if (catAge === 15) {
      catAge += 9;
    } else {
      catAge += 4;
    }
    age--;
  }
  console.log(catAge);
  return catAge;
}

catAge(0);
catAge(1);
catAge(2);
catAge(3);
catAge(4);
