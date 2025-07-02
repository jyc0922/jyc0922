// 연습1: 문자열 변수 선언
var Name = "Alice";
console.log(Name);
// 연습2: 숫자와 boolean타입
var age = 30;
var isStudent = true;
console.log(age);
console.log(isStudent);
// 연습3: 함수 매개변수와 반환 타입
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
// 연습4: 배열 타입
var scores = [10, 20, 30, 40, 50];
console.log(scores);
// 연습5: 객체 타입 정의
var person = /** @class */ (function () {
    function person() {
    }
    return person;
}());
var newperson = { name: "Alice", age: 30 };
console.log(newperson);
// 연습6: 유니언 타입
var id = 123;
id = "user123";
console.log(id);
