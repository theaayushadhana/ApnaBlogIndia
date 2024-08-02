import mongoose from 'mongoose';
import slugify from 'slugify';
import Post from './models/Post.js'; // Adjust the path as necessary

// Connect to your MongoDB
mongoose.connect('mongodb+srv://developeraayush145:WGPerrO0Tqjpt0go@blogcluster2.lk8dbwx.mongodb.net/?retryWrites=true&w=majority&appName=BlogCluster2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000
});

const addSlugs = async () => {
    try {
        const posts = await Post.find();
        for (const post of posts) {
            if (!post.slug) {
                if (!post.category) {
                    post.category = 'default'; // Assign a default category
                }
                post.slug = slugify(post.title, { lower: true, strict: true });
                await post.save();
                console.log(`Slug added to post: ${post.title}`);
            }
        }
        console.log('All posts updated with slugs.');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error adding slugs:', error);
        mongoose.connection.close(); // Ensure the connection is closed even if there is an error
    }
};

addSlugs();
