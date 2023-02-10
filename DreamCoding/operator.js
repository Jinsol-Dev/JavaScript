// 1. String concatenation
console.log("my" + " cat");
console.log("1" + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // mutiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators (++,--)
let counter = 2;

const preIncrement = ++counter; // 3
// counter = counter + 1
// preIncrement = counter
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; // 3을 Increment에 할당
// postIncrement = counter
// counter = counter + 1 -> 4
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
console.log((x += y)); // x = x + y  9
console.log((x -= y)); // x = x - y  3
console.log((x *= y)); // x = x * y  18
console.log((x /= y)); // x = x / y  3

// 5. Comparison operators
console.log(10 < 6); // less than (작거나)
console.log(10 <= 6); // less than or equal (작거나 같거나)
console.log(10 > 6); // greater than (크거나)
console.log(10 >= 6); // greater than or equal (크거나 같거나)

// 6. Logical operatos: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: {$value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: {$value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log("😮");
  }
  return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const lea1 = { name: "lea" };
const lea2 = { name: "lea" };
const lea3 = lea1;
console.log(lea1 == lea2); // false
console.log(lea1 === lea2); // false
console.log(lea1 === lea3); // true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // true -> false (0은 boolean type 아님)
console.log("" == false); // true
console.log("" === false); // true -> false (empty 문자열은 boolean type 아님)
console.log(null == undefined); // true
console.log(null === undefined); // true -> false (null 과 undefined는 다른 type)

// 8. Conditional operators: if
// if, else if, else
const name = "ㅇㅇ";
if (name === "lea") {
  console.log("Welcome, Lea!");
} else if (name === "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unkwown");
}

// 9. Ternary operator: ?
// condition ? value1 : value2
console.log(name === "lea" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type check in TS
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Fire fox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truty,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}

// break, continue
// Q1. itereate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1. ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2. ${i}`);
}
