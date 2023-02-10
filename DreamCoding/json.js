// JSON
// .simplest data interchange format
// .lightweight text-based structure
// .easy to read
// .key-value pairs
// .used for serialization adn transmission of data between the network the network connection
// .independent programming language and platform

// JavaScript Object Notaion

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]); // 배열처럼 보이면서 double-quote를 사용하는 return 값을 볼 수 있는데 -> JSON의 규격이기 때문!
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  // json에 포함되지 않는 jump 함수 -> obj에 있는 함수가 아니기 때문.
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

// json = JSON.stringify(rabbit);
// console.log(json);

json = JSON.stringify(rabbit, ["name"]); // 원하는 properpty만 골라서 사용 가능
console.log(json);

// 콜백함수를 이용해서 세밀하게 사용 가능
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "name" ? "lea" : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});

console.log(obj);
// rabbit.jump();
// obj.jump();

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // birthDate는 string이 obj에 할당됨
console.log(obj.birthDate.getDate()); // string
