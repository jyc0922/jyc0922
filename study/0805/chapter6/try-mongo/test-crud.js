const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://@cluster0.uxdxmth.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true});

async function main() {
    try {
        await client.connect();
        console.log('Connected successfully to server 데이터베이스 접속 성공!');
        const collection = client.db("test").collection("person");
        // the following code examples can be pasted here...
        await collection.insertOne({name: 'Alexkim', age: 30});
        console.log('Inserted a document into the collection 문서 추가 완료');

        const documents = await collection.find({name: 'Alexkim'}).toArray();
        console.log('찾은 문서:', documents);

        await collection.updateOne({name: 'Alexkim'}, {$set: {age: 31}});
        console.log('문서 업데이트 완료');

        const updatedDocuments = await collection.find({name: 'Alexkim'}).toArray();
        console.log('업데이트된 문서:', updatedDocuments);

        // await collection.deleteOne({name: 'Alexkim'});
        // console.log('문서 삭제 완료');

        await client.close();
    } catch (err) {
        console.error(err);
    }
}

main()
