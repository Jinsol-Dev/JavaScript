class Counter {
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() {
    this.counter++;
    console.log(this.counter);
    if (this.counter % 5 === 0) {
      this.callback && this.callback(thi.counter);
      // if (this.callback) {
      //   this.callback(this.counter);
      // }
    }
  }
}
function printSomething(num) {
  console.log(`Wow! ${num}`);
}
function alertNum(num) {
  alert(`alert! ${num}`);
}

const coolCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();
// coolCounter.increase();

// class를 완성형으로 만드는 것 보다
// 레고로 조립해서 원하는 것을 만드는 처럼 원하는 것을 끼워맞추서 재조립하는게 좋다.
// 포인터로 전달되어서 같은 함수를 가리키고 등록된 콜백이 있으면 그 콜백을 실행하는 개념을 이해하는 것이 중요하다.
