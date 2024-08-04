
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  avatar: { type: String },
  location: { type: String, default: '' },
  mobileNumber: { type: String, default: '' },
  role: {
    type: String,
    default: 'user' 
  }
});

const User = mongoose.model('User', userSchema);
export default User;
