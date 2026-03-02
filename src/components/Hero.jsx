import { motion } from 'framer-motion';
import profilePhoto from '../assets/profile_photo.png';

const Hero = () => {
    return (
        <section className="section overflow-hidden min-h-screen flex items-center relative">
            {/* Background Ambience removed in favor of global background */}


            <div className="container relative z-10 h-full">
                <div className="grid md:grid-cols-2 gap-8 items-center h-full">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                        >

                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
                                Datt <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Patel</span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="max-w-xl"
                        >
                            <div className="h-1 w-20 bg-pink-500 mb-8"></div>
                            <p className="text-xl md:text-3xl text-gray-300 font-light leading-relaxed">
                                Backend Developer &amp; DevOps Enthusiast <span className="text-white font-normal">building robust functionality</span>
                                <span className="text-white font-normal"> and efficient deployment pipelines 🚀.</span>
                            </p>
                        </motion.div>
                    </div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="flex justify-center md:justify-end relative mt-10 md:mt-0"
                    >
                        {/* Decorative Circle Behind - Optimized by reducing blur radius and pulse */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full blur-[40px] opacity-30"></div>

                        <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                            <img
                                src={profilePhoto}
                                alt="Patel Datt Hemantkumar"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay gradient for better blending if needed */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <div className="text-gray-500 text-sm animate-bounce flex flex-col items-center gap-2">
                        <span>SCROLL</span>
                        <div className="w-[1px] h-12 bg-gray-500"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
