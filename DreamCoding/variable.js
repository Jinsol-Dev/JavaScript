// 1. Use strict
// added in ES 5
// use this for Valina Javascript.
"use strict";

// 2. Variable, rw(read/write) -> 메모리의 값을 읽고 쓰기 가능
// let (added in ES6)
let globalName = "global name";
{
  let name = "lea";
  console.log(name);
  name = "hello";
  console.log(name);
}
// console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 어디에 선언했냐와 상관없이 항상 제일 위로 선언을 끌어올려주는 것을 말한다.
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only) -> 메모리의 값 읽기만 가능
// use const whenever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutaebl data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons:
// - security
// - thread safety (다양한 thread들이 동시에 변수에 접근할 수 있는 위험이 낮아진다.)
// - reduce human mistakes

// 4. Variable types
// primitive, single item: Number, string, Boolean, null, undefined, Symbol
// Object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfonity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfonity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 123456789012345678901234567890n; // over (-2*53) ~ (2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log("value: " + helloBob + " type: " + typeof helloBob);

// boolean
// false: 0, null, undefined, Nan, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects -> 고유한 식별자 생성
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
// error -> TypeError: Cannot convert a Symbol value to a string
// solution -> symbol은 '.description'을 붙여서 출력해야 한다.

// object, real-life object, data structure
const lea = { name: "lea", age: 20 };
lea.age = 21;

// 5. Dynamic typing: dynamically typed language
let text = "hello";
console.log(text.charAt(0)); // h -> string으로 이해하기 떄문에 h가 출력됨
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // number
text = "7" + 5; // 문자열 + 숫자
console.log(`value: ${text}, type: ${typeof text}`); // string
text = "8" / "2"; // 문자열끼리의 나누기 -> 문자열 안의 값은 숫자여서 언어가 숫자들끼의 나누기 실행
console.log(`value: ${text}, type: ${typeof text}`); // number
// console.log(text.charAt(0)); // 중간에 바뀐 타입 모르고 출력하면 error 발생 -> JS는 런타임에서 타입이 정해지기 때문! -> TS 등장하게 된 이유

// 변수
// 변수를 선언함과 동시에 값을 대입하는 행위를 초기화(initialization)라고 한다.
// 변수 선언은 항상 결괏값이 undefined로 출력된다.
// 변수를 선언할 때 값을 대입하지 않으면 기본으로 값이 undefined가 된다.

// 변수는 중복을 줄일 때도 사용한다.
// 나중에 코드를 수정할 때는 string1 변수의 값만 수정하면 변수를 사용하는 부분이 한번에 수정된다.
let string1 = `엄청 긴 문자열 입니다.`;
console.log(string1);
console.log(string1);
console.log(string1);
