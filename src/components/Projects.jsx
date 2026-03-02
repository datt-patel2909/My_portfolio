import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import todoImg from '../assets/projects/todo.png';
import jobTrackerImg from '../assets/projects/jobtracker.png';
import nexkartImg from '../assets/projects/nexkart.png';
const projects = [
    {
        title: "Todo List",
        subtitle: "Task Management App",
        description: "A task management application supporting CRUD operations with a clean backend structure.",
        tags: ["Node.js", "Express", "MongoDB", "HTML/CSS/JS"],
        color: "from-purple-500 to-indigo-500",
        image: todoImg,
        github: "https://github.com/datt-patel2909/todo",
        demo: "https://todo-appbydattpatel.up.railway.app/"
    },
    {
        title: "Job Tracker",
        subtitle: "Application Tracking System",
        description: "A job application tracking system to manage applications, statuses, and deadlines efficiently.",
        tags: ["Node.js", "Express", "MongoDB", "HTML/CSS/JS"],
        color: "from-emerald-500 to-teal-500",
        image: jobTrackerImg,
        github: "https://github.com/datt-patel2909/Job-Tracker",
        demo: "https://job-tracker-auwa.onrender.com/"
    },
    {
        title: "E-commerce NexKart",
        subtitle: "E-commerce Platform",
        description: "An e-commerce platform featuring product listings, cart management, and order workflows.",
        tags: ["Node.js", "Express", "MongoDB", "HTML/CSS/JS"],
        color: "from-orange-500 to-rose-500",
        image: nexkartImg,
        github: "https://github.com/datt-patel2909/e-commerce-NexKart-",
        demo: "https://nexkart.onrender.com/"
    }
];


const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative mb-16 last:mb-0"
        >
            <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />

            <div className="relative bg-[#111] border border-gray-800 p-6 md:p-12 rounded-3xl overflow-hidden hover:border-gray-600 transition-colors">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div className="flex-1 order-2 md:order-1">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">{project.subtitle}</h3>
                        <h2 className={`text-3xl md:text-5xl font-display font-bold mb-6 pb-2 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                            {project.title}
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-gray-400 border border-white/10">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors border border-white/10 text-sm font-medium"
                                >
                                    <FaGithub /> Code
                                </a>
                            )}
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white rounded-full transition-colors text-sm font-medium shadow-lg"
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Decorative Visual Element */}
                    <div className="w-full md:w-1/3 order-1 md:order-2 mb-6 md:mb-0">
                        <div className={`aspect-square rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all relative overflow-hidden flex items-center justify-center max-w-[200px] md:max-w-none mx-auto`}>
                            {project.image ? (
                                <div className="w-full h-full p-6 flex items-center justify-center">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-contain filter-none opacity-100 drop-shadow-2xl" />
                                </div>
                            ) : (
                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section className="section py-20 relative">
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-6xl md:text-8xl font-display font-bold text-white mb-20 opacity-10"
                >
                    Projects
                </motion.h2>

                <div className="max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
