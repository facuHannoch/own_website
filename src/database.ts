import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.MONGODB_DB || 'your_db_name';

let cachedClient: MongoClient | null = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return { client: cachedClient, dbName };
  }

  const client = await MongoClient.connect(uri);

  cachedClient = client;

  return { client: cachedClient, dbName };
}

export async function addRecordToCollection(uniqueId: string, dbCollection: string, extraData?: {}) {
  const { client, dbName } = await connectToDatabase();
  const db = client.db(dbName);
  const emailOpensCollection = db.collection(dbCollection);

  await emailOpensCollection.insertOne({
    uniqueId,
    openedAt: new Date(),
    ...extraData
  });
}
