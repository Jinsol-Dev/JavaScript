// async & await
// clear stype of using promise :)

// 1. async
// async 를 함수 앞에 붙이면 코드블럭이  promise로 자동 변환된다!
async function fetchUser() {
  //   return new Promise((resolve, reject) => {
  // do network request in 10 secs...
  return "lea";
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000); // delay가 끝날때까지 3초 기다린 후에
  return "🍎"; // 사과 return
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

// function pickFruits() {
//   return getApple().then((apple) => {
//     return getBanana().then((banana) => `${apple} + ${banana}`);
//   });
// }
async function pickFruits() {
  const applePromise = getApple(); // 병렬적으로 기능 가능
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// chaining을 활용한 코드
// function getBanana() {
//   return delay(3000).then(() => "🍌");
// }

// 3. useful Promise APIs (유용한 promise)
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(
    (fruits) => fruits.join(" + ") //받아진 배열을 묶을 수 있는 join
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
