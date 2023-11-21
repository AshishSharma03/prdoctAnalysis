import dbConnect from "../../lib/MongoDB";
import BlogPost from "../../lib/schema";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    await dbConnect();
    
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    // Create a new blog post
    const newPost = new BlogPost({ title, content });

    // Save the blog post to the database
    await newPost.save();

    return res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    console.error('Error creating blog post:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
