// 1.
async function runSequentially(functions) {
  const resolveLists = [];
  for (const fu of functions) {
    resolveLists.push(await fu());
  }
  return resolveLists;
}

let counter = 1;
function incrementCounterAsync() {
  return new Promise((resolve, reject) => {
    counter += 1;
    resolve(counter);
  });
}
let promise = runSequentially([incrementCounterAsync, incrementCounterAsync]);
if (promise) {
  promise
    .then((result) => console.log(result))
    .catch((error) => console.log("Error: " + error));
}
module.exports.runSequentially = runSequentially;

// 4.
function numberOfItems(arr, item) {
  // Write the code that goes here
}

var arr = [25, "apple", ["banana", "strawberry", "apple", 25]];
console.log(numberOfItems(arr, 25));
console.log(numberOfItems(arr, "apple"));

// 6.
function findAllHobbyists(hobby, hobbies) {
  let names = [];
  index = 0;

  return [];
}

var hobbies = {
  Steve: ["Fashion", "Piano", "Reading"],
  Patty: ["Drama", "Magic", "Pets"],
  Chad: ["Puzzles", "Pets", "Yoga"],
};

console.log(findAllHobbyists("Yoga", hobbies));

hobbies.forEach((element) => console.log(element));
