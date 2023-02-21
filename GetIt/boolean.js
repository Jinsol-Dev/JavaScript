// undefined & null
console.log("Hello, undefined!");
console.log(!!undefined === false); // true
console.log(undefined === false); // false
console.log(undefined === 0); // false
console.log(undefined === ""); // false

console.log(undefined === null); // false
console.log(undefined == null); // true
console.log(undefined === !!null); // false

console.log(null == false); // false
console.log(null == 0); // false
console.log(null == ""); // false

console.log(typeof null); // object -> JS에서 유명한 버그, 원래는 null이 맞는데, 언어가 만들어진 초창기 실수 때문에 object가 되었다.
