import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="glass-nav mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left: Sierra High Logo */}
          <div className="flex items-center justify-center md:justify-start">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-30 h-fit glass rounded-lg flex items-center justify-center">
                <img src="/shs.png" alt="Sierra High School Logo" className="w-full h-full object-contain"/>
              </div>
              <div>
                <div className="text-primary font-bold text-lg">Sierra High</div>
                <div className="text-secondary subtitle text-sm">School</div>
              </div>
            </Link>
          </div>

          {/* Center: Contact Info */}
          <div className="text-center">
            <div className="space-y-2">
              <div className="text-primary font-medium subtitle">Sierra High School</div>
              <div className="text-secondary text-sm">Manteca, CA</div>
              <div className="text-secondary text-sm">
                Advisor: Mrs. Andrade
              </div>
              <a 
                href="mailto:bandrade@musd.net"
                className="text-primary hover:text-secondary text-sm transition-colors duration-200"
              >
                bandrade@musd.net
              </a>
              <div className="flex justify-center items-center space-x-4 mt-3">
                <a 
                  href="https://instagram.com/sierrahs.acadec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                  </svg>
                </a>
                <span className="text-secondary text-sm">@sierrahs.acadec</span>
              </div>
            </div>
          </div>

          {/* Right: Academic Decathlon Logo */}
          <div className="flex items-center justify-center md:justify-end">
            <div className="flex items-center space-x-3">
              <div>
                <div className="text-primary font-bold text-lg text-right">Academic</div>
                <div className="text-secondary subtitle text-sm text-right">Decathlon</div>
              </div>
              <div className="w-30 h-30 glass rounded-lg flex items-center justify-center">
                <img src="/SHSAcaDecLogo.png" alt="SHS Academic Decathlon Logo" className="w-full h-full object-contain"/>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="mt-8 pt-6 border-t border-glass-border">
          <div className="text-center">
            <p className="text-secondary text-sm">
              © 2025 Sierra High School Academic Decathlon. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;