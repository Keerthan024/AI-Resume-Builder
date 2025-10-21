import { Phone, Mail, Link } from "lucide-react";

const ClassicTemplate = ({ data, accentColor = "#000000" }) => {
    return (
        <div className="max-w-4xl mx-auto p-8 bg-white text-gray-800 leading-relaxed font-sans" style={{ lineHeight: '1.4' }}>
            {/* Header - Exact PDF Layout */}
            <header className="mb-6 text-center">
                <h1 className="text-3xl font-bold mb-4 uppercase">PALLA KIRAN KUMAR</h1>
                
                <div className="flex flex-wrap justify-center items-center gap-3 text-sm text-gray-700 mb-4">
                    <div className="flex items-center gap-1">
                        <Phone className="size-4" />
                        <span>86XXXXXXXX</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Mail className="size-4" />
                        <span>KIXXXXXXXX@gmail.com</span>
                    </div>                    <div className="flex items-center gap-1">
                        <Link className="size-4" />
                        <span>HackerRank</span>
                    </div>
                </div>
                
                <p className="text-sm font-semibold">LinkedIn: Kiran</p>
            </header>

            {/* Horizontal Line */}
            <hr className="my-4 border-gray-800" />

            {/* Summary */}
            <section className="mb-6">
                <h2 className="text-xl font-bold mb-3 border-b border-gray-800 pb-1 uppercase">Summary</h2>
                <p className="text-gray-700 text-justify">
                    Ambitious and detail-oriented Full Stack Developer with proficiency in HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, SQL, and RESTful API design. Seeking to contribute to Google's innovative projects by leveraging strong coding abilities and a passion for developing high-performance, scalable applications within a collaborative and forward-thinking team.
                </p>
            </section>

            {/* Education */}
            <section className="mb-6">
                <h2 className="text-xl font-bold mb-3 border-b border-gray-800 pb-1 uppercase">Education</h2>
                
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold text-gray-900">Bachelors in Computer Science | 7 CGPA</h3>
                        <p className="text-gray-700">Manipal Institute of Technology, Bangalore | 2020 - 2024</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900">Pre-University Course (PUC) | 7 CGPA</h3>
                        <p className="text-gray-700">Narayana Group of Institutions, Bangalore | 2018 - 2020</p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900">Secondary School Leaving Certificate (SSLC) | 7 CGPA</h3>
                        <p className="text-gray-700">Narayana Group of Institutions, Bangalore | 2017 - 2018</p>
                    </div>
                </div>
            </section>

            {/* Internship */}
            <section className="mb-6">
                <h2 className="text-xl font-bold mb-3 border-b border-gray-800 pb-1 uppercase">Internship at Google</h2>
                
                <ul className="text-gray-700 space-y-1" style={{ lineHeight: '1.3' }}>
                    <li>- Trained in: Core Java, Advanced Java, SQL, Web Technologies, Python, Angular, and Selenium.</li>
                    <li>- Executed Projects:</li>
                    <li className="ml-4">- Scientific Calculator Website</li>
                    <li className="ml-4">- E-Health Management</li>
                </ul>
            </section>

            {/* Technical Skills */}
            <section className="mb-6">
                <h2 className="text-xl font-bold mb-3 border-b border-gray-800 pb-1 uppercase">Technical Skills</h2>
                <p className="text-gray-700">
                    Java (Core and Advanced), Python, HTML5, CSS3, JavaScript, Angular, SQL, MySQL, Selenium, Spring Boot, Flask, Git, IntelliJ IDEA, Eclipse, VS Code, Docker
                </p>
            </section>

            {/* Projects */}
            <section className="mb-6">
                <h2 className="text-xl font-bold mb-3 border-b border-gray-800 pb-1 uppercase">Projects</h2>
                
                <div className="space-y-4">
                    {/* Scientific Calculator Website */}
                    <div>
                        <h3 className="font-semibold text-gray-900">Scientific Calculator Website</h3>
                        <ul className="text-gray-700 space-y-1" style={{ lineHeight: '1.3' }}>
                            <li>- Developed a fully functional scientific calculator website using Java, JavaScript, HTML, and CSS.</li>
                            <li>- Implemented advanced mathematical functions and operations to ensure accurate calculations.</li>
                        </ul>
                    </div>

                    {/* E-Health Management System */}
                    <div>
                        <h3 className="font-semibold text-gray-900">E-Health Management System</h3>
                        <ul className="text-gray-700 space-y-1" style={{ lineHeight: '1.3' }}>
                            <li>- Led the development of an E-Health Management system aimed at improving healthcare service delivery.</li>
                            <li>- Utilized Java for backend development and Angular for frontend development.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="mb-6">
                <h2 className="text-xl font-bold mb-3 border-b border-gray-800 pb-1 uppercase">Certifications</h2>
                
                <ul className="text-gray-700 space-y-1" style={{ lineHeight: '1.3' }}>
                    <li>- Certified in Java Script from IIT - Madras - NPTEL</li>
                    <li>- Certified in Java Script from IIT - Madras - NPTEL</li>
                    <li>- Certified in Java Script from IIT - Madras - NPTEL</li>
                </ul>
            </section>

            {/* Achievements */}
            <section className="mb-6">
                <h2 className="text-xl font-bold mb-3 border-b border-gray-800 pb-1 uppercase">Achievements</h2>
                
                <ul className="text-gray-700 space-y-1" style={{ lineHeight: '1.3' }}>
                    <li>- Led a group project to design and develop a database management system using SQL and MySQL.</li>
                    <li>- Wrote a series of articles on web development technologies, attracting over 10,000 readers.</li>
                    <li>- Developed a prototype for a mobile app that simplifies grocery shopping using React Native.</li>
                </ul>
            </section>

            {/* Career Skills */}
            <section className="mb-6">
                <h2 className="text-xl font-bold mb-3 border-b border-gray-800 pb-1 uppercase">Career Skills</h2>
                
                <ul className="text-gray-700 space-y-1" style={{ lineHeight: '1.3' }}>
                    <li>- Problem Solving</li>
                    <li>- Critical Thinking</li>
                    <li>- Research Analysis</li>
                </ul>
            </section>

            {/* Area of Interest */}
            <section className="mb-6">
                <h2 className="text-xl font-bold mb-3 border-b border-gray-800 pb-1 uppercase">Area of Interst</h2>
                
                <ul className="text-gray-700 space-y-1" style={{ lineHeight: '1.3' }}>
                    <li>- AIML</li>
                    <li>- Full Stack Developer</li>
                    <li>- Data Science</li>
                </ul>
            </section>

            {/* Hobbies */}
            <section className="mb-6">
                <h2 className="text-xl font-bold mb-3 border-b border-gray-800 pb-1 uppercase">Hobbies</h2>
                
                <ul className="text-gray-700 space-y-1" style={{ lineHeight: '1.3' }}>
                    <li>- Travelling</li>
                    <li>- Trekking</li>
                    <li>- Cooking</li>
                </ul>
            </section>
        </div>
    );
}

export default ClassicTemplate;