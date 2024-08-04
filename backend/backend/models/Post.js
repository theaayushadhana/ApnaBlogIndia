import mongoose from 'mongoose';
const PostSchema  = mongoose.Schema({
    title: {
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    category: {
        type:String,
        required: true 
    },
    imageUrls: {
        type: [String],
        required : true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    slug: { type: String,
         unique: true,
          required: true },
    createdAt: {
        type: Date,
        default: Date.now
    },
    
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      }],
    createdAt: {
        
        type: Date,
        default: Date.now,
    }

});
// Middleware to generate slug before saving
PostSchema.pre('save', function (next) {
    if (this.isModified('title') || this.isNew) {
        this.slug = this.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
    }
    next();
});

PostSchema.index({ title: 'text', content: 'text' });

const post = mongoose.model('Post' , PostSchema);
export default post;