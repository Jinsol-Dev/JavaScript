// 객체 미리보기
// 자바스크립트에서 원시 타입이 아닌 모든 데이터는 근본적으로 객체
// 복합적인 정보를 프로퍼티 property(키와 값의 조합)로 저장하는 자료형
const person1 = {
  name: "김철수",
  age: 25,
  married: false,
};

console.log(typeof person1);
console.log(person1);

// 1. 프로퍼티 접근
// 속성값에 접근하는 두 방법
console.log(person1.name, person1.age, person1.married);

console.log(
  person1["name"], // 속성명을 string으로
  person1["age"],
  person1["married"]
);

// 존재하지 않는 키로 접근 시 -> undefined 반환
console.log(person1.birthdate);
console.log(person1["job"]);

// (키) in (객체) -> 특정 키 포함 여부 확인
console.log("age" in person1, "job" in person1);

// 2. 프로퍼티 수정 및 추가
// 특정 프로퍼티의 값 변경
person1.age = 26;
person1["married"] = true;

console.log(person1);

// 새 프로퍼티 추가
person1.job = "developer";
person1["bloodtype"] = "AB";

console.log(person1);
// const 임에도 그 내용은 수정할 수 있음에 주목!

// -------------------------------------------------

// 객체의 기본 사용법들
// 1. 객체 생성과 프로퍼티 접근
const food1 = {
  name: "햄버거",
  price: 5000,
  vegan: false,
};

console.log(food1);

console.log(
  food1.name, // 💡 마침표 프로퍼티 접근 연산자
  food1["price"] // 💡 대괄호 프로퍼티 접근 연산자
);

// 빈 객체 생성
const food2 = {};
console.log(food2);

// 프로터피 추가
food2.name = "샐러드";
food2.price = "6000";
food2["vegan"] = true;

console.log(food2);

// 프로터피 수정
food2["price"] = "6500";
food2.vegan = false;

console.log(food2);

// --------------------------------------------------

// 💡식별자 명명 규칙에 벗어나는 키 이름 사용시
// 변수명 등으로 사용할 수 없는 이름의 키인 경우
// 👉 식별자 명명 규칙 MDN 문서 참고

const obj = {
  1: "하나", // 숫자도 객체의 키로는 사용 가능
  "ab-cd": "ABCD", // 문자 포함 시 키도 따옴표로 감싸야 함
  "s p a c e": "Space",
};

// 대괄호 프로퍼티 접근 연산자로만 가능
console.log(obj[1], obj["ab-cd"], obj["s p a c e"]);

// ⚠️ 오류 발생
// console.log(
//   obj.1,
//   obj.ab-cd,
//   obj.s p a c e
// );

// 표현식으로 키값 정의하기
// 대괄호 [] 사용
let idx = 0;
const obj1 = {
  ["key-" + ++idx]: `value-${idx}`,
  ["key-" + ++idx]: `value-${idx}`,
  ["key-" + ++idx]: `value-${idx}`,
  [idx ** idx]: "POWER",
};

console.log(obj1);

// ⚠️ 객체나 배열을 키값으로 사용시
const objKey = { x: 1, y: 2 };
const arrKey = [1, 2, 3];

const obj2 = {
  [objKey]: "객체를 키값으로",
  [arrKey]: "배열을 키값으로",
};

console.log(obj[objKey], obj[arrKey]);

// ⚠️ ???????
console.log(
  obj[{ a: 1, b: 2, c: 3 }], // 내용이 다른 객체
  obj["1,2,3"] // 문자열
);

// 로그를 펼쳐 키값을 볼 것 - 💡 문자열임
// 객체와 배열이 그 자체가 아니라 문자열로 치환되어 키가 되는 것
console.log(obj);

console.log(obj["[object Object]"]);

// 즉 실제로 해당 객체나 배열의 내용이나 참조값이 키가 되는 것이 아님
// 이후 배울 Map ( 참조값을 키값으로 사용 )과의 차이점

// --------------------------------------------------------------------

// 🗑 프로퍼티 삭제 - delete 연산자
const person1 = {
  name: "홍길동",
  age: 24,
  school: "한국대",
  major: "컴퓨터공학",
};

console.log(person1);

delete person1.age;
console.log(person1);

delete person1["major"];
console.log(person1);

// 💡 오류가 발생하지는 않음
delete person1.hobby;
console.log(person1);

// --------------------------------------------------------------------

// 키의 동적 사용
const product1 = {
  name: "노트북",
  color: "gray",
  price: 800000,
};

function addModifyProperty(obj, key, value) {
  // obj.key = value; // ⚠️ 의도와 다른 작업 수행
  obj[key] = value;
}
function deleteProperty(obj, key) {
  // delete obj.key // ⚠️ 의도와 다른 작업 수행
  delete obj[key];
}

addModifyProperty(product1, "inch", 16);
console.log(product1);

addModifyProperty(product1, "price", 750000);
console.log(product1);

deleteProperty(product1, "color");
console.log(product1);
