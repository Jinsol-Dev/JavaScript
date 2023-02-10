// Q1. make a string out of an array -> '_ , _ ' (배열을 문자열로 변환)
{
  const fruits = ["apple", "banana", "orange"];
  const result = fruits.join(",");
  console.log(result);
}

// Q2. make an array out of a string -> 문자열을 배열로 변환
{
  const fruits = "🍎, 🥝, 🍌, 🍒";
  const result = fruits.split(","); // split은 구분자를 반드시 넣어야 한다.
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse(); // return 값과 함수를 호출한 array 자체의 배열을 모두 바꿈
  console.log(result);
  console.log(array);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result1 = array.splice(0, 2); // 인덱스 0번째부터 2개의 숫자 삭제의미
  console.log(result1); // 삭제된 2개의 값 return
  console.log(array); // 본래의 배열에서 삭제되고 남은 3개의 값 return

  // point! array 자체를 변경하지 않고 새로운 array를 만들어야 한다!
  // return하고 싶은 값의 인덱스 입력
  // 3부터 5를 출력하고 싶으니까 3의 인덱스 2, 5의 인덱스 값 4
  // splice는 마지막 인덱스 값은 배제(exclusive)하고 출력하기 때문에 5를 입력해서 인덱스 4의 값 출력
  const result2 = array.slice(2, 5);
  console.log(result2);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
{
  //   const result = students.find(function (student) {
  //     // console.log(student, index);
  //     return student.score === 90;
  //   });
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
  console.clear();
  const result1 = students.some((student) => student.score < 50);
  console.log(result1);

  const result = students.every((student) => student.score >= 50);
  console.log(result);
}

// Q9. compute students' average score
{
  //   const result = students.reduce((prev, curr) => {
  //     console.log("---------");
  //     console.log(prev);
  //     console.log(curr);
  //     return prev + curr.score;
  //   }, 0);
  //   console.log(result);

  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
