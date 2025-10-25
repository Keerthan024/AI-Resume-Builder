// routes/authRoutes.js
import express from "express";
import { OAuth2Client } from 'google-auth-library';
import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Google OAuth route
router.post("/google-auth", async (req, res) => {
    try {
        const { credential } = req.body;
        
        if (!credential) {
            return res.status(400).json({ 
                success: false,
                message: 'No credential provided' 
            });
        }

        // Verify the Google ID token
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const { email, name, picture, sub: googleId } = payload;

        if (!email) {
            return res.status(400).json({ 
                success: false,
                message: 'Email not provided by Google' 
            });
        }

        // Check if user exists in your database
        let user = await User.findOne({ 
            $or: [
                { email: email },
                { googleId: googleId }
            ]
        });

        if (!user) {
            // Create new user
            user = new User({
                name,
                email,
                googleId,
                avatar: picture,
                isVerified: true
            });
            await user.save();
        } else {
            // Update existing user with Google ID if not present
            if (!user.googleId) {
                user.googleId = googleId;
                user.avatar = picture;
                await user.save();
            }
        }

        // Generate JWT token (compatible with your existing protect middleware)
        const token = jwt.sign(
            { userId: user._id }, 
            process.env.JWT_SECRET, 
            { expiresIn: '7d' }
        );

        res.json({
            success: true,
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                avatar: user.avatar
            },
            message: 'Logged in successfully with Google'
        });

    } catch (error) {
        console.error('Google auth error:', error);
        res.status(400).json({ 
            success: false,
            message: 'Google authentication failed' 
        });
    }
});

export default router;