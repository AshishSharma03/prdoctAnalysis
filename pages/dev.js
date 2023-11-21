// components/PostForm.js
import { useState } from 'react';
import { useMyContext } from '../context/GenerateProvider';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { setData } = useMyContext();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        console.log('Post created successfully');
        // Optionally, you can reset the form fields after successful submission
        setTitle('');
        setContent('');
      } else {
        console.error('Error creating post:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating post:', error.message);
    }
  };

  const clear = async () => {
    try {
      setData('')
      const response = await fetch('/api/deleteall', {
        method: 'POST',
      });

      if (response.ok) {
        console.log('All data deleted successfully');
      } else {
        console.error('Error deleting all data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      // setGenerate(false);
    }
  };


  return (
    <form onSubmit={handleSubmit} style={{display:"flex"}}>
      <div style={{display:"flex",flexDirection:"row"}} >
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div >
        <button type="submit">Submit</button>
        <button onClick={clear} >
        clear
      </button>
      </div>
    </form>
  );
};

export default PostForm;
