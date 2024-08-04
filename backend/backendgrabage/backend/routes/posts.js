
import express from 'express';
import Post from '../models/Post.js';
import { isAdmin } from '../middleware/auth.js';
import slugify from 'slugify';

const router = express.Router();

router.post('/', isAdmin, async (req, res) => {
    console.log('Received request to create post:', req.body); // Log the request body
    try {
        const { title, content, category, imageUrls } = req.body; // Use imageUrls, not imageUrl

        // Ensure imageUrls is an array before saving
        const images = Array.isArray(imageUrls) ? imageUrls : [];

        const slug = slugify(title, { lower: true, strict: true });
        const post = new Post({
            title,
            content,
            category,
            imageUrls: images, // Save image URLs array
            slug,
            author: req.user._id,
        });

        await post.save();
        console.log('Post created successfully:', post); // Log the created post
        res.status(201).json(post);
    } catch (error) {
        console.error('Error creating post:', error); // Log any errors
        res.status(500).json({ message: 'Error creating post', error });
    }
});

// Other routes remain unchanged


router.get('/', async (req, res) => {
        try {
            const posts = await Post.find().populate('author', 'name');
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: 'Error getting posts', error });
        }
    });
    
    router.get('/:slug', async (req, res) => {
        try {
            const post = await Post.findOne({ slug: req.params.slug }).populate('author', 'name');
            if (!post) {
                return res.status(404).json({ message: 'Post not found' });
            }
            res.status(200).json(post);
        } catch (error) {
            res.status(500).json({ message: 'Error getting post', error });
        }
    });
    
    // Fetch related posts
    router.get('/related/:slug', async (req, res) => {
        try {
            const { slug } = req.params;
            const post = await Post.findOne({ slug });
            const relatedPosts = await Post.find({
                author: post.author,
                _id: { $ne: post._id }
            }).limit(5);
            res.status(200).json(relatedPosts);
        } catch (error) {
            res.status(500).send({ error: 'Error fetching related posts' });
        }
    });
    
    // Get posts by category
    router.get('/category/:category', async (req, res) => {
        try {
            const { category } = req.params;
            const posts = await Post.find({ category });
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: 'Error getting post by category', error });
        }
    });
    
    // Search functionality
    router.get('/search', async (req, res) => {
        const { query } = req.query;
        if (!query) {
            return res.status(500).json({ message: 'Search is required' });
        }
        try {
            const posts = await Post.find({ $text: { $search: query } }).exec();
            res.status(200).send(posts);
        } catch (error) {
            console.log('error searching posts', error);
        }
    });
    export default router;