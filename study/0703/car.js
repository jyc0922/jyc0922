var CarII = /** @class */ (function () {
    function CarII() {
    }
    CarII.prototype.drive = function (driver) {
        console.log("".concat(driver.name, "\uB2D8 \uC6B4\uC804\uC744 \uC2DC\uC791\uD569\uB2C8\uB2E4."));
    };
    return CarII;
}());
var Driver = /** @class */ (function () {
    function Driver() {
    }
    return Driver;
}());
var car = new CarII();
// car.drive(new Driver());
var driver = new Driver();
driver.name = "홍길동";
car.drive(driver);
