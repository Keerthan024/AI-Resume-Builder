import mongoose from "mongoose";

const ResumeSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, default: "Untitled Resume", trim: true },
    public: { type: Boolean, default: false },
    template: { type: String, default: "classic" },
    accent_color: { type: String, default: "#3B82F6" },
    professional_summary: { type: String, default: "" },
    skills: [{ type: String, trim: true }],
    personal_info: {
      image: { type: String, default: "" },
      full_name: { type: String, default: "", trim: true },
      profession: { type: String, default: "", trim: true },
      email: { type: String, default: "", trim: true },
      phone: { type: String, default: "", trim: true },
      location: { type: String, default: "", trim: true },
      github: { type: String, default: "", trim: true },
      linkedin: { type: String, default: "", trim: true },
      website: { type: String, default: "", trim: true },
    },
    experience: [
      {
        company: { type: String, trim: true },
        position: { type: String, trim: true },
        start_date: { type: String },
        end_date: { type: String },
        description: { type: String, trim: true },
        is_current: { type: Boolean, default: false },
      },
    ],
    project: [
      {
        name: { type: String, trim: true },
        type: { type: String, trim: true },
        description: { type: String, trim: true },
      },
    ],
    education: [
      {
        institution: { type: String, trim: true },
        degree: { type: String, trim: true },
        field: { type: String, trim: true },
        graduation_date: { type: String },
        gpa: { type: String },
      },
    ],
    achievement: [
      {
        title: { type: String, trim: true },
        description: { type: String, trim: true },
        date: { type: String },
      },
    ],
    certification: [
      {
        name: { type: String, trim: true },
        issuing_organization: { type: String, trim: true },
        issue_date: { type: String },
        expiration_date: { type: String },
        credential_id: { type: String, trim: true },
        credential_url: { type: String, trim: true },
      },
    ],
  },
  { timestamps: true, minimize: false }
);

const Resume = mongoose.model("Resume", ResumeSchema);

export default Resume;
