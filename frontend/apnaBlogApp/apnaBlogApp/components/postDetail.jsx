import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';
import {
  FacebookShareButton, WhatsappShareButton, TwitterShareButton,
  LinkedinShareButton, EmailShareButton,
  FacebookIcon, WhatsappIcon, TwitterIcon,
  LinkedinIcon, EmailIcon
} from 'react-share';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// Function to remove HTML tags and special symbols from a string
const removeHtmlTagsAndSpecialSymbols = (htmlString) => {
  let cleanString = htmlString.replace(/<[^>]+>/g, ''); // Remove HTML tags
  cleanString = cleanString.replace(/[^\w\s]/g, ''); // Remove special symbols
  return cleanString;
};

const PostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    // Fetch the post
    // axios.get(`https://api.apnablogapp.com/api/posts/${slug}`)
    axios.get(`https://api.apnablogapp.com/api/posts/how-to-create-a-insta-post-like-this-}`)
      .then(response => {
        console.log('Post data:', response.data); // Log post data
        setPost(response.data);
        setComments(response.data.comments || []);
      })
      .catch(error => {
        console.error('Error fetching post:', error);
      });

    // Fetch related posts
    axios.get(`https://api.apnablogapp.com/api/posts/related/${slug}`)
      .then(response => {
        console.log('Related posts data:', response.data); // Log related posts data
        setRelatedPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching related posts:', error);
      });

  }, [slug]);

  // Handle comment submission (Uncomment if needed)
  // const handleCommentSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(`https://api.apnablogapp.com/api/posts/${slug}/comments`, { 
  //       content: newComment, 
  //       author: post.author._id
  //     }, {withCredentials: true});
  //     setComments([...comments, response.data]);
  //     setNewComment('');
  //   } catch (error) {
  //     console.error('Error submitting comment:', error.message);
  //   }
  // };

  // If no post data is available, display a loading message
  if (!post) {
    return <p>Loading...</p>;
  }

  const shareUrl = window.location.href;
  const shareTitle = post.title;

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          {post.title}
        </Typography>

        {/* Render sanitized HTML content directly */}
        <Typography 
          variant="body1" 
          component="div" 
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} 
        />
        
        {/* Comments Section */}
        {/* Uncomment and adjust if you have a comments section */}
        {/* <Box sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2">Comments</Typography>
          <List>
            {comments.map((comment, index) => (
              <ListItem key={index}>
                <ListItemText primary={`${comment.author.name}: ${comment.content}`} />
              </ListItem>
            ))}
          </List>

          <form onSubmit={handleCommentSubmit}>
            <TextField
              label="Add a comment"
              variant="outlined"
              fullWidth
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" color="primary">Submit</Button>
          </form>
        </Box> */}

        {/* Share Post */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2">Share this post</Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            <FacebookShareButton url={shareUrl} quote={shareTitle}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <WhatsappShareButton url={shareUrl} title={shareTitle}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <TwitterShareButton url={shareUrl} title={shareTitle}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl} title={shareTitle}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <EmailShareButton url={shareUrl} subject={shareTitle}>
              <EmailIcon size={32} round />
            </EmailShareButton>
          </Box>
        </Box>

        {/* Related Posts */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" component="h2">Related Posts</Typography>
          {Array.isArray(relatedPosts) && relatedPosts.length > 0 ? (
            <List>
              {relatedPosts.map((relatedPost, index) => (
                <ListItem key={index} alignItems="flex-start">
                  <img src={relatedPost.imageUrls} alt={relatedPost.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                  <ListItemText
                    primary={
                      <Link to={`/posts/${relatedPost.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {relatedPost.title}
                      </Link>
                    }
                    secondary={removeHtmlTagsAndSpecialSymbols(relatedPost.content).substring(0, 100) + '...'}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography>No related posts found</Typography>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default PostDetail;
