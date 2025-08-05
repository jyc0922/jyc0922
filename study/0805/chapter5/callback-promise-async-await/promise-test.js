const DB = []

function saveDB(user) {
    const oldDBSize = DB.length;
    DB.push(user)
    console.log(`Save ${user.name} to database`)
    return new Promise((resolve, reject) => {
        if (DB.length > oldDBSize) {
            resolve(user)
        } else {
            reject(new Error('Save DB failed'))
        }
    })
}

function sendEmail(user) {
    console.log(`Send email to ${user.email}`)
    return new Promise((resolve) => {
        resolve(user)
    })
}   

function getResult(user) {
    return new Promise((resolve, reject) => {
        resolve(`success register ${user.name}`)
    })
}

function registerByPromise(user) {    
    const result = saveDB(user)
        .then(sendEmail)
        .then(getResult)
        .catch(error => new Error(error))
        .finally(() => console.log('Done 완료!'))
        
    console.log(result)
    return result
}

const myUser = {
    name: 'Rizky',
    password: "1234abcd",
    email: 'rizky@test.com'
}
allResult = Promise.all([
    saveDB(myUser),
    sendEmail(myUser),
    getResult(myUser)
])
allResult.then(console.log)
const result = registerByPromise(myUser)
result.then(console.log)


