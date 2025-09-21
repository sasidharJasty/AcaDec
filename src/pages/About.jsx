import { FiEdit3, FiTrendingUp, FiBook, FiPieChart, FiMusic, FiGlobe, FiMic, FiFileText, FiPenTool, FiHeart } from "react-icons/fi";
import React from "react";
import { motion } from "framer-motion";
const About = () => {
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
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-neutral-900">
      <motion.div

               className="fixed bottom-8 right-4  z-20 flex-col items-start"
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
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 mt-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6">
            About Academic Decathlon
          </h1>
          <p className="text-xl text-gray-600 dark:text-neutral-400 max-w-3xl mx-auto">
            A comprehensive academic competition that challenges students across ten diverse disciplines
          </p>
        </div>

        {/* Mission Section */}
        <div className="clean-card p-8 sm:p-12 mb-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-black  mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600  leading-relaxed mb-6">
            Academic Decathlon provides opportunities for students to experience success and honor through academic endeavor. 
            The program is designed to include students from all academic levels and provides each participant the chance to 
            make a valuable contribution to their team through study and participation in the Academic Decathlon competition.
          </p>
          <p className="text-lg text-gray-600  leading-relaxed">
            Our goal is to foster intellectual curiosity, critical thinking, and collaborative learning while building 
            confidence and communication skills that will serve our students throughout their academic and professional careers.
          </p>
        </div>

        {/* What is Academic Decathlon Section */}
        <div className="clean-card p-8 sm:p-12 mb-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-black  mb-6">What is Academic Decathlon?</h2>
          <p className="text-lg text-gray-600  leading-relaxed mb-6">
            Academic Decathlon is a national academic competition for high school students. Teams consist of nine members 
            who compete in ten academic events: Art, Economics, Literature, Mathematics, Music, Science, Social Science, 
            Speech, Interview, and Essay.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Team Structure</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• 3 Honor Students (GPA 3.8-4.0)</li>
                <li>• 3 Scholastic Students (GPA 3.2-3.79)</li>
                <li>• 3 Varsity Students (GPA 0.0-3.19)</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4">Competition Format</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• 7 Multiple-choice tests</li>
                <li>• 2 Performance events</li>
                <li>• 1 Essay writing event</li>
              </ul>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="clean-card p-8 sm:p-12 mb-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-black  mb-6">Our History</h2>
          <p className="text-lg text-gray-600  leading-relaxed mb-6">
            Sierra High School's Academic Decathlon program has been a cornerstone of academic excellence for years. 
            Our team has consistently demonstrated dedication, perseverance, and intellectual curiosity, competing 
            at regional and state levels.
          </p>
          <p className="text-lg text-gray-600  leading-relaxed">
            Under the guidance of our dedicated coaches and through the hard work of our student-athletes, 
            we continue to build upon our tradition of academic achievement while fostering a supportive 
            learning community that celebrates intellectual growth and collaboration.
          </p>
        </div>

        {/* Why Join Section */}
        <div className="clean-card p-8 sm:p-12 mb-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-black  mb-6">Why Join Academic Decathlon?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-black  mb-4">Academic Benefits</h3>
              <ul className="text-gray-600  space-y-3">
                <li className="flex items-start">
                  <span className="text-black  mr-2">•</span>
                  Develop critical thinking and analytical skills
                </li>
                <li className="flex items-start">
                  <span className="text-black  mr-2">•</span>
                  Gain exposure to college-level material
                </li>
                <li className="flex items-start">
                  <span className="text-black  mr-2">•</span>
                  Improve research and study techniques
                </li>
                <li className="flex items-start">
                  <span className="text-black  mr-2">•</span>
                  Enhance public speaking abilities
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black  mb-4">Personal Growth</h3>
              <ul className="text-gray-600  space-y-3">
                <li className="flex items-start">
                  <span className="text-black  mr-2">•</span>
                  Build confidence and self-esteem
                </li>
                <li className="flex items-start">
                  <span className="text-black  mr-2">•</span>
                  Develop teamwork and collaboration skills
                </li>
                <li className="flex items-start">
                  <span className="text-black  mr-2">•</span>
                  Form lasting friendships with like-minded peers
                </li>
                <li className="flex items-start">
                  <span className="text-black  mr-2">•</span>
                  Prepare for college and career success
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Ten Events Section */}
        <div className="clean-card p-8 sm:p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-black  mb-8">The Ten Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((event, index) => (
              <div key={index} className="bg-gray-50 dark:bg-neutral-800 p-6 rounded-xl text-center border border-gray-200 dark:border-gray-700 hover:scale-105 transition-all duration-300">
                <div className="mb-4 flex items-center justify-center text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {React.cloneElement(event.icon, { size: 40, className: "text-current" })}
                      </div>
                <h3 className="text-black dark:text-white font-semibold text-lg mb-3">{event.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {(() => {
                    switch (event.name) {
                      case 'Art':
                        return 'Study of visual arts, art history, and artistic movements';
                      case 'Economics':
                        return 'Principles of micro and macroeconomics';
                      case 'Literature':
                        return 'Analysis of literary works and writing techniques';
                      case 'Mathematics':
                        return 'Algebra, geometry, trigonometry, and pre-calculus';
                      case 'Music':
                        return 'Music theory, history, and appreciation';
                      case 'Science':
                        return 'Biology, chemistry, physics, and earth science';
                      case 'Social Science':
                        return 'History, geography, psychology, and sociology';
                      case 'Speech':
                        return 'Prepared presentation skills and delivery';
                      case 'Interview':
                        return 'Impromptu communication and conversation skills';
                      case 'Essay':
                        return 'Timed writing on current topics and themes';
                      default:
                        return '';
                    }
                  })()}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;