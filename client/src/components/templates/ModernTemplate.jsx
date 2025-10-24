import { Mail, Phone, MapPin, Linkedin, Globe, Github } from "lucide-react";

const ClassicTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-5 bg-white text-gray-800 leading-relaxed">
      {/* Header */}
      <header
        className="text-center mb-1 pb-4 border-b-2"
        style={{ borderColor: accentColor }}
      >
        <h1 className="text-2xl font-bold mb-1" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
          {data.personal_info?.phone && (
            <div className="flex items-center gap-1">
              <Phone className="size-4" />
              <span>{data.personal_info.phone}</span>
            </div>
          )}
          {data.personal_info?.email && (
            <div className="flex items-center gap-1">
              <Mail className="size-4" />
              <span>{data.personal_info.email}</span>
            </div>
          )}
          {data.personal_info?.github && (
            <div className="flex items-center gap-1">
              <Github className="size-4" />
              <span>{data.personal_info.github}</span>
            </div>
          )}
          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin className="size-4" />
              <span>{data.personal_info.linkedin}</span>
            </div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-1">
              <MapPin className="size-4" />
              <span className="break-all">{data.personal_info.location}</span>
            </div>
          )}
          {data.personal_info?.website && (
            <div className="flex items-center gap-1">
              <Globe className="size-4" />
              <span className="break-all">{data.personal_info.website}</span>
            </div>
          )}
        </div>
      </header>

      {/* 1. Professional Summary */}
      {data.professional_summary && (
        <section className="mb-1">
          <h2
            className="text-l font-semibold mb-0.5"
            style={{ color: accentColor }}
          >
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* 2. Professional Experience */}
      {data.experience && data.experience.length > 0 && (
        <section className="mb-1">
          <h2
            className="text-l font-semibold mb-1"
            style={{ color: accentColor }}
          >
            INTERNSHIP
          </h2>

          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div
                key={index}
                className="border-l-3 pl-4"
                style={{ borderColor: accentColor }}
              >
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    <p className="text-gray-700 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <p>
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current ? "Present" : formatDate(exp.end_date)}
                    </p>
                  </div>
                </div>
                {exp.description && (
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. Skills */}
      {data.skills && data.skills.length > 0 && (
        <section className="mb-1">
          <h2
            className="text-l font-semibold mb-1"
            style={{ color: accentColor }}
          >
            CORE SKILLS
          </h2>

          <div className="flex gap-2 flex-wrap">
            {data.skills.map((skill, index) => (
              <div key={index} className="text-gray-700">
                • {skill}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. Projects */}
      {data.project && data.project.length > 0 && (
        <section className="mb-1">
          <h2
            className="text-l font-semibold mb-1"
            style={{ color: accentColor }}
          >
            PROJECTS
          </h2>

          <ul className="space-y-3 ">
            {data.project.map((proj, index) => (
              <div
                key={index}
                className="flex justify-between items-start border-l-3 border-gray-300 pl-6"
              >
                <div>
                  <li className="font-semibold text-gray-800 ">{proj.name}</li>
                  <p className="text-gray-600">{proj.description}</p>
                </div>
              </div>
            ))}
          </ul>
        </section>
      )}

      {/* 5. Education */}
      {data.education && data.education.length > 0 && (
        <section className="mb-1">
          <h2
            className="text-l font-semibold mb-0.5"
            style={{ color: accentColor }}
          >
            EDUCATION
          </h2>

          <div className="space-y-2">
            {data.education.map((edu, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {edu.degree} {edu.field && `in ${edu.field}`}
                  </h3>
                  <p className="text-gray-700">{edu.institution}</p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                  )}
                </div>
                <div className="text-sm text-gray-600">
                  <p>{formatDate(edu.graduation_date)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. Achievements */}
      {data.achievement && data.achievement.length > 0 && (
        <section className="mb-1">
          <h2
            className="text-l font-semibold mb-1"
            style={{ color: accentColor }}
          >
            ACHIEVEMENTS
          </h2>
          <ul className="space-y-2">
            {data.achievement.map((ach, index) => (
              <li key={index} className="text-gray-700">
                <span className="font-medium text-gray-900">{ach.title}</span>
                {ach.date && (
                  <span className="text-gray-600 text-sm">
                    {" "}
                    — {formatDate(ach.date)}
                  </span>
                )}
                {ach.description && (
                  <p className="text-gray-600">{ach.description}</p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 7. Certifications */}
      {data.certification && data.certification.length > 0 && (
        <section className="mb-1">
          <h2
            className="text-l font-semibold mb-1"
            style={{ color: accentColor }}
          >
            CERTIFICATIONS
          </h2>
          <ul className="space-y-2">
            {data.certification.map((cert, index) => (
              <li key={index} className="text-gray-700">
                <span className="font-medium text-gray-900">{cert.name}</span>
                {cert.issuing_organization && (
                  <span className="text-gray-600">
                    {" "}
                    — {cert.issuing_organization}
                  </span>
                )}
                {(cert.issue_date || cert.expiration_date) && (
                  <p className="text-sm text-gray-600">
                    {cert.issue_date &&
                      `Issued: ${formatDate(cert.issue_date)} `}
                    {cert.expiration_date &&
                      ` | Expires: ${formatDate(cert.expiration_date)}`}
                  </p>
                )}
                {cert.credential_url && (
                  <a
                    href={cert.credential_url}
                    className="text-blue-600 text-sm underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Credential
                  </a>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default ClassicTemplate;
