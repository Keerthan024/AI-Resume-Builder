// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        // Make password optional for Google OAuth users
        required: function() {
            return !this.googleId; // Only required if not using Google OAuth
        }
    },
    googleId: {
        type: String,
        sparse: true 
    },
    avatar: {
        type: String
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
}, {
    timestamps: true
});

export default mongoose.model('User', userSchema);
