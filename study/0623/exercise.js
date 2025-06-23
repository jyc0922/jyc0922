// 1. 숫자 계산
let a = 5;
let b = 3;
c = a + b;
alert(`${a}에 ${b}를 더하면 ${c} 입니다.`)

// 2. 이름 출력
let name = "홍길동";
let age = 20;
alert(`${name}님은 올해 ${age}살 입니다.`)

// 3. 정사각형 넓이 계산
let side = 4;
let area = side * side;
alert(`정사각형의 넓이는 ${area} 입니다.`)

// 4. 짝수 홀수 출력
let number = 7;
if (number % 2 ===0) {
    alert("해당 숫자는 짝수입니다.");
} else {
    alert("해당 숫자는 홀수입니다.");
}

// 5. 나이에 따라 문장 출력
age = 16;
if (age < 19) { //미성년자
    alert("미성년자입니다.");
} else { //성인
    alert("성인입니다.");
}

// 6. 비밀번호 확인 코드
let password = "1234";
let input = "1234";
// if (input === password) {
//     alert("로그인 성공!");
// } else {
//     alert("로그인 실패!");
// }
if (password === input) alert("로그인 성공");
else alert("로그인 실패입니다.");