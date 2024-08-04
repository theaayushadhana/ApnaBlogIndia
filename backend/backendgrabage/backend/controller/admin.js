
import User from "../models/User.js"; 


const updateUserRoleToAdmin = async (req, res) => {
  const userId = req.params.userId; // Get userId from request parameters

  try {
    // Update the user to be an admin
    const user = await User.findByIdAndUpdate(userId, { role: 'admin' }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with updated user
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// module.exports = { updateUserRoleToAdmin };
export default updateUserRoleToAdmin;