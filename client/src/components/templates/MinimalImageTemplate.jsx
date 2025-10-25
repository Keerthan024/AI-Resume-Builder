import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const MinimalImageTemplate = ({ data, accentColor = "#2563eb" }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800 shadow-sm border border-zinc-200">
      <div className="grid grid-cols-3">
        {/* ===== LEFT SIDEBAR ===== */}
        <aside className="col-span-1 bg-zinc-50 border-r border-zinc-200 p-6">
          {/* Profile Image */}
          {data.personal_info?.image && (
            <div className="flex justify-center mb-6">
              <img
                src={
                  typeof data.personal_info.image === "string"
                    ? data.personal_info.image
                    : URL.createObjectURL(data.personal_info.image)
                }
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4"
                style={{ borderColor: accentColor }}
              />
            </div>
          )}

          {/* Contact Info */}
          <section className="mb-6">
            <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3 border-b pb-1 border-zinc-300">
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

          {/* Core Skills */}
          {data.skills && data.skills.length > 0 && (
            <section className="mb-6">
              <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3 border-b pb-1 border-zinc-300">
                CORE SKILLS
              </h2>
              <ul className="list-disc list-inside space-y-1 text-sm text-zinc-700">
                {data.skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Education */}
          {data.education && data.education.length > 0 && (
            <section>
              <h2 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3 border-b pb-1 border-zinc-300">
                EDUCATION
              </h2>
              <div className="space-y-3 text-sm">
                {data.education.map((edu, index) => (
                  <div key={index}>
                    <p className="font-semibold text-zinc-800">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </p>
                    <p className="text-zinc-600">{edu.institution}</p>
                    <p className="text-xs text-zinc-500 mt-1">
                      {formatDate(edu.graduation_date)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </aside>

        {/* ===== RIGHT SECTION ===== */}
        <main className="col-span-2 p-8">
          {/* Header */}
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-zinc-800">
              {data.personal_info?.full_name || "Your Name"}
            </h1>
            <p
              className="uppercase tracking-wide text-sm font-medium mt-1"
              style={{ color: accentColor }}
            >
              {data.personal_info?.profession || "Your Profession"}
            </p>
          </header>

          {/* Professional Summary */}
          {data.professional_summary && (
            <section className="mb-6">
              <h2
                className="text-sm font-semibold tracking-widest mb-2 border-b pb-1 border-zinc-300"
                style={{ color: accentColor }}
              >
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-sm text-zinc-700 leading-relaxed">
                {data.professional_summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <section className="mb-6">
              <h2
                className="text-sm font-semibold tracking-widest mb-2 border-b pb-1 border-zinc-300"
                style={{ color: accentColor }}
              >
                PROFESSIONAL EXPERIENCE
              </h2>
              <div className="space-y-4">
                {data.experience.map((exp, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold text-sm text-zinc-900">
                        {exp.position}
                      </h3>
                      <span className="text-xs text-zinc-500 whitespace-nowrap">
                        {formatDate(exp.start_date)} –{" "}
                        {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
                    <p
                      className="text-sm font-medium mb-2"
                      style={{ color: accentColor }}
                    >
                      {exp.company}
                    </p>
                    {exp.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1">
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
            <section className="mb-6">
              <h2
                className="text-sm font-semibold tracking-widest mb-2 border-b pb-1 border-zinc-300"
                style={{ color: accentColor }}
              >
                PROJECTS
              </h2>
              <div className="space-y-4">
                {data.project.map((project, index) => (
                  <div key={index}>
                    <h3 className="text-sm font-semibold text-zinc-800">
                      {project.name}
                    </h3>
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
            <section className="mb-6">
              <h2
                className="text-sm font-semibold tracking-widest mb-2 border-b pb-1 border-zinc-300"
                style={{ color: accentColor }}
              >
                ACHIEVEMENTS
              </h2>
              <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1">
                {data.achievement.map((ach, index) => (
                  <li key={index}>{ach.title}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Certifications */}
          {data.certification && data.certification.length > 0 && (
            <section>
              <h2
                className="text-sm font-semibold tracking-widest mb-2 border-b pb-1 border-zinc-300"
                style={{ color: accentColor }}
              >
                CERTIFICATIONS
              </h2>
              <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1">
                {data.certification.map((cert, index) => (
                  <li key={index}>
                    <span className="font-medium">{cert.name}</span>
                    {cert.issuing_organization && (
                      <span className="text-zinc-600 text-xs ml-1">
                        — {cert.issuing_organization}
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
