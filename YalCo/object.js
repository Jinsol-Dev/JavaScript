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
