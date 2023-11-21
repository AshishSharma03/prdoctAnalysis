const mongoose = require('mongoose');

let BlogPost;

try {
  // Try to retrieve the existing model
  BlogPost = mongoose.model('BlogPost');
} catch (e) {
  // If the model doesn't exist, define it
  const blogPostSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  });

  // Define the model only if it doesn't exist
  BlogPost = mongoose.model('BlogPost', blogPostSchema);
}

module.exports = BlogPost;
