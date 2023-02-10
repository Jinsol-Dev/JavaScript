// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax (괄호를 이용해서 만드는 방법)
const obj2 = new Object(); // 'object constructor' syntax (new를 붙여서 만드는 방법)

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const lea = { name: "lea", age: 4 }; // 클래스가 없어도 괄호를 이용해서 바로 object를 생성할 수 있다.
print(lea);

// with JavaScript magic (dynamically typed language)
// can add properties later
lea.hasJob = true; // 가능하면 피해야 하는 방법
console.log(lea.hasJob);

// can delete properties later
delete lea.hasJob;
console.log(lea.hasJob);

// 2. Computed properties
// key should be always string
console.log(lea.name); // object는 . 으로 접근 가능 -> 코딩하는 그 순간 키에 해당하는 값을 받아오고 싶을 때 사용
console.log(lea["name"]); // 정확하게 어떤 키가 필요한 지 모를때, 런타임에서 정해질 때 computed properties 사용 (실시간 key값 받아올 떄)
lea["hasJob"] = true;
console.log(lea.hasJob);

function prinValue(obj, key) {
  console.log(obj[key]); // object에 key라는 property가 들어있니? 아닝 -> 그래서 이때에는 computed property 사용해야 한다.
}
prinValue(lea, "name");
prinValue(lea, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("lea", 30);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  // this = {}
  this.name = name;
  this.age = age;
  // return this
}

// 5. in operator: property existence check (key in obj) -> 해당하는 object 안에 key가 있는지 없는지 확인하는 것
console.log("name" in lea);
console.log("age" in lea);
console.log("random" in lea);
console.log(lea.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in lea) {
  // lea 가 갖고 있는 key들이 블록을 돌 때마다 지역변수에 할당이 된다.
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "lea", age: "20" };
const user2 = user; // user1에 있는 ref값이 가리키는 값을 user2도 동일하게 가리킴.
// user2.name = "coder";
console.log(user); // user2가 가리키던 값을 변경해서 user가 가리키는 값도 변경됨

// obj를 복사할 수 있는 방법이 있을까 ? (old way)
const user3 = {};
for (key in user) {
  // user안에 있는 key들을 뱅글뱅글 돌면서, 첫번째 key는 name, 두번째 key는 age 를
  user3[key] = user[key]; // 매뉴얼대로, 순서대로 복사하는 방법
}
console.clear();
console.log(user3);

// const user4 = {};
// Object.assign(user4, user); // Javascript의 모든 object는 이 obj를 상속한다.
// console.log(user4);
const user4 = Object.assign({}, user);
console.log(user4);

// anpther example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const fruit3 = { color: "black" };
const mixed = Object.assign({}, fruit1, fruit2, fruit3); // 뒤에 나오는 값이 앞에 동일한 property에 값을 덮어 씌운다.
console.log(mixed.color); // black (색상 property가 있기 떄문에 나중에 나온 blue가 덫씌워짐)
console.log(mixed.size); // big
