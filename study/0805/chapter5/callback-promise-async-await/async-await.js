async function myName() {
    return "Great"
}

async function showName() {
    const name = await myName()
    console.log(name)
}

console.log(showName())

function waitOneSecond(msg) {
    return new Promise((resolve, _) => {
        setTimeout(() => resolve(`${msg}`), 1000)
    })
}

async function countOneToTen() {
    for (let x of [...Array(11).keys()]) {
        let result = await waitOneSecond(`${x + 1}초 대기중`)
        console.log(result)
    }
    console.log("끝")
}
countOneToTen()

async function a() {return "OK 굳"}
async function b() {
    const result = await a()
    console.log(result) // Promise { 'OK' }
}
b()