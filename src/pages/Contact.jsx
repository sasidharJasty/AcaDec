import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:bandrade@musd.net?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-900">
      <motion.div

               className=" fixed bottom-8 right-4  z-20 flex-col items-start"
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
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white my-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Whether you're interested in joining our team, need academic support, or want to connect with our program, 
            we're here to help. Reach out to us through any of the methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <section className="space-y-8">
            {/* Advisor Card */}
            <div className="clean-card p-8 rounded-2xl">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-black  text-white  rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black  mb-2">Faculty Advisor</h3>
                  <p className="text-lg font-semibold text-gray-700 mb-1">Mrs. Belle Andrade</p>
                  <p className="text-gray-600 mb-4">Math Department</p>
                  <div className="space-y-2">
                    <a 
                      href="mailto:bandrade@musd.net" 
                      className="flex items-center text-black hover:text-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      bandrade@musd.net
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* School Information */}
            <div className="clean-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-black mb-6">School Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-black mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Sierra High School</p>
                    <p className="text-gray-600">
                      1700 Thomas street<br />
                      Manteca, CA 95336
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-black mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Main Office</p>
                    <p className="text-gray-600">(209) 858-7410</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media & Links */}
            <div className="clean-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-black mb-6">Connect With Us</h3>
              <div className="space-y-4">
                <a 
                  href="https://sierrahigh.mantecausd.net/activities/academic-decathlon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:scale-105 transition-all"
                >
                  <div className="bg-black text-white rounded-lg p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black">School Website</p>
                    <p className="text-gray-600 text-sm">sierra.musd.net</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Meeting Information */}
            <div className="clean-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-black mb-6">Team Meetings</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-black mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Practice Schedule</p>
                    <p className="text-gray-600">
                      Tuesdays & Thursdays<br />
                      11:50 AM - 12:20 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-black mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Location</p>
                    <p className="text-gray-600">Room 14 - Mrs. Andrade's Classroom</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-black mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Practice Schedule</p>
                    <p className="text-gray-600">
                      Fridays<br />
                      7:20AM - 8:20AM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-black mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Location</p>
                    <p className="text-gray-600">Library</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section>
            <div className="clean-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-black mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="Joining the Team">Interested in Joining the Team</option>
                    <option value="Academic Support">Academic Support Question</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Partnership">Partnership Opportunity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-black focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                    placeholder="Tell us more about your inquiry or interest in Academic Decathlon..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full clean-btn py-4 text-lg rounded-lg"
                >
                  Send Message
                </button>
              </form>

              <div className="mt-6 p-4 bg-gray-50  rounded-lg border border-gray-200 ">
                <p className="text-sm text-gray-600 ">
                  <strong>Note:</strong> Submitting this form will open your default email client with a pre-filled message 
                  to our faculty advisor. Make sure you have an email client configured, or you can contact us directly 
                  at <a href="mailto:bandrade@musd.net" className="text-black dark:text-white hover:underline">bandrade@musd.net</a>.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action */}
        <section className="mt-20">
          <div className="clean-card p-8 sm:p-12 text-center rounded-2xl">
            <h2 className="text-3xl font-bold text-black  mb-6">
              Ready to Join Our Academic Journey?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Academic Decathlon offers an incredible opportunity to challenge yourself, grow intellectually, 
              and be part of a supportive academic community. We welcome students of all academic levels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/team" 
                className="clean-btn px-8 py-4 text-lg rounded-lg"
              >
                Meet Our Team
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg rounded-lg transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;