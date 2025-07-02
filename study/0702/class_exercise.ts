// 연습1: 문자열 변수 선언
let Name: string = "Alice";
console.log(Name);

// 연습2: 숫자와 boolean타입
let age: number = 30;
let isStudent: boolean = true;
console.log(age);
console.log(isStudent);

// 연습3: 함수 매개변수와 반환 타입
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(10, 20));

// 연습4: 배열 타입
let scores: Array<number> = [10, 20, 30, 40, 50];
console.log(scores);

// 연습5: 객체 타입 정의
class person {
  name: string;
  age: number;
}
const newperson: person = { name: "Alice", age: 30 };
console.log(newperson);

// 연습6: 유니언 타입
let id: number | string = 123;
id = "user123";
console.log(id);
