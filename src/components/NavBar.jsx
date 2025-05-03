import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo-dark.svg";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const matchDark = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(matchDark.matches);

        const handleChange = (e) => {
            setIsDarkMode(e.matches);
        };

        matchDark.addEventListener("change", handleChange);
        return () => matchDark.removeEventListener("change", handleChange);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 shadow-xl bg-white dark:bg-green-700 border-b border-gray-200 dark:border-green-700 z-50 w-full h-20">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        src={isDarkMode ? logoDark : logoLight}
                        className="w-16 h-16"
                        alt="GridLink Logo"
                    />
                    <span className="font-sora self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white hover:text-green-700 dark:hover:text-black transition-all duration-300">
                        GridLink.help
                    </span>
                </Link>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 dark:text-gray-400 rounded-lg md:hidden hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isMenuOpen ? "true" : "false"}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>

                <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 dark:border-green-700 rounded-lg bg-gray-100 md:bg-white dark:bg-green-700 md:dark:bg-green-700 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        {[
                            { label: "Home", path: "/" },
                            { label: "Information", path: "/information" },
                            { label: "Submit a Form", path: "/submitForm" },
                            { label: "Resources", path: "/resources" },
                        ].map(({ label, path }) => (
                            <li key={label}>
                                <Link
                                    to={path}
                                    className="block py-2 px-3 text-gray-900 dark:text-white rounded-sm hover:text-green-700 dark:hover:text-black transition-all duration-300 md:hover:bg-transparent"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
