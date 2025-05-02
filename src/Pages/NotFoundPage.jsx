import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "motion/react";

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white px-4">
            <div className="text-6xl font-bold mb-4">404</div>
            <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Page Not Found</h1>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
            >
                <motion.div
                    className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "tween", duration: 0.1 }}
                >
                    Go Back Home
                </motion.div>
            </Link>
        </div>
    );
}