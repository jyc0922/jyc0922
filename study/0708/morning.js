// 컬렉션 Map, Set
// const set = new Set([1,2,3,4,5,6,7,8,9])
// set.add(4);
// const map = new Map();
// map.set("name", "lee");
// console.log(map.get("name"));

// 고차 배열 매서드 map filter reduce find some every flat flatMap
// const nums = [1,2,3,4,5,6,7,8,9];

// const squares = nums.map(num => num * num);
// console.log("squares =>", squares);

// const evens = nums.filter(num => num % 2 === 0);
// console.log("evens ==>", evens);

// const sum = nums.reduce((acc, num) => acc + num, 0);
// console.log("sum ===>", sum);

// const found = nums.find(num => num % 3 === 0);
// console.log("found ====>", found);

// const hasNegative = nums.some(num => num < 0);
// console.log("hasNegative =====>", hasNegative);

// const multiofThree = nums.every(num => num % 3 === 0);
// console.log("mulultiofThree ======>", multiofThree);

// const nested = [[1,2,3],[4,5,6],[7,8,9]]
// const duplicated = nested.flat();
// console.log("duplicated =======>", duplicated);
// const duplicatedflat = nested.flatMap(n => [n,n]);
// console.log("duplicatedflat ========>", duplicatedflat);

// 기존 promise 방식
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => console.log(data));
//     function fetchData() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("데이터 전송 완료.");
//             }, 2000)
//     });
// }
// fetchData().then(data => console.log(data));

async function loadData() {
    const result  = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(result);
    
}
loadData();