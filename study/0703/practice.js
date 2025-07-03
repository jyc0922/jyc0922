// class Person {
//   name: string;
//   age: number;
// }
// let person = new Person();
// person.name = "Alice";
// person.age = 20;
// function introduce(Person) {
//   console.log(`안녕하세요, 저는 ${person.age}살의 ${person.name}입니다.`);
// }
// introduce(person);
// console.log(`안녕하세요, 저는 ${person.age}살의 ${person.name}입니다.`);
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.display = function () {
        console.log("\uC81C\uD488\uBA85: ".concat(this.name, ", \uAC00\uACA9: ").concat(this.price, "\uB9CC\uC6D0"));
    };
    return Product;
}());
var product = new Product();
product.name = "MacBook";
product.price = 150;
product.display();
