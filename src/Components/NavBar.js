import { Link } from 'react-router-dom'
import React, { useState } from 'react';


function PurpleButton(props) {
  return (
    <Link to={props.to}>
      <button className="bg-purple hover:bg-fuchsia-400 text-white font-medium py-2 px-4 rounded-lg my-2">{props.name}</button>
    </Link>
  )
}
export default function Example() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Image Logo */}
          <div className="flex-shrink-0">
            <Link to='/'>
              <img className="h-4 w-24 md:h-8 md:w-48" src={`${process.env.PUBLIC_URL}/images/Logo.png`} />

            </Link>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'
              } md:block md:flex-grow md:ml-4`}
          >
            <div className="md:flex md:items-center md:justify-center md:space-x-4">
              <Link
                to="/"
                className="text-gray-300  hover:text-purple px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300  hover:text-purple px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-300  hover:text-purple px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Button */}
          <div className="hidden md:flex items-center">
            <Link to='levels'>
              <button className="bg-purple hover:bg-fuchsia-400 text-white font-medium py-2 px-4 rounded">
                Let's Dance
              </button>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  )
}

export { PurpleButton };