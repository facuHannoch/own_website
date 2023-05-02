import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../database';

async function recordEmailOpen(uniqueId: string) {
  const { client, dbName } = await connectToDatabase();
  const db = client.db(dbName);
  const emailOpensCollection = db.collection('emails-opened');

  await emailOpensCollection.insertOne({
    uniqueId,
    openedAt: new Date(),
  });
}

// A helper function to generate a 1x1 transparent GIF image
function createTransparentGif(): Buffer {
  const gifData = 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  return Buffer.from(gifData, 'base64');
}

// This function will be executed when the API route is called
const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  // Extract the unique ID from the request query
  const uniqueId = req.query.id as string;
  console.log(req.query)

  // Record the email open event in a database (e.g., MongoDB, PostgreSQL, etc.)
  await recordEmailOpen(uniqueId);

  // Set the response headers and return the 1x1 transparent GIF image
  res.setHeader('Content-Type', 'image/gif');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Expires', 'Wed, 11 Jan 1984 05:00:00 GMT');

  const gifBuffer = createTransparentGif();
  res.status(200).send(gifBuffer);
};

export default handler;
