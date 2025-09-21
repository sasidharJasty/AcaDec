import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { FiEdit3, FiBook, FiTrendingUp, FiMusic, FiPieChart, FiGlobe, FiMic, FiFileText, FiPenTool, FiHeart } from 'react-icons/fi';
import React from 'react';
const Home = () => {
  const subjects = [
  { name: 'Art', icon: <FiEdit3 size={32} /> },
  { name: 'Economics', icon: <FiTrendingUp size={32} /> },
  { name: 'Literature', icon: <FiBook size={32} /> },
  { name: 'Mathematics', icon: <FiPieChart size={32} /> },
  { name: 'Music', icon: <FiMusic size={32} /> },
  { name: 'Science', icon: <FiGlobe size={32} /> },
  { name: 'Social Science', icon: <FiGlobe size={32} /> },
  { name: 'Speech', icon: <FiMic size={32} /> },
  { name: 'Interview', icon: <FiFileText size={32} /> },
  { name: 'Essay', icon: <FiPenTool size={32} /> },
];
  return (

    <div className="min-h-screen bg-gray-50 dark:bg-neutral-900">
       <motion.div

               className="hidden lg:flex fixed bottom-8 right-4  z-20 flex-col items-start"
             >
               <div className="clean-card flex items-center gap-2 px-4 py-2 rounded-xl shadow-md bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700">
                 
                 <span className="text-sm text-gray-700 font-medium">
                   Made with
                 </span>
                 <FiHeart className="text-red-400 text-lg rounded-full fill-red-400" />
                 <span className="text-sm text-gray-700  font-medium">
                   by Sasidhar Jasty
                 </span>
               </div>
             </motion.div>
      {/* Hero Section with Team Photo */}
      {/* Hero Section with Team Photo */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
  {/* Background Team Photo */}
  <img
    src="/Picture1.jpg"
    alt="Sierra High Academic Decathlon Team"
    className="absolute inset-0 w-full h-full object-cover object-center"
  />
  {/* Dark/Light Overlay */}
  <div className="absolute inset-0 bg-white/30 dark:bg-neutral-900/50"></div>

  {/* Glass Hero Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className="relative z-10 max-w-4xl mx-auto px-6"
  >
    <div className="glass-container glass-container--large glass-container--rounded backdrop-blur-xl !bg-white/60 dark:!bg-neutral-900/30 border border-white/30 dark:border-white/10 shadow-xl">
      {/* Glass Content */}
      <div className="glass-content flex-col text-center py-12 sm:py-16">
        

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl sm:text-4xl font-semibold text-gray-700 dark:text-gray-300 mt-4"
        >
          Sierra High School
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl sm:text-6xl font-extrabold text-black dark:text-white drop-shadow"
        >
          Academic Decathlon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mt-6 mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          Dedicated students pursuing excellence across ten academic disciplines through collaboration and intellectual growth.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/team"
            className="px-8 py-3 rounded-xl text-lg font-medium backdrop-blur-md bg-black/80 text-white hover:bg-black/90 dark:bg-white/80 dark:text-black dark:hover:bg-white transition"
          >
            Meet Our Team
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 rounded-xl text-lg font-medium border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </div>
  </motion.div>

  {/* Bottom Glass Fade */}
  <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-white/0 via-white/50 to-[#F9FAFB] dark:from-neutral-900/0 dark:via-neutral-900/30 dark:to-neutral-900 pointer-events-none"></div>
</section>

{/* Curved Wave + Glass Transition */}
<div className="relative -mt-1">
  <svg
    viewBox="0 0 1200 120"
    className="w-full h-20 fill-white dark:fill-neutral-900"
    preserveAspectRatio="none"
  >
    <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" />
  </svg>
</div>

{/* Floating Particles */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">
  <div className="absolute top-8 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
  <div className="absolute top-16 right-1/3 w-3 h-3 bg-purple-400/20 rounded-full animate-pulse delay-1000"></div>
  <div className="absolute top-12 right-1/4 w-1 h-1 bg-green-400/40 rounded-full animate-pulse delay-500"></div>
</div>

{/* Academic Subjects Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900 relative">
  {/* Subtle Background Pattern */}
  <div className="absolute inset-0 opacity-5 dark:opacity-10">
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2px, transparent 0)`,
        backgroundSize: '50px 50px',
        backgroundPosition: '0 0, 25px 25px',
      }}
    ></div>
  </div>

  <div className="max-w-7xl mx-auto relative">
    <div className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6"
      >
        Ten Subjects. One Vision.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
      >
        Academic Decathlon challenges students across diverse disciplines, fostering critical thinking and comprehensive knowledge.
      </motion.p>
    </div>

    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  viewport={{ once: true, margin: "-100px" }}
  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
>
  {subjects.map((subject, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="glass-container glass-container--medium glass-container--rounded p-6 flex flex-col items-center justify-center
                 hover:scale-105 transition-transform duration-300 group
                 backdrop-blur-md !bg-white  border border-white/20 shadow-2xl"
    >
      {/* Icon */}
      <div className="mb-4 flex items-center justify-center text-black  group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {React.cloneElement(subject.icon, { size: 40, className: "text-current" })}
      </div>

      {/* Name */}
      <h3 className="text-center text-black font-semibold text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
        {subject.name}
      </h3>
    </motion.div>
  ))}
</motion.div>

  </div>
</section>


      {/* This Year's Theme Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6">
              This Year's Theme
            </h2>
            <div className="text-6xl sm:text-7xl mb-8">🎩✨</div>
            <h3 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6">
              The Roaring Twenties
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Journey back to the 1920s - an era of jazz, innovation, and cultural transformation. 
              This year's Academic Decathlon theme explores the decade that changed America forever.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="clean-card p-8 text-center rounded-2xl">
              <div className="text-4xl mb-4">🎷</div>
              <h4 className="text-xl font-bold text-black mb-3">Jazz Age</h4>
              <p className="text-gray-600 text-sm">
                The birth of jazz music and its cultural impact on American society
              </p>
            </div>
            
            <div className="clean-card p-8 text-center rounded-2xl">
              <div className="text-4xl mb-4">💰</div>
              <h4 className="text-xl font-bold text-black mb-3">Economic Boom</h4>
              <p className="text-gray-600 text-sm">
                Industrial growth, mass production, and the rise of consumer culture
              </p>
            </div>
            
            <div className="clean-card p-8 text-center rounded-2xl">
              <div className="text-4xl mb-4">👗</div>
              <h4 className="text-xl font-bold text-black mb-3">Social Change</h4>
              <p className="text-gray-600 text-sm">
                Women's rights, fashion revolution, and changing social norms
              </p>
            </div>
            
            <div className="clean-card p-8 text-center rounded-2xl">
              <div className="text-4xl mb-4">📻</div>
              <h4 className="text-xl font-bold text-black mb-3">Technology</h4>
              <p className="text-gray-600 text-sm">
                Radio broadcasting, automobiles, and communication advances
              </p>
            </div>
          </div>

          <div className="clean-card p-8 sm:p-12 rounded-2xl text-center">
            <h4 className="text-2xl font-bold text-black  mb-6">
              Exploring the Decade of Innovation
            </h4>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From the Harlem Renaissance to Prohibition, from the rise of Hollywood to scientific breakthroughs, 
              the 1920s shaped the modern world. Our team will dive deep into this fascinating era across all 
              ten academic disciplines, uncovering the stories, innovations, and personalities that defined 
              the Roaring Twenties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about" 
                className="clean-btn px-8 py-3 rounded-lg text-lg font-medium"
              >
                Learn About Our Program
              </Link>
              <Link 
                to="/team" 
                className="border-2 border-black  text-black  hover:bg-black hover:text-white   px-8 py-3 rounded-lg text-lg font-medium transition-all"
              >
                Meet Our Scholars
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-6">
              Discover More
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our team, learn about our mission, and find ways to get involved 
              with Sierra High's Academic Decathlon program.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Meet the Team Card */}
            <div className="clean-card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-black  text-white  rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Meet the Team</h3>
              <p className="text-gray-600 mb-6">
                Discover our team members, leadership roles, and individual contributions 
                to our Academic Decathlon success.
              </p>
              <Link 
                to="/team" 
                className="clean-btn px-6 py-3 rounded-xl font-semibold"
              >
                Learn More
              </Link>
            </div>

            {/* About Us Card */}
            <div className="clean-card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-black  text-white  rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">About Us</h3>
              <p className="text-gray-600 mb-6">
                Learn about our history, mission, vision, and what makes Academic Decathlon 
                such a unique and enriching experience.
              </p>
              <Link 
                to="/about" 
                className="clean-btn px-6 py-3 rounded-xl font-semibold"
              >
                Learn More
              </Link>
            </div>

            {/* Contact Card */}
            <div className="clean-card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-black  text-white  rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                Join our team, get support, or connect with us through email and social media 
                for updates and opportunities.
              </p>
              <Link 
                to="/contact" 
                className="clean-btn px-6 py-3 rounded-xl font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="clean-card rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl font-bold text-black mb-4">40+</div>
                <h3 className="text-black text-xl font-semibold mb-2">Team Members</h3>
                <p className="text-gray-600">Dedicated students committed to academic excellence</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-4">10</div>
                <h3 className="text-black text-xl font-semibold mb-2">Academic Subjects</h3>
                <p className="text-gray-600">Comprehensive curriculum across multiple disciplines</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-black mb-4">100%</div>
                <h3 className="text-black text-xl font-semibold mb-2">Dedication</h3>
                <p className="text-gray-600">Commitment to learning and personal growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;