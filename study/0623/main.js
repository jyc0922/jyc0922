//자바스크립 시작
// alert("Hello World")
// console.log("Hello World")
// document.write("<h1>Document Write</h1>");

//나이 계산
// let currentYear = 2025;
// let birthYear = prompt("당신이 태어난 해를 입력하세요.");
// let age = currentYear - birthYear + 1;
// alert("당신의 나이는 " + age + "살 입니다~");

//변수 타입 확인
// let name = "철수";
// let age = 20;
// let isStudent = true;
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);

// 가격 할인 계산 결과
// let price = 10000;
// let rate = 0.2;
// let discount = price * rate;
// let finalPrice = price - discount;

// console.log("할인된 가격은 " + finalPrice);

// 사용자 이름 출력
// let name = "영희";
// console.log(`안녕하세요, ${name}님!`); 
// console.log("안녕하세요, " + name + "님!");

// 간단한 연산 결과
// let a = 10;
// console.log(a);
// a += 5;
// console.log(a);
// a -= 3;
// console.log(a);
// a *= 2;
// console.log(a);
// a /= 4;
// console.log(a);
// console.log(`최종 값은 ${a} 입니다.`);

//1. 이름과 나이를 입력받아 인사말 출력하기:
// let name = prompt("당신의 이름을 입력하세요~")
// let age = prompt("당신의 나이를 입력하세요")
// alert(`안녕하세요, ${name}님, 당신은 올해 ${age}살 입니다.`)

//2. 두 수를 입력받아 사칙연산 결과를 각각 출력하기:
// let first = Number(prompt("첫번째 숫자를 입력하세요."));
// let second = Number(prompt("두번째 숫자를 입력하세요."));
// let first = prompt("첫번째 숫자를 입력하세요.");
// let second = prompt("두번째 숫자를 입력하세요.");
// let multiply = first * second;
// alert(`${first} 와 ${second}의 곱은 ${multiply}입니다. `);

//3. == vs === 비교실험하기

// 실습: 3의 배수 검사
// let num = prompt("숫자를 입력하세요.");
// if (num % 3 === 0) {
//     alert("3의 배수 입니다.");
// } else{
//     alert("3의 배수가 아닙니다.");
// } 

let day = prompt("요일을 입력하세요.")
switch (day) {
    case "월요일":
        alert("한 주의 시작입니다!");
        break;
    case "금요일":
        alert("불타는 금요일!");
        break;
    default:
        alert("평범한 하루입니다.");
}
