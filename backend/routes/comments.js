
// import express from 'express';
// import Comment from '../models/Comment.js';
// import mongoose from 'mongoose';
// const router = express.Router({ mergeParams: true });

// // Add a comment to a post
// router.post('/:postId/:slug/comments', async (req, res) => {

//   const { slug } = req.params;
//   const { content, author } = req.body;
//   if (!mongoose.Types.ObjectId.isValid(author)) {
//     return res.status(400).json({ message: 'Invalid author ID format' });
//   }

//   try {
//     const comment = new Comment({
//       postId,
//       content,
//       author,
//     });

//     await comment.save();
//     res.status(201).json(comment);
//   } catch (error) {
//     console.error('Error adding comment:', error);
//     res.status(500).send('Error adding comment');
//   }
// });

// // Get comments for a post
// router.get('/:postId/comments', async (req, res) => {
//   const { postId } = req.params;

//   try {
//     const comments = (await Comment.find({ postId: req.params.postId }).populate('author' , 'name'));
//     res.status(200).json(comments);
//   } catch (error) {
//     console.error('Error fetching comments:', error);
//     res.status(500).send('Error fetching comments');
//   }
// });

// export default router;




import express from 'express';
import Comment from '../models/Comment.js';
import Post from '../models/Post.js';
import mongoose from 'mongoose';

const router = express.Router({ mergeParams: true });

// Middleware to ensure user is authenticated
const ensureAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
};

// Add a comment to a post using slug
router.post('/:slug/comments', ensureAuthenticated ,  async (req, res) => {
  const { slug } = req.params;
  const { content } = req.body;
  const {author} = req.user._id;

  if (!mongoose.Types.ObjectId.isValid(author)) {
    return res.status(400).json({ message: 'Invalid author ID format' });
  }
  console.log('Post ID:', slug);
  console.log('Content:', content);
  console.log('Author:', author);

  try {
    const post = await Post.findOne({ slug });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const comment = new Comment({
      postId: post._id,
      content,
      author,
    });

    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    console.error('Error adding comment:', error);
    res.status(500).send('Error adding comment');
  }
});

// Get comments for a post using slug
router.get('/:slug/comments', async (req, res) => {
  const { slug } = req.params;

  try {
    const post = await Post.findOne({ slug });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const comments = await Comment.find({ postId: post._id }).populate('author', 'name');
    res.status(200).json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).send('Error fetching comments');
  }
});

export default router;
