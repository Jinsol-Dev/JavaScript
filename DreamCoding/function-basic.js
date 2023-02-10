// Don't give up
// 포기하기 마세요 🙌

// 함수 선언
function doSomething(add) {
  console.log(add);
  const result = add(2, 3);
  console.log(result);
}

function add(a, b) {
  const sum = a + b;
  return sum;
}

// 함수 호출
// doSomething(add); // 함수의 이름만 전달하기

const addFun = add;
console.log(addFun);
addFun(1, 2);

// 함수를 선언하고 호출
// 호출할 때에는 항상 '괄호()' 를 사용해야 한다.
// 괄호() 를 사용하지 않으면 함수 자체를 전달하는 것이다.
// 함수를 호출할 때에는 함수마다 정의된 '인자' 값들을 정확히 전달해야 한다.
// 함수의 이름만 변수에 할당하고 함수에 전달하면 함수 자체를 전달한다.

// 항상 새로운 것을 배우는 건 어렵고 와닿지 않는게 당연한 것이다.
// 눈으로 (console.log) 확인해가면서 연습해보자!
