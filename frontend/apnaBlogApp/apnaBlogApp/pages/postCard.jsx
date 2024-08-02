
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostCard = ({ post }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (!post) {
    return <p>Loading content...</p>;
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
        {post.imageUrls && post.imageUrls.length > 0 && (
          <Grid item xs={12} sm={4}>
            <CardMedia
              component="img"
              sx={{ height: 150, paddingTop: '5%' }} // 1:1 aspect ratio
              image={post.imageUrls[0]} 
              alt="Article image"
            />
          </Grid>
        )}
        <Grid item xs={12} sm={8}>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content.substring(0, 400) + '...') }} />
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
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <Link to={`/posts/${post.slug}`}>
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
