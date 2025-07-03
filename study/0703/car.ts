class CarII {
  drive(driver: Driver) {
    console.log(`${driver.name}님 운전을 시작합니다.`);
  }
}

class Driver {
  name: string;
}
let car = new CarII();

// car.drive(new Driver());
let driver = new Driver();
driver.name = "홍길동";
car.drive(driver);
