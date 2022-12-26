const { MongoClient } = require('mongodb');
const DatabaseConfig = require('./database-config');


const client = new MongoClient(DatabaseConfig.connectionString);

const getAllRuns = async (successCallback, errorCallback) => {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to MongoDB server');
    const db = client.db(DatabaseConfig.databaseName);
    const collection = db.collection(DatabaseConfig.runCollectionName);

    const retrievalResult = await collection.find({}).toArray();
    console.log(retrievalResult); 
    // console.log(`Retrieved ${retrievalResult.deletedCount} documents`);

    return retrievalResult;
}

const createRun = (newRun, successCallback, errorCallback) => {

};

const updateRun = (runId, run, successCallback, errorCallback) => {

};

const deleteRun = (runId, successCallback, errorCallback) => {

};

module.exports = {
    getAllRuns,
    createRun,
    updateRun,
    deleteRun
};