// pages/api/delete-all.js
import dbConnect from '../../lib/MongoDB';
import BlogPost from '../../lib/schema';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();

    // Delete all documents in the BlogPost collection
    await BlogPost.deleteMany({});

    return res.status(200).json({ success: true, message: 'All data deleted successfully.' });
  } catch (error) {
    console.error('Error deleting all data:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
