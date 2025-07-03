class Counter {
  static count: number = 0;
  static increase() {
    Counter.count++;
  }
  static getCount() {
    console.log(Counter.count);
  }
}
// let counter1 = new Counter();
// let counter2 = new Counter();
Counter.increase();
Counter.increase();
Counter.getCount();
