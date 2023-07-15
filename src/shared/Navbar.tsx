import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../lib/firebase.config";
import { logout } from "../redux/features/users/userSLice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  //! redux

  const dispatch = useAppDispatch();

  const { user } = useAppSelector((state) => state.user);
  console.log("🚀 ~ file: Navbar.tsx:17 ~ Navbar ~ user:", user);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(logout());
      setMenuOpen(false);
    });
  };
  const navItems = (
    <React.Fragment>
      <Link
        to="/"
        onClick={closeMenu}
        className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-8"
      >
        Home
      </Link>
      <Link
            to="/allBook"
            onClick={closeMenu}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-8"
          >
           ALL Book
          </Link>
      {user?.email ? (
        <>
        <Link
          to="/login"
          onClick={handleLogout}
          className="block mt-4 lg:inline-block lg:mt-0 text-red-600 hover:text-gray-800 mr-8"
        >
          logout
        </Link>
        <Link
        to="/addBook"
        onClick={closeMenu}
        className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-8"
      >
        addBook
      </Link>
        </>
        
      ) : (
        <>
        
          <Link
            to="/signup"
            onClick={closeMenu}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-8"
          >
            SignUp
          </Link>
          <Link
            to="/login"
            onClick={closeMenu}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-8"
          >
            login
          </Link>
          
        </>
      )}

      
    </React.Fragment>
  );

  return (
    <nav
      className={`bg-slate-5 shadow-lg fixed w-full top-0 backdrop-blur-sm  ${
        isMenuOpen ? "" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link
              to="/"
              className="text-xl font-semibold text-gray-800 font-serif"
            >
              BOOKS STORE
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <section
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {/* <span className="sr-only">Open menu</span> */}
              {isMenuOpen ? (
                <svg
                  key="close-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  key="open-icon"
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </section>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 text-white">
            {navItems}
          </div>
        </div>
      </div>
      {/* {isMenuOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-500">
          {navItems}
        </div>
      )} */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full z-10">
          <div className="p-5 bg-white border rounded shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <Link
                  to="/"
                  aria-label="Company"
                  title="Company"
                  className="inline-flex items-center"
                >
                  <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase ">
                    BOOKS STORE
                  </span>
                </Link>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  onClick={() => setMenuOpen(false)}
                >
                  <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <nav>
              <ul className="space-y-4 flex flex-col text-slate-700">
                {navItems}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
