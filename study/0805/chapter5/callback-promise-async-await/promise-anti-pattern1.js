function myWork(work) {
    return new Promise((resolve, reject) => {
        if (work === "done") {
            resolve("Promise resolved 게임 가능")
        } else {
            reject(new Error("Promise rejected 게임 불가"))
        }
    })
}

myWork('done').then(function (value) {console.log(value)}, function(err) {console.log(err)}) 

myWork('doing').then(function(value) {console.log(value)}).catch(function(err) {console.log(err)})