const DB = []

function register(user) {
    return saveDB(user, function (user){
        return sendEmail(user, function(user){
            return getResult(user)
        })
    })
}

function saveDB(user, callback) {
    DB.push(user)
    console.log(`Save ${user.name} to database`)
    return callback(user)
}

function sendEmail(user, callback) {
    console.log(`Send email to ${user.email}`)
    return callback(user)
}

function getResult(user) {
    return `success register ${user.name}`
}

const result = register({
    name: 'Rizky',
    password: "1234abcd",
    email: 'rizky@test.com'
})

console.log(result)