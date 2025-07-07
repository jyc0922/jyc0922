
// 짝수 출력하여 합 구하기
const numbers = [3,4,7,8,10,13];
const evens = numbers.filter(n => n % 2 ===0);
const sqr = evens.map((num) => num * num);
const sum = sqr.reduce((acc,cur) => acc + cur, 0);
console.log(sum);

function fetchData() {
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve("data OK!");
        }, 2000);
    });
}
async function loadData() {
    const data = await fetchData();
    console.log(data);
}
loadData();