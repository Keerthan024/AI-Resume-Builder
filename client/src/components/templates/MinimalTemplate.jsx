import React from "react";

const MinimalTemplate = ({ data, accentColor = "#6b7280" }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        try {
            const [year, month] = dateStr.split("-");
            return new Date(year, month - 1).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
            });
        } catch {
            return dateStr;
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 font-light leading-relaxed">
            {/* Header */}
            <header className="mb-3 border-b border-gray-200 pb-4">
                <h1 className="text-5xl font-light tracking-wide text-gray-800 mb-2">
                    {data.personal_info?.full_name || "Your Name"}
                </h1>
                <div className="flex flex-wrap gap-x-8 gap-y-2 text-base text-gray-600">
                    {data.personal_info?.phone && <span>{data.personal_info.phone}</span>}
                    {data.personal_info?.email && <span>{data.personal_info.email}</span>}
                    {data.personal_info?.github && <span>{data.personal_info.github}</span>}
                    {data.personal_info?.linkedin && (
                        <span className="break-all">{data.personal_info.linkedin}</span>
                    )}
                    {data.personal_info?.location && <span>{data.personal_info.location}</span>}
                    {data.personal_info?.website && (
                        <span className="break-all">{data.personal_info.website}</span>
                    )}
                </div>
            </header>

            {/* 1. Professional Summary */}
            {data.professional_summary && (
                <section className="mb-3">
                    <h2
                        className="text-sm uppercase tracking-widest mb-2 font-semibold"
                        style={{ color: accentColor }}
                    >
                        Professional Summary
                    </h2>
                    <p className="text-gray-700 text-base">{data.professional_summary}</p>
                </section>
            )}

            {/* 2. Experience */}
            {data.experience?.length > 0 && (
                <section className="mb-3">
                    <h2
                        className="text-sm uppercase tracking-widest mb-2 font-semibold"
                        style={{ color: accentColor }}
                    >
                        Experience
                    </h2>
                    <div className="space-y-6">
                        {data.experience.map((exp, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-800">
                                            {exp.position}
                                        </h3>
                                        <p className="text-gray-600 font-medium">{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                                        {formatDate(exp.start_date)} –{" "}
                                        {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                    </span>
                                </div>
                                {exp.description && (
                                    <p className="text-gray-700 mt-2 whitespace-pre-line">
                                        {exp.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* 3. Skills */}
            {data.skills?.length > 0 && (
                <section className="mb-3">
                    <h2
                        className="text-sm uppercase tracking-widest mb-3 font-semibold"
                        style={{ color: accentColor }}
                    >
                        Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {data.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="text-xs px-3 py-1 rounded-full border border-zinc-300 bg-zinc-50 text-zinc-700 font-medium"
                                style={{ borderColor: accentColor, color: accentColor }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </section>
            )}

            {/* 4. Projects */}
            {data.project?.length > 0 && (
                <section className="mb-3">
                    <h2
                        className="text-sm uppercase tracking-widest mb-2 font-semibold"
                        style={{ color: accentColor }}
                    >
                        Projects
                    </h2>
                    <div className="space-y-4">
                        {data.project.map((proj, index) => (
                            <div key={index}>
                                <h3 className="text-lg font-medium text-gray-800">
                                    {proj.name}
                                </h3>
                                <p className="text-gray-700">{proj.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* 5. Achievements */}
            {data.achievement?.length > 0 && (
                <section className="mb-3">
                    <h2
                        className="text-sm uppercase tracking-widest mb-2 font-semibold"
                        style={{ color: accentColor }}
                    >
                        Achievements
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {data.achievement.map((ach, index) => (
                            <li key={index}>{ach.title}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* 6. Certifications */}
            {data.certification?.length > 0 && (
                <section className="mb-3">
                    <h2
                        className="text-sm uppercase tracking-widest mb-2 font-semibold"
                        style={{ color: accentColor }}
                    >
                        Certifications
                    </h2>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                        {data.certification.map((cert, index) => (
                            <li key={index}>
                                {cert.title}
                                {cert.issuer && (
                                    <span className="text-gray-600 text-sm ml-2">
                                        – {cert.issuer}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* 7. Education */}
            {data.education?.length > 0 && (
                <section>
                    <h2
                        className="text-sm uppercase tracking-widest mb-2 font-semibold"
                        style={{ color: accentColor }}
                    >
                        Education
                    </h2>
                    <div className="space-y-2">
                        {data.education.map((edu, index) => (
                            <div key={index} className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-medium text-gray-800">
                                        {edu.degree} {edu.field && `in ${edu.field}`}
                                    </h3>
                                    <p className="text-gray-600">{edu.institution}</p>
                                    {edu.gpa && (
                                        <p className="text-sm text-gray-500 mt-1">GPA: {edu.gpa}</p>
                                    )}
                                </div>
                                <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                                    {formatDate(edu.graduation_date)}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

export default MinimalTemplate;
