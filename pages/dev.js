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
        alert("submitted")
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
        
        setContent('')
        setData('')
      } else {
        console.error('Error deleting all data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    } finally {
      
    }
  };


  return (
    <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",justifyContent:"center",gap:"10px",alignItems:"center",minHeight:"100vh"}}>
      <div style={{display:"flex",flexDirection:"column"}} >
        <label htmlFor="title">Title:</label>
        <input
        style={{width:"500px",fontSize:"20px",padding:"10px"}}
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div style={{display:"flex",flexDirection:"column"}}>
        <label htmlFor="content">Content:</label>
        <textarea
        style={{width:"500px",fontSize:"15px",padding:"10px"}}
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div style={{display:"flex",gap:5}}>
        <button type="submit" style={{padding:"10px 20px",}} >Submit</button>
        <button  style={{padding:"10px 20px",}} onClick={clear} >
        clear
      </button>
      </div>
    </form>
  );
};

export default PostForm;
