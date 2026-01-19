import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl text-blue-400" style={{fontFamily: 'satoshi-black'}}>Meredith Roncejero</h2>
          <p className="text-sm text-gray-300 mt-2" style={{fontFamily: 'satoshi-medium'}}>
            Aspiring IT Intern that can make automated solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg mb-3" style={{fontFamily: 'satoshi-bold'}}>Quick Links</h3>
          <ul className="space-y-2 text-gray-300" style={{fontFamily: 'satoshi-medium'}}>
            <li><a href="/about" className="hover:text-blue-400 transition">About</a></li>
            <li><a href="/skills" className="hover:text-blue-400 transition">Skills</a></li>
            <li><a href="/projects" className="hover:text-blue-400 transition">Projects</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3" style={{fontFamily: 'satoshi-bold'}}>Connect</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="https://github.com/meredithroncejero" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaGithub />
            </a>

            <a href="mailto:meredithroncejero09@gmail.com" className="hover:text-blue-400 transition">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Meredith Roncejero. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
