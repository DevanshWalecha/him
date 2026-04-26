
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-estate-800 text-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-display text-2xl mb-4">TECHNOVENT</h3>
            <p className="text-estate-300 mb-4">
              Empowering engineering innovation through cutting-edge solutions and services to societies.
            </p>
            {/* Removed contact number as requested */}
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-estate-300">
              <li><a href="#" className="hover:text-white transition-colors">Technical Society Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">MEP360 Software</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Skill Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Event Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-estate-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Our Clients</h4>
            <ul className="space-y-2 text-estate-300">
              <li>
                <a 
                  href="https://www.ductovent.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Ductovent
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ourfocus.co/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  FOCUS
                </a>
              </li>
              <li>
                <a 
                  href="https://societyforindoorenvironment.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Society for Indoor Environment
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-estate-700 text-center text-estate-300">
          <p>&copy; {new Date().getFullYear()} TECHNOVENT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
