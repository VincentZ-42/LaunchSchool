// let obj = {
//   b: 2,
//   a: 1,
//   c: 3
// };

// console.log(Object.keys(obj).map(key => key.toUpperCase()));

// let myProtoObj = {foo: 1, bar: 2};
// let myObj = Object.create(myProtoObj);
// console.log(myObj);
// myObj.qux = 3;
// console.log(myObj);

// Question 8
function copyObj(obj, includeKeyArr = []) {
  let retObj = {};
  if (includeKeyArr.length === 0) {
    Object.assign(retObj, obj);
  } else {
    includeKeyArr.forEach(key => retObj[key] = obj[key]);
  }
  return retObj;
}

let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, ['foo', 'qux']);
console.log(newObj2);

let newObj3 = copyObj(objToCopy, ['bar']);
console.log(newObj3);