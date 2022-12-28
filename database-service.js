const { MongoClient } = require('mongodb');
const DatabaseConfig = require('./database-config');
const { ObjectId } = require('mongodb');
const e = require('express');



const client = new MongoClient(DatabaseConfig.connectionString);

const getAllRuns = async (successCallback, errorCallback) => {
    await client.connect();
    console.log('Connected successfully to MongoDB server');
    const db = client.db(DatabaseConfig.databaseName);
    const collection = db.collection(DatabaseConfig.runCollectionName);
    const retrievedRuns = await collection.find({}).toArray();
    const mappedRuns = retrievedRuns.map(run => ({
        runId: run._id,
        trainLineName: run.trainLineName,
        routeName: run.routeName,
        runNumber: run.runNumber,
        operatorId: run.operatorId
    }));
    return mappedRuns;
}

const createRun = async (newRun, successCallback, errorCallback) => {
    const createdRun = {  ...newRun };
    await client.connect();
    console.log('Connected successfully to MongoDB server');
    const db = client.db(DatabaseConfig.databaseName);
    const collection = db.collection(DatabaseConfig.runCollectionName);
    const insertResult = await collection.insertOne(newRun);
    createdRun.runId = insertResult.insertedId;

    return createdRun;
};

const updateRun = async (runId, run, successCallback, errorCallback) => {
    console.log(runId);

    // Use all fields except for runId AKA database ID
    const replacementRun = {
        trainLineName: run.trainLineName,
        routeName: run.routeName,
        runNumber: run.runNumber,
        operatorId: run.operatorId
    };

    await client.connect();
    console.log('Connected successfully to MongoDB server');
    const db = client.db(DatabaseConfig.databaseName);
    const collection = db.collection(DatabaseConfig.runCollectionName);
    const replaceResult = await collection.replaceOne({ _id: ObjectId(runId) }, replacementRun);
    if (replaceResult.modifiedCount === 1) {
        return run;
    } else {
        console.log("Failed to update run");
        return {};
    }
};

const deleteRun = async (runId, successCallback, errorCallback) => {
    await client.connect();
    console.log('Connected successfully to MongoDB server');
    const db = client.db(DatabaseConfig.databaseName);
    const collection = db.collection(DatabaseConfig.runCollectionName);
    const deleteResult = await collection.deleteMany({ _id: ObjectId(runId) });
    return deleteResult;
};

module.exports = {
    getAllRuns,
    createRun,
    updateRun,
    deleteRun
};