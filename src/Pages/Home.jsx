import React from "react";
import { motion } from "motion/react";
 import { ChevronDoubleDownIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="relative h-[calc(100vh-5rem)] bg-[url(https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-bottom flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

                <div className="relative z-10 flex flex-col items-center text-center px-4">
                    <motion.h1
                        className="text-white font-semibold text-3xl sm:text-3xl md:text-4xl max-w-full"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Connecting to the Interconnection Queue, made easy
                    </motion.h1>
                    <motion.div
                        className="mt-6 cursor-pointer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            opacity: { duration: 1, delay: 0.25 },
                        }}
                        whileHover={{
                            scale: 1.1,
                        }}
                        onClick={() => {
                            const section = document.getElementById("next-section");
                            if (section) {
                                const yOffset = -80;
                                const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
                                window.scrollTo({ top: y, behavior: "smooth" });
                            }
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                repeat: Infinity,
                                duration: 1.5,
                            }}
                        >
                            <ChevronDoubleDownIcon className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <div id="next-section" className="p-8">
                <div className="">
                    <h2 className="text-7xl font-semibold text-center mb-6 dark:text-white">Welcome to GridLink.help</h2>
                    <p className="text-4xl text-center mb-6 dark:text-white">
                        Simplifying the Interconnection Process for Renewable Energy Projects
                    </p>
                    <p className="text-2xl text-center mb-4 dark:text-white">
                        At GridLink.help, we know that connecting a new renewable energy project to the power grid can be a long, complicated, and error-prone process. The interconnection queue—the “line” where projects wait to be reviewed and approved—often takes months to move through. Inaccurate or incomplete paperwork can lead to delays and increased costs, hindering New Jersey’s transition to renewable energy.
                    </p>
                </div>
                <div>
                    <h3 className="text-4xl font-semibold text-center mt-8 dark:text-white">What We Do</h3>
                    <p className="text-2xl text-center mb-6 dark:text-white">
                        GridLink.help is an AI-powered platform designed to streamline this entire process. Our intuitive user interface guides consumers, businesses, and contractors step-by-step through filling out the complex interconnection forms. By using real-time error checking and clear, contextual instructions, our solution helps you avoid common mistakes that lead to rejections or delays.
                    </p>
                </div>

                <h3 className="text-2xl font-semibold text-center mt-8 mb-6 dark:text-white">How GridLink.help Works</h3>
                <div className="flex justify-center items-center mt-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                        <motion.div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-100 ease-in-out max-w-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <h2 className="text-xl font-semibold dark:text-white">Step-by-Step Guidance</h2>
                            <p className="dark:text-white">The platform breaks the interconnection process into clear, logical sections—from general project details to technical data and site diagrams—so that you can complete your submission without feeling overwhelmed.</p>
                        </motion.div>
                        <motion.div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-100 ease-in-out max-w-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <h2 className="text-xl font-semibold dark:text-white">Real-Time Validation</h2>
                            <p className="dark:text-white">Our system checks your input as you work, providing immediate feedback on any errors or omissions, which helps you fix mistakes on the spot.</p>
                        </motion.div>
                        <motion.div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-100 ease-in-out max-w-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <h2 className="text-xl font-semibold dark:text-white">Contextual Help and Tooltips</h2>
                            <p className="dark:text-white">Each field includes concise instructions and hints so that you know exactly what information is required.</p>
                        </motion.div>
                        <motion.div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-100 ease-in-out max-w-md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <h2 className="text-xl font-semibold dark:text-white">File Upload and Data Integrity</h2>
                            <p className="dark:text-white">We support secure file uploads and ensure that all critical documents (like templates and technical diagrams) are validated for correct file type and version before submission.</p>
                        </motion.div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-center dark:text-white mt-8">Why Choose Us</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        <motion.div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-100 ease-in-out" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <h2 className="text-xl font-semibold dark:text-white">Accelerated Approval</h2>
                            <p className="dark:text-white">By reducing errors and ensuring complete submissions, your project moves quicker through the interconnection queue.</p>
                        </motion.div>
                        <motion.div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-100 ease-in-out" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <h2 className="text-xl font-semibold dark:text-white">Cost Efficiency</h2>
                            <p className="dark:text-white">Minimizing rejections and revisions helps lower overall project costs, benefiting both developers and communities.</p>
                        </motion.div>
                        <motion.div className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-100 ease-in-out" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <h2 className="text-xl font-semibold dark:text-white">Clean Energy Adoption</h2>
                            <p className="dark:text-white">A streamlined process supports New Jersey’s transition to renewable energy, with the potential to expand nationally or globally.</p>
                        </motion.div>
                    </div>
                </div>

                <h3 className="text-2xl font-semibold text-center dark:text-white mt-8">Want to Get Started?</h3>
                <div className="mt-4 text-center">
                    <Link to="/submitForm">
                    <motion.button className="bg-blue-600 text-white py-6 px-6 rounded-lg text-xl shadow-md hover:bg-blue-700 transition duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        Start an Interconnection Queue Request
                    </motion.button>
                    </Link>
                </div>
            </div>
        </>
    );
}
