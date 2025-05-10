import User from '../models/User.js';
import mongoose from 'mongoose';

export const updateProfile = async (req, res) => {
  try {
    console.log('🔐 Authenticated user:', req.user);
    console.log('📡 Mongoose connection state:', mongoose.connection.readyState);

    const updates = req.body;
    console.log('📤 Incoming profile updates:', updates);

    let updateFields = {};

    if (req.user.role === 'seeker') {
      updateFields = {
        'profile.fullName': updates.fullName,
        'profile.bio': updates.bio,
        'profile.skills': updates.skills,
        'profile.experience': updates.experience,
        'profile.resumeLink': updates.resumeLink,
      };
    } else if (req.user.role === 'employer') {
      updateFields = {
        'profile.companyName': updates.companyName,
        'profile.industry': updates.industry,
        'profile.website': updates.website,
        'profile.location': updates.location,
      };
    } else {
      return res.status(403).json({ error: 'Invalid role for profile update.' });
    }

    console.time('⏱ DB Update');
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { $set: updateFields },
      { new: true, runValidators: true }
    ).select('-password');
    console.timeEnd('⏱ DB Update');

    console.log('✅ Updated user:', user);
    res.status(200).json(user);

  } catch (err) {
    console.error('❌ Profile update error:', err.message);
    res.status(500).json({ error: 'Failed to update profile' });
  }
};

export const getProfile = async (req, res) => {
  res.json(req.user);
};
