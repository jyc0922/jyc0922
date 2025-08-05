
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jyc0922:@cluster0.uxdxmth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
//   try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
//   }
    await client.connect();
    const adminDB = client.db("admin test").admin();
    const listDatabases = await adminDB.listDatabases();
    console.log(listDatabases);
    return 'OK done';
}
run().then(console.log).catch(console.error).finally(() => client.close());

