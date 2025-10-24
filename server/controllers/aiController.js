import Resume from "../models/Resume.js";
import ai from "../configs/ai.js";
import { validationResult } from "express-validator";

// Enhance Professional Summary
export const enhanceProfessionalSummary = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { userContent } = req.body;

        const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                { 
                    role: "system", 
                    content: "You are an expert in resume writing. Enhance the professional summary to 1-2 sentences highlighting key skills, experience, and career objectives. Return only text." 
                },
                { role: "user", content: userContent },
            ],
        });

        const enhancedContent = response?.choices?.[0]?.message?.content || "";
        res.status(200).json({ enhancedContent });
    } catch (error) {
        console.error("AI enhanceProfessionalSummary error:", error);
        res.status(500).json({ message: "Server error enhancing professional summary" });
    }
};

// Enhance Job Description
export const enhanceJobDescription = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { userContent } = req.body;

        const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                { 
                    role: "system", 
                    content: "You are an expert in resume writing. Enhance the job description to 1-2 sentences highlighting key responsibilities and achievements. Use action verbs and quantifiable results. Return only text." 
                },
                { role: "user", content: userContent },
            ],
        });

        const enhancedContent = response?.choices?.[0]?.message?.content || "";
        res.status(200).json({ enhancedContent });
    } catch (error) {
        console.error("AI enhanceJobDescription error:", error);
        res.status(500).json({ message: "Server error enhancing job description" });
    }
};

// Upload Resume
export const uploadResume = async (req, res) => {
    try {
        const { resumeText, title } = req.body;
        const userId = req.userId;

        if (!resumeText || !userId) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const systemPrompt = "You are an AI agent that extracts structured resume data.";
        const userPrompt = `Extract data from this resume: ${resumeText}. Provide JSON only.`;

        const response = await ai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
            ],
        });

        const rawContent = response?.choices?.[0]?.message?.content || "";
        let parsedData = {};
        try {
            parsedData = JSON.parse(rawContent);
        } catch (parseErr) {
            console.error("JSON parse error:", parseErr, rawContent);
            return res.status(500).json({ message: "Failed to parse AI response" });
        }

        const newResume = await Resume.create({ userId, title, ...parsedData });
        res.json({ resumeId: newResume._id });
    } catch (error) {
        console.error("AI uploadResume error:", error);
        res.status(500).json({ message: "Server error uploading resume" });
    }
};
