import { FaFacebookF,FaLinkedin , FaInstagram} from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          <div>
            <h3 className="font-semibold text-lg mb-4">Talent pool</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  Designers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  Marketing experts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  Product managers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
            
              <li>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  Payroll
                </a>
              </li>
              
              <li>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  Equipment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  Workspace
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Who we are</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-200 transition-colors">
                  FAQ
                </a>
              </li>
             
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-white p-2 rounded">
                <img src='/TMS.png' className="h-10 w-10 rounded-full"/>
              </div>
              <div>
                <div className="font-bold text-lg">EPIC</div>
              </div>
            </div>

            <div className="flex gap-3 mb-6">
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full"
                aria-label="Facebook"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5"/>
              </a>
              <a
                href="#"
                className="bg-white/20 hover:bg-white/30 transition-colors p-2 rounded-full"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5"/>
              </a>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Subscribe to newsletter</h3>
              <form className="relative">
                <input
                  type="email"
                  placeholder="email"
                  className="w-full px-4 py-3 rounded-full bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 transition-colors text-white p-2 rounded-full"
                  aria-label="Submit"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-white/60 text-center">
            2026 © Epic
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-200 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
