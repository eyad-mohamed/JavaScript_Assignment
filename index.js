// Q1:
let stringToNumber = Number("123") + 7;
console.log(stringToNumber);
// _____________________________________________________________________________________________
// Q2:
let checkVal = (val) => {
  if (!val) {
    return "Invalid";
  } else {
    return val;
  }
};

console.log(checkVal("Eyad"));
// _____________________________________________________________________________________________
// Q3:
for (let num = 1; num <= 10; num++) {
  if (num % 2 == 0) {
    continue;
  }
  console.log(num);
}
// _____________________________________________________________________________________________
// Q4:
let arr = [1, 2, 3, 4, 5];
let evenNumbers = arr.filter((num) => {
  return num % 2 == 0;
});
console.log(evenNumbers);
// _____________________________________________________________________________________________
// Q5:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merg = (arr1, arr2) => {
  return [...arr1, ...arr2];
};
console.log(merg(arr1, arr2));
// _____________________________________________________________________________________________
// Q6:
switch (4) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturady");
    break;
  default:
    console.log("Invalid Day");
    break;
}
// _____________________________________________________________________________________________
// Q7:
let strArray = ["a", "ab", "abc"];
let getLen = strArray.map((str) => {
  return str.length;
});
console.log(getLen);
// _____________________________________________________________________________________________
// Q8:
let chechCalc = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return "Divisible by both";
  } else {
    return "Not divisible by both";
  }
};

console.log(chechCalc(15));
// _____________________________________________________________________________________________
// Q9:
let powNumber = (num) => {
  return (num = num ** 2);
};

console.log(powNumber(5));
// _____________________________________________________________________________________________
// Q10:
const person = {
  name: "Eyad",
  age: 21,
};
let objFormat = (person) => {
  let { name, age } = person;
  return `${name} is ${age} years old`;
};

console.log(objFormat(person));
// _____________________________________________________________________________________________
// Q11:
let sumAll = (...numbers) => {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
};

console.log(sumAll(1, 2, 3, 4, 5));
// _____________________________________________________________________________________________
// Q12:
let sucMsg = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Success");
      resolve();
    }, 3000);
  });
};

await sucMsg();
// _____________________________________________________________________________________________
// Q13:
let largeNum = [1, 3, 7, 2, 4];
let getLarge = (arr) => {
  return Math.max(...arr);
};
console.log(getLarge(largeNum));
// _____________________________________________________________________________________________
// Q14:
let objKeys = {
  name: "Eyad",
  age: 21,
};
let keysFun = (obj) => {
  return Object.keys(obj);
};
console.log(keysFun(objKeys));
// _____________________________________________________________________________________________
// Q15:
let info = "I love JavaScript and Node.JS";
let splitStr = (str) => {
  return str.split(" ");
};
console.log(splitStr(info));
