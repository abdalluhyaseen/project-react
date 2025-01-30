import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer1">
      <div className="container2 mx-auto px-4 flex flex-wrap justify-around text-center md:text-left">
       
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Smart School</h3>
          <p>We work to provide the best educational level for our students.</p>
        </div>

       
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-yellow-400">about school</a></li>
            <li><a href="#" className="hover:text-yellow-400">services</a></li>
            <li><a href="#" className="hover:text-yellow-400">call us</a></li>
          </ul>
        </div>

       
        <div className="w-full md:w-1/3">
          <h3 className="text-xl font-semibold mb-2">contact us</h3>
          <p><FaMapMarkerAlt className="inline-block text-yellow-400 mr-2" /> Jordan,Aqaba</p>
          <p><FaPhone className="inline-block text-yellow-400 mr-2" /> +962 7XXXXXXXX</p>
          <p><FaEnvelope className="inline-block text-yellow-400 mr-2" /> info@school.com</p>
        </div>
        <p>&copy; 2025 SmartSchool. All rights reserved.</p>
      </div>

      
      
        
      
    </footer>
  );
};

export default Footer;
