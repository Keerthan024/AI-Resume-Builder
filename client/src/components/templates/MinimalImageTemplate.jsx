import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const MinimalImageTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const [year, month] = dateStr.split("-");
        return new Date(year, month - 1).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        });
    };

    return (
        <div className="max-w-5xl mx-auto bg-white text-zinc-800">
            <div className="grid grid-cols-3">

                {/* Image Column */}
                <div className="col-span-1 py-8">
                    {data.personal_info?.image && (
                        <div className="mb-6">
                            <img 
                                src={typeof data.personal_info.image === 'string' 
                                    ? data.personal_info.image 
                                    : URL.createObjectURL(data.personal_info.image)
                                } 
                                alt="Profile" 
                                className="w-32 h-32 object-cover rounded-full mx-auto" 
                                style={{ 
                                    background: accentColor ? `${accentColor}70` : '#6b728070' 
                                }} 
                            />
                        </div>
                    )}
                </div>

                {/* Name + Title */}
                <div className="col-span-2 flex flex-col justify-center py-8 px-8">
                    <h1 className="text-4xl font-bold text-zinc-700 tracking-widest">
                        {data.personal_info?.full_name || "Your Name"}
                    </h1>
                    <p className="uppercase text-zinc-600 font-medium text-sm tracking-widest mt-1">
                        {data.personal_info?.profession || "Profession"}
                    </p>
                </div>

                {/* Left Sidebar */}
                <aside className="col-span-1 border-r border-zinc-300 p-6 pt-4">

                    {/* Contact */}
                    <section className="mb-6">
                        <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
                            CONTACT
                        </h2>
                        <div className="space-y-2 text-sm">
                            {data.personal_info?.phone && (
                                <div className="flex items-center gap-2">
                                    <Phone size={14} style={{ color: accentColor }} />
                                    <span>{data.personal_info.phone}</span>
                                </div>
                            )}
                            {data.personal_info?.email && (
                                <div className="flex items-center gap-2">
                                    <Mail size={14} style={{ color: accentColor }} />
                                    <span>{data.personal_info.email}</span>
                                </div>
                            )}
                            {data.personal_info?.github && (
                                <div className="flex items-center gap-2">
                                    <Github size={14} style={{ color: accentColor }} />
                                    <span>{data.personal_info.github}</span>
                                </div>
                            )}
                            {data.personal_info?.linkedin && (
                                <div className="flex items-center gap-2">
                                    <Linkedin size={14} style={{ color: accentColor }} />
                                    <span>{data.personal_info.linkedin}</span>
                                </div>
                            )}
                            {data.personal_info?.location && (
                                <div className="flex items-center gap-2">
                                    <MapPin size={14} style={{ color: accentColor }} />
                                    <span>{data.personal_info.location}</span>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Education */}
                    {data.education && data.education.length > 0 && (
                        <section className="mb-6">
                            <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
                                EDUCATION
                            </h2>
                            <div className="space-y-3 text-sm">
                                {data.education.map((edu, index) => (
                                    <div key={index}>
                                        <p className="font-semibold uppercase text-zinc-800">{edu.degree}</p>
                                        <p className="text-zinc-600 mt-1">{edu.institution}</p>
                                        <p className="text-xs text-zinc-500 mt-1">
                                            {formatDate(edu.graduation_date)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Skills */}
                    {data.skills && data.skills.length > 0 && (
                        <section>
                            <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
                                SKILLS
                            </h2>
                            <ul className="space-y-1.5 text-sm">
                                {data.skills.map((skill, index) => (
                                    <li key={index} className="text-zinc-700">{skill}</li>
                                ))}
                            </ul>
                        </section>
                    )}
                </aside>

                {/* Right Content */}
                <main className="col-span-2 p-6 pt-4">

                    {/* Summary */}
                    {data.professional_summary && (
                        <section className="mb-4">
                            <h2 className="text-sm font-semibold tracking-widest mb-3" style={{ color: accentColor }} >
                                SUMMARY
                            </h2>
                            <p className="text-zinc-700 leading-relaxed text-sm">
                                {data.professional_summary}
                            </p>
                        </section>
                    )}

                    {/* Experience */}
                    {data.experience && data.experience.length > 0 && (
                        <section className="mb-4">
                            <h2 className="text-sm font-semibold tracking-widest mb-3" style={{ color: accentColor }} >
                                EXPERIENCE
                            </h2>
                            <div className="space-y-4">
                                {data.experience.map((exp, index) => (
                                    <div key={index} className="mb-4">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-semibold text-zinc-900 text-sm">
                                                {exp.position}
                                            </h3>
                                            <span className="text-xs text-zinc-500 whitespace-nowrap ml-2">
                                                {formatDate(exp.start_date)} -{" "}
                                                {exp.is_current ? "Present" : formatDate(exp.end_date)}
                                            </span>
                                        </div>
                                        <p className="text-sm mb-2 font-medium" style={{ color: accentColor }} >
                                            {exp.company}
                                        </p>
                                        {exp.description && (
                                            <ul className="list-disc list-inside text-sm text-zinc-700 leading-relaxed space-y-1">
                                                {exp.description.split("\n").map((line, i) => (
                                                    <li key={i}>{line}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Projects */}
                    {data.project && data.project.length > 0 && (
                        <section className="mb-4">
                            <h2 className="text-sm font-semibold tracking-widest mb-3" style={{ color: accentColor }}>
                                PROJECTS
                            </h2>
                            <div className="space-y-4">
                                {data.project.map((project, index) => (
                                    <div key={index} className="mb-4">
                                        <h3 className="text-sm font-semibold text-zinc-800">{project.name}</h3>
                                        <p className="text-sm mb-2 font-medium" style={{ color: accentColor }} >
                                            {project.type}
                                        </p>
                                        {project.description && (
                                            <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1">
                                                {project.description.split("\n").map((line, i) => (
                                                    <li key={i}>{line}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Achievements */}
                    {data.achievement && data.achievement.length > 0 && (
                        <section className="mb-4">
                            <h2 className="text-sm font-semibold tracking-widest mb-3" style={{ color: accentColor }}>
                                ACHIEVEMENTS
                            </h2>
                            <ul className="list-disc list-inside text-sm text-zinc-700 leading-relaxed space-y-1">
                                {data.achievement.map((ach, index) => (
                                    <li key={index}>{ach.title}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {/* Certifications */}
                    {data.certification && data.certification.length > 0 && (
                        <section>
                            <h2 className="text-sm font-semibold tracking-widest mb-3" style={{ color: accentColor }}>
                                CERTIFICATIONS
                            </h2>
                            <ul className="list-disc list-inside text-sm text-zinc-700 leading-relaxed space-y-1">
                                {data.certification.map((cert, index) => (
                                    <li key={index}>
                                        {cert.title}
                                        {cert.issuer && (
                                            <span className="text-zinc-700 text-xs ml-2">
                                                – {cert.issuer}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}
                </main>
            </div>
        </div>
    );
};

export default MinimalImageTemplate;
