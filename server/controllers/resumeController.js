import imagekit from "../configs/imageKit.js";
import Resume from "../models/Resume.js";

// --- Create Resume ---
export const createResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { title } = req.body;

        if (!title) return res.status(400).json({ message: "Title is required" });

        const newResume = await Resume.create({ userId, title });
        return res.status(201).json({ message: "Resume created successfully", resume: newResume });
    } catch (error) {
        console.error("createResume error:", error);
        return res.status(500).json({ message: "Server error creating resume" });
    }
};

// --- Delete Resume ---
export const deleteResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId } = req.params;

        const deleted = await Resume.findOneAndDelete({ _id: resumeId, userId });
        if (!deleted) return res.status(404).json({ message: "Resume not found" });

        return res.status(200).json({ message: "Resume deleted successfully" });
    } catch (error) {
        console.error("deleteResume error:", error);
        return res.status(500).json({ message: "Server error deleting resume" });
    }
};

// --- Get Resume by ID (Private) ---
export const getResumeById = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId } = req.params;

        const resume = await Resume.findOne({ _id: resumeId, userId }).select("-__v -createdAt -updatedAt");
        if (!resume) return res.status(404).json({ message: "Resume not found" });

        return res.status(200).json({ resume });
    } catch (error) {
        console.error("getResumeById error:", error);
        return res.status(500).json({ message: "Server error fetching resume" });
    }
};

// --- Get Public Resume by ID ---
export const getPublicResumeById = async (req, res) => {
    try {
        const { resumeId } = req.params;
        const resume = await Resume.findOne({ _id: resumeId, public: true }).select("-__v -createdAt -updatedAt");

        if (!resume) return res.status(404).json({ message: "Resume not found" });

        return res.status(200).json({ resume });
    } catch (error) {
        console.error("getPublicResumeById error:", error);
        return res.status(500).json({ message: "Server error fetching public resume" });
    }
};

// --- Update Resume ---
export const updateResume = async (req, res) => {
    try {
        const userId = req.userId;
        const { resumeId, resumeData, removeBackground } = req.body;
        const image = req.file;

        if (!resumeData) return res.status(400).json({ message: "resumeData is required" });

        let resumeDataCopy;
        try {
            resumeDataCopy = typeof resumeData === "string" ? JSON.parse(resumeData) : structuredClone(resumeData);
        } catch {
            return res.status(400).json({ message: "Invalid resumeData JSON" });
        }

        if (image) {
            // Upload to ImageKit
            const response = await imagekit.files.upload({
                file: image.buffer || image.path,
                fileName: `resume-${Date.now()}.png`,
                folder: "user-resumes",
                transformation: {
                    pre: "w-300,h-300,fo-face,z-0.75" + (removeBackground ? ",e-bgremove" : "")
                }
            });

            resumeDataCopy.personal_info = resumeDataCopy.personal_info || {};
            resumeDataCopy.personal_info.image = response.url;
        }

        const updatedResume = await Resume.findOneAndUpdate(
            { _id: resumeId, userId },
            resumeDataCopy,
            { new: true }
        );

        if (!updatedResume) return res.status(404).json({ message: "Resume not found" });

        return res.status(200).json({ message: "Saved successfully", resume: updatedResume });
    } catch (error) {
        console.error("updateResume error:", error);
        return res.status(500).json({ message: "Server error updating resume" });
    }
};
