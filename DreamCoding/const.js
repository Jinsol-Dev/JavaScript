// 상수 -> 담긴 값이 바뀔 수 없는 주머니
// const 사용
// 흔히 대문자로 명명 - 여러 곳에서 사용될 공통 값인 경우

// 1. 상수를 선언과 동시에 초기화
// const PI = 3.14;
// console.log("원주율:", PI);

// 2. 선언하기만 하는 것 불가
// const PI;
// PI = 3.14;

// 3. 상수는 값의 변경 불가 -> 따라서 값이 바뀔 일이 없는 데이터는 상수로 선언할 것
// const PI = 3.14;
// PI = 3.14159;

// 4. 여러 변수와 상수 동시에 선언
// let a = 1;
// let b = 2;
// ...

// let a = 1,
//   b = 2,
//   c = 3;
// const X = 4,
//   Y = 5,
//   Z = 6;

// console.log(a, b, c);
// console.log(X, Y, Z);

// 5. 브라우저 콘솔로 실습시 특이사항
// let x = 1;
// let x = 2;
// 독립된 시행에서 같은 이름의 변수나 상수 재선언 가능
// 단, 변수를 상수로, 상수를 변수로 재선언하면 오류 -> 새로고침 필요

// 6. 식별자 (상수와 변수 등의 이름)
// 숫자로 시작 불가, 공백 사용 불가
// 예약어 (변수명이나 상수명으로 쓸 수 없는 것들)
// const let = 1
// let typeof = 2
// 한글 변수/상수 사용 가능
