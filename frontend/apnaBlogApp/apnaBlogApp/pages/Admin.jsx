
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Editor from '../components/Editor';
import { TextField, Button, Container, Typography } from '@mui/material';
import LoadingSpinner from '../components/Loading';
const Admin = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrls, setImageUrls] = useState([]);
  const [loading , setLoading] = useState(true);
  
  const handleContentChange = (newContent) => {
    setContent(newContent);

    // Extract image URLs from content if needed
    const parser = new DOMParser();
    const doc = parser.parseFromString(newContent, 'text/html');
    const images = Array.from(doc.querySelectorAll('img')).map(img => img.src);
    setImageUrls(images);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const postData = {
        title,
        content,
        category,
        imageUrls, // Send image URLs to the backend
      };

      await axios.post('http://localhost:5000/api/posts', postData, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
      });

      setTitle('');
      setContent('');
      setCategory('');
      setImageUrls([]);
    } catch (error) {
      console.log('Error:', error.message);
    }
  };
  
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Create a New Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <Editor value={content} onChange={handleContentChange} />
        <TextField
          label="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          fullWidth
          required
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          margin="normal"
        >
          Create Post
        </Button>
      </form>
      <p>Only admin can post on ApnaBlogApp. If you want to write post for you then , mail us at at developeraayush145@gmail.com </p>
    </Container>
  );
};

export default Admin;
