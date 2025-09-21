import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

import "../index.css";

const navLinks = [
  { to: "/", label: "Welcome" },
  { to: "/about", label: "About Us" },
  { to: "/team", label: "Meet the Team" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Track scroll position
  const { scrollY } = useScroll();

  // Animate width, border radius, and vertical offset
  const width = useTransform(scrollY, [0, 100], ["100%", "90%"]);
  const borderRadius = useTransform(scrollY, [0, 100], ["0rem", "2rem"]);
  const y = useTransform(scrollY, [0, 100], ["1rem", "1rem"]);
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);

  return (
    
    <motion.header
      style={{ width, borderRadius, y, scale }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-50 max-w-5xl"
    >
      <motion.div
        className="glass-container relative overflow-hidden backdrop-blur-sm  dark:!bg-black/20"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glass Layers */}
        <div className="glass-filter"></div>
        <div className="glass-overlay"></div>
        <div className="glass-specular"></div>

        {/* Glass Content */}
        <div className="glass-content">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.15, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
              className="w-15 h-15 rounded-lg flex items-center justify-center  font-bold"
            >
              <img src="/SHSAcaDecLogo.png" alt="SHS Academic Decathlon Logo" className="w-full h-full object-contain"/>
            </motion.div>
            <div className="header-text flex flex-col space-y-0 font-bold text-lg text-black dark:text-white">
       
                <span>Academic Decathlon</span>
                <span className="font-normal !text-sm mt-0">Sierra High School</span>

            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-text hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <motion.div key={item.to} whileHover={{ scale: 1.1 }}>
                <Link
                  to={item.to}
                  className="glass-content__link relative group text-black dark:text-white "
                >
                  <span className="!mix-blend-difference">{item.label}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-current transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}


          </nav>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center space-x-4">


            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="glass-item"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.8 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="glass-container glass-container--rounded glass-container--small mt-2 origin-top"
          >
            <div className="glass-filter"></div>
            <div className="glass-overlay"></div>
            <div className="glass-specular"></div>
            <div className="glass-content flex-col items-start gap-2 header-text">
              {navLinks.map((item) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to={item.to}
                    className="glass-content__link w-full !mix-blend-difference"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
