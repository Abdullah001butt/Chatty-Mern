import { Heart, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-8 mt-32 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Main content */}
        <div className="flex flex-col items-center gap-6">
          {/* Creator signature */}
          <div className="flex items-center gap-2 text-lg sm:text-xl">
            <span className="text-gray-300">Created</span>
            <Heart className="text-red-500 animate-beat size-6" fill="currentColor" />
            <span className="text-gray-300">by</span>
            <span className="font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text hover:scale-110 transition-transform cursor-pointer">
              Abdullah Butt
            </span>
          </div>

          {/* Social links */}
          <div className="flex gap-6">
            <a href="https://github.com/Abdullah001butt" className="text-gray-400 hover:text-white transition-colors">
              <Github className="size-6" />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-abdullah-627660284/" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin className="size-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
              <Twitter className="size-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

// Custom heartbeat animation
const styles = `
  @keyframes beat {
    0%, 100% { transform: scale(1); }
    25% { transform: scale(1.2); }
  }
  .animate-beat {
    animation: beat 1s infinite;
  }
`;

// Add styles to document head
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Footer;
