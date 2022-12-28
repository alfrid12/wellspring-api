const { MongoClient } = require('mongodb');
const DatabaseConfig = require('./database-config');
// or as an es module:
// import { MongoClient } from 'mongodb'

const initialRuns = [{
    trainLineName: "El",
    routeName: "Brown Line",
    runNumber: "E102",
    operatorId: "SJones"
}, {
    trainLineName: "Metra",
    routeName: "UPN",
    runNumber: "M405",
    operatorId: "AJohnson"
}, {
    trainLineName: "Metra",
    routeName: "UPN",
    runNumber: "M511",
    operatorId: "YSmith"
}, {
    trainLineName: "Amtrak",
    routeName: "Hiawatha",
    runNumber: "A006",
    operatorId: "LBeck"
}, {
    trainLineName: "El",
    routeName: "Red Line",
    runNumber: "E432",
    operatorId: "LHill"
}, {
    trainLineName: "Amtrak",
    routeName: "Hiawatha",
    runNumber: "A005",
    operatorId: "LBeck"
}]

const client = new MongoClient(DatabaseConfig.connectionString);

async function resetDatabase() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to MongoDB server');
    const db = client.db(DatabaseConfig.databaseName);
    const collection = db.collection(DatabaseConfig.runCollectionName);

    const deleteResult = await collection.deleteMany();
    console.log(`Deleted ${deleteResult.deletedCount} documents`);

    const insertResult = await collection.insertMany(initialRuns);
    console.log(`Inserted ${insertResult.insertedCount} documents`);

    return 'done.';
}

async function testConnection() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(DatabaseConfig.databaseName);
    const collection = db.collection('runs');

    // the following code examples can be pasted here...

    return 'done.';
}

resetDatabase().then(console.log).catch(console.error).finally(() => client.close());