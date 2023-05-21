import { NextApiRequest, NextApiResponse } from 'next';
import { addRecordToCollection } from '../../database';

// This function will be executed when the API route is called
const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  // Extract the unique ID from the request query
  const uniqueId = req.body['nm'];
  // console.log(req.body)

  // Record the email open event in a database (e.g., MongoDB, PostgreSQL, etc.)
  if (uniqueId)
    await addRecordToCollection(uniqueId as string, 'own-website-visits', { 'campaign': req.body['c'] })

  res.status(200).json({ message: 'success' });
};

export default handler;
