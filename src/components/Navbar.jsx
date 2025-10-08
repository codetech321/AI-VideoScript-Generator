import React from 'react'

const Navbar = () => {
  return (
    <>
      <header className="text-gray-600 body-font px-4 sm:px-[50px] md:px-[100px]">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-lg sm:text-xl text-purple-600">
              Video Script Generator
            </span>
          </a>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-2 sm:gap-4">
            <a className="hover:text-gray-900 cursor-pointer">Home</a>
            <a className="hover:text-gray-900 cursor-pointer">About</a>
            <a className="hover:text-gray-900 cursor-pointer">Products</a>
            <a className="hover:text-gray-900 cursor-pointer">Contact</a>
          </nav>

          <button className="inline-flex items-center bg-purple-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-purple-700 rounded text-sm sm:text-base mt-4 md:mt-0">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}

export default Navbar
