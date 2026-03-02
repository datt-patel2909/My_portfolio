import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaDownload, FaGithub } from 'react-icons/fa';
import profilePhoto from '../assets/profile_photo.png';

const ResumeOverlay = ({ isOpen, onClose }) => {
  return (
    <motion.div
      initial={{ y: '-100%' }}
      animate={{ y: isOpen ? '0%' : '-100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md text-white overflow-y-auto"
    >
      <div className="container mx-auto p-4 md:p-8 relative min-h-screen">
        <div className="mt-20 max-w-4xl mx-auto">
          <header className="mb-12 border-b border-gray-700 pb-8 flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
            <div className="flex-1 text-center md:text-left order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                Patel Datt Hemantkumar
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-400 mb-6">Backend Developer</h2>

              <div className="flex gap-6 text-2xl text-gray-300 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/datt-patel-934353285" className="hover:text-blue-500 transition-colors"><FaLinkedin /></a>
                <a href="https://github.com/datt-patel2909" className="hover:text-gray-400 transition-colors"><FaGithub /></a>
                <a href="mailto:dattpatel0929@gmail.com" className="hover:text-green-500 transition-colors"><FaEnvelope /></a>
              </div>

              <motion.a
                href="/resume.pdf"
                download="Datt_Patel_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full font-bold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all group text-sm md:text-base"
              >
                <span>Download Resume</span>
                <FaDownload className="group-hover:translate-y-1 transition-transform" />
              </motion.a>
            </div>

            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl shrink-0 order-1 md:order-2">
              <img src={profilePhoto} alt="Datt Patel" className="w-full h-full object-cover" />
            </div>
          </header>

          <section className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-pink-500">Summary</h3>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Highly motivated and detail-oriented Backend Developer with a strong foundation in Node.js, Express, and MongoDB. Enthusiastic about DevOps practices and solving complex technical challenges. Eager to leverage my academic background in Information Technology to deliver scalable and efficient backend solutions, while continuously adapting to new technologies.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <section className="md:col-span-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-500">Education</h3>
              <div className="border-l-2 border-blue-500 pl-6 space-y-8">
                <div>
                  <h4 className="text-lg md:text-xl font-bold">B.Tech in Information Technology</h4>
                  <p className="text-sm text-gray-500">Fresher</p>
                  <p className="mt-2 text-gray-300">Comprehensive coursework in computer science principles, emphasizing backend development, database management systems, and core web technologies.</p>
                </div>
              </div>
            </section>
          </div>

          <section className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-teal-400">Technical Skills</h3>
            <div className="space-y-8">
              {[
                { category: "Backend", items: ["Node.js", "Express", "MongoDB"] },
                { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js"] },
                { category: "Tools", items: ["Git", "GitHub", "Postman", "Canva", "Docker"] }
              ].map((group) => (
                <div key={group.category}>
                  <h4 className="text-lg font-semibold text-gray-400 mb-3 uppercase tracking-wider">{group.category}</h4>
                  <div className="flex flex-wrap gap-3 md:gap-4">
                    {group.items.map(skill => (
                      <span key={skill} className="px-3 py-1 md:px-4 md:py-2 bg-gray-800 rounded-full text-xs md:text-sm font-semibold border border-gray-700 hover:border-teal-400 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default ResumeOverlay;
