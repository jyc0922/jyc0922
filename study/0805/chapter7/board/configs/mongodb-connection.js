const {MongoClient} = require('mongodb');

const uri = 'mongodb+srv://jyc0922:@cluster0.uxdxmth.mongodb.net/board'

module.exports = function (callback) {
    return MongoClient.connect(uri, callback)
}