// need to know more : 자료구조와 알고리즘
// array , index[0~]
"use strict";

// Array🎉

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); // 마지막 배열에 접근하는 방법 ( 총 길이 - 1 = 배열의 마지막 인덱스를 나타내게 됨)

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// forEach는 배열 안에 들어있는 value들 마다, 내가 전달한 함수를 출력하는군!
fruits.forEach((fruit, index) => console.log(fruit));

// 4. Addtion, deletion, copy
// push: add an item to the end
fruits.push("🍓", "🍑");
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("🍓", "🍋");
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than pop, push
// splice: remove an item by index position
fruits.push("🍓", "🍑", "🍋");
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, "🍉", "🍎");

// combine two arrays
const fruits2 = ["🍉", "🍐"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf("🍎"));
console.log(fruits.indexOf("🍉"));
// includes
console.log(fruits.includes("🥥"));
console.log(fruits.indexOf("🥥"));

// lastIndexOf
console.clear();
fruits.push("🍎");
console.log(fruits);
console.log(fruits.indexOf("🍎")); // indexOf는 제일 첫번쨰로 해당하는 값을 만나면 그 값이 들어있는 인덱스를 리턴
console.log(fruits.lastIndexOf("🍎")); // 제일 마지막의 값을 리턴
