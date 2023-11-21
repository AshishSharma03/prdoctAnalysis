import dbConnect from '../../lib/MongoDB';
import BlogPost from '../../lib/schema';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();

    // Fetch all blog posts from the database
    const posts = await BlogPost.find({});

    return res.status(200).json({ success: true, data: posts });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
