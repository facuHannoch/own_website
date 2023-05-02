import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.MONGODB_DB || 'your_db_name';

let cachedClient: MongoClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return { client: cachedClient, dbName };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedClient = client;

  return { client: cachedClient, dbName };
}