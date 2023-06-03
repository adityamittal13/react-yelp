import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://akmittal:IpPUhR0h7dJPovL5@ravenous.68tulbe.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const retrieveUserAccounts = async () => {
    const mongoClient = new MongoClient(uri);
    const data = await mongoClient.db('user_accounts').collection("accounts").find({}).toArray();
    return data;
}

export default retrieveUserAccounts;