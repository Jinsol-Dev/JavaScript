"use strict";
// object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const lea = new Person("lea", 20);
console.log(lea.name);
console.log(lea.age);
lea.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative!");
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// 3. Fields (public, private) -> 알아만두기. 사용하려면 Babel에서...
// Too soon!
// JavaScript Reference: https://developer.mozilla.org/en-US/d...
class Experiment {
  publicField = 2; // 외부에서 접근 가능
  #privateField = 0; // class 내부에서만 보여지고 접근 가능하고 값 변경 가능
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods -> object에 상관없이 class자체에 연결됨
// Too soon!
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // object명으로 출력 -> undefined
console.log(Article.publisher); // class명으로 출력 -> Dream Coding
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); // 위에서 정의한 부모 methods 호출
    console.log("🔺"); // 새롭게 정의한 methods도 호출
  }
  getArea() {
    return (this.width * this.height) / 2; // 다양성 -> 필요한 함수만 overriding해서 작성 가능
  }

  toString() {
    return `Triangle: color:${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: InstanceOf -> 왼쪽의 object가 오른쪽의 class로 만들어진 것인지 판단
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(rectangle instanceof Object);
