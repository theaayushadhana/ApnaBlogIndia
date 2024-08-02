
import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DOMPurify from 'dompurify';
import LoadingSpinner from '../components/Loading';
import { useEffect } from 'react';
const PostCard = ({ post }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [loading ,setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getFirstImage = (imageUrls) => {
    return imageUrls && imageUrls.length > 0 ? imageUrls[0] : '';
  };

  const getContentPreview = (content, wordLimit) => {
    // Remove HTML tags and split content into words
    const text = DOMPurify.sanitize(content).replace(/<[^>]+>/g, '');
    const words = text.split(/\s+/);
    return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
  };
  if(loading){
    return <LoadingSpinner/>
  }

  return (
    <Card sx={{ maxWidth: 800, margin: 'auto', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="theaayushadhana">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.title}
        subheader={new Date(post.createdAt).toLocaleDateString()}
      />
      <Grid container spacing={2}>
        {/* Display only the first image */}
        {getFirstImage(post.imageUrls) && (
          <Grid item xs={12} sm={4}>
            <CardMedia
              component="img"
              sx={{ height: 150, objectFit: 'cover' }}
              image={getFirstImage(post.imageUrls)}
              alt="Article image"
            />
          </Grid>
        )}
        <Grid item xs={12} sm={8}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <div dangerouslySetInnerHTML={{ __html: getContentPreview(post.content, 100) }} />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          expand={expanded.toString()}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        <Link to={`/posts/${post.slug}`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="primary">Read full article</Button>
        </Link>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Article:</Typography>
          <Typography paragraph>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }} />
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default PostCard;
