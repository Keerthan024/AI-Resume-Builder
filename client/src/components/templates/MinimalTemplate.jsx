import React from "react";

const MinimalTemplate = ({ data, accentColor = "#6b7280" }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        try {
            const [year, month] = dateStr.split("-");
            return new Date(year, month - 1).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short"
            });
        // eslint-disable-next-line no-unused-vars
        } catch (error) {
            return dateStr;
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white text-gray-900 font-light">
            {/* Header */}
            <header className="mb-4 border-b border-gray-200 pb-3">
                <h1 className="text-5xl font-light mb-3 tracking-wide text-gray-800">
                    {data.personal_info?.full_name || "Your Name"}
                </h1>

                <div className="flex flex-wrap gap-x-8 gap-y-3 text-base text-gray-600">
                    {data.personal_info?.phone && (
                        <span className="flex items-center gap-2">
                            <span>{data.personal_info.phone}</span>
                        </span>
                    )}
                    {data.personal_info?.email && (
                        <span className="flex items-center gap-2">
                            <span>{data.personal_info.email}</span>
                        </span>
                    )}
                    {data.personal_info?.github && (
                        <span className="flex items-center gap-2">
                            <span>{data.personal_info.github}</span>
                        </span>
                    )}
                    {data.personal_info?.linkedin && (
                        <span className="break-all flex items-center gap-2">
                            <span>{data.personal_info.linkedin}</span>
                        </span>
                    )}
                    {data.personal_info?.location && (
                        <span className="flex items-center gap-2">
                            <span>{data.personal_info.location}</span>
                        </span>
                    )}
                    {data.personal_info?.website && (
                        <span className="break-all flex items-center gap-2">
                            <span>{data.personal_info.website}</span>
                        </span>
                    )}
                </div>
            </header>

            {/* Professional Summary */}
            {data.professional_summary && (
                <section className="mb-5">
                    <h2
                        className="text-sm uppercase tracking-widest mb-3 font-medium"
                        style={{ color: accentColor }}
                    >
                        Professional Summary
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base">
                        {data.professional_summary}
                    </p>
                </section>
            )}

            {/* Experience */}
            {data.experience && data.experience.length > 0 && (
                <section className="mb-5">
                    <h2
                        className="text-sm uppercase tracking-widest mb-3 font-medium"
                        style={{ color: accentColor }}
                    >
                        Experience
                    </h2>

                    <div className="space-y-8">
                        {data.experience.map((exp, index) => (
                            <div key={index} className="leading-relaxed">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-medium text-gray-800">
                                            {exp.position}
                                        </h3>
                                        <p className="text-gray-600 font-medium mt-1">
                                            {exp.company}
                                        </p>
                                    </div>
                                    <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                                        {formatDate(exp.start_date)} -{" "}
                                        {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                    </span>
                                </div>
                                {exp.description && (
                                    <p className="text-gray-700 whitespace-pre-line mt-2 leading-relaxed">
                                        {exp.description}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Projects */}
            {data.project && data.project.length > 0 && (
                <section className="mb-5">
                    <h2
                        className="text-sm uppercase tracking-widest mb-3 font-medium"
                        style={{ color: accentColor }}
                    >
                        Projects
                    </h2>

                    <div className="space-y-4">
                        {data.project.map((proj, index) => (
                            <div key={index} className="leading-relaxed">
                                <h3 className="text-xl font-medium text-gray-800 mb-1">
                                    {proj.name}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {proj.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Education */}
            {data.education && data.education.length > 0 && (
                <section className="mb-5">
                    <h2
                        className="text-sm uppercase tracking-widest mb-3 font-medium"
                        style={{ color: accentColor }}
                    >
                        Education
                    </h2>

                    <div className="space-y-4">
                        {data.education.map((edu, index) => (
                            <div key={index} className="flex justify-between items-start">
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-800">
                                        {edu.degree} {edu.field && `in ${edu.field}`}
                                    </h3>
                                    <p className="text-gray-600 mt-1">{edu.institution}</p>
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

            {/* Skills */}
            {data.skills && data.skills.length > 0 && (
                <section>
                    <h2
                        className="text-sm uppercase tracking-widest mb-3 font-medium"
                        style={{ color: accentColor }}
                    >
                        Skills
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-base">
                        {data.skills.join(" • ")}
                    </p>
                </section>
            )}
        </div>
    );
};

export default MinimalTemplate;