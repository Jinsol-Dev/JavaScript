// 🔧 콘솔에 데이터 출력해보기
console.log("로그에 출력할 값");
console.log(1, 2, 3);

console.log("Hello World!");
console.log(1);
console.log(true);
console.log({ name: "홍길동", age: 20, married: false });
console.log("Hi!", 100, true, [1, 2, 3]);

// console -> 환경의 기능 (자바스크립트의 기능 X)
// 브라우저 : web API 기능 중 하나
// node.js : 디버깅을 위한 모듈, 브라우저의 콘솔과 유사하게 동작
// 흔히 활용되는 console 기능들
console.log("로그 - 기본적인 출력");
console.info("로그 - 기능적으로는 log와 같음. 사용하기에 따라 용도 구분 가능");
console.warn("경고 - 문제가 될 수 있는 부분");
console.error("오류 - 에러 발생 상황");

// 자바스크립트 런타임 환경(runtime environment)
// 자바스크립트 코드를 실행할 수 있는 소프트웨어
// 컴퓨터가 회사라면, JS는 언어를 구사하는 직원
// 대표적으로 브라우저와 node.js 등이 있음
// 콘솔 등은 자바스크립트 런타임 환경의 기능
