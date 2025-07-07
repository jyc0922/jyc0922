// 구조분해, 스프래드 연산자
const user = {id:1, name: "Kim", age:20, address: "Seoul" };
const updated = {...user, name: "Lee", age:25};
// console.log(updated);

const userArr = [1,2,3,4,5];
const updatedArr = [1, 2, ...userArr, 6,7];
// console.log(updatedArr);

// 구조분해
const userSplit = {id: 1, name: "Kim", age:20, address: "Seoul"};
// const {id, name, age, address} = userSplit;
// console.log(id, name, age);

const {id, name, age, ...rest} = userSplit;
// console.log(id, name, age, rest);

// 1.구조 분해 할당을 이용해 다음 객체에서 `title`과 `author`를 추출해보세요.
const books = {title: "sapiens", author: "Yuval Noah Harari"};
const {title, author} = books;
console.log(title);
console.log(author);
console.log(title, author);

const {title: title2, author: author2} = books;
console.log(title2);
console.log(author2);