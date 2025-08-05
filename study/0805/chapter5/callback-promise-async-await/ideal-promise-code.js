function goodPromise(val) {
    return new Promise((resolve, reject) => {
        resolve(val)
    })
}

goodPromise("세상에")
.then((val) => {
    return val + " 이런"
})
.then((val) => {
    return val + " 좋은"
})
.then((val) => {
    return val + " 코드는"
})
.then((val) => {
    return val + " 아예"
})
.then((val) => {
    return val + " 없습니다."
})
.then(console.log)
.catch((err) => {
    console.log(err)
})