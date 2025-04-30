import React from "react";
import { motion } from "motion/react";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";
import { ChartBarSquareIcon, CheckCircleIcon, QuestionMarkCircleIcon, CloudArrowUpIcon, CurrencyDollarIcon, ArrowTrendingUpIcon, GlobeAmericasIcon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";
import {CogIcon} from "@heroicons/react/24/solid/index.js";
//Add emojis to cards, add some large clipart next to the first paragraph
export default function Home() {
    return (
        <>
            <div className="relative h-[calc(100vh-5rem)] bg-[url(https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-bottom flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-60 z-0" />

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
                        whileHover={{ scale: 1.1 }}
                        onClick={() => {
                            const section = document.getElementById("next-section");
                            if (section) {
                                const yOffset = -80;
                                const y =
                                    section.getBoundingClientRect().top +
                                    window.scrollY +
                                    yOffset;
                                window.scrollTo({ top: y, behavior: "smooth" });
                            }
                        }}
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ChevronDoubleDownIcon className="w-8 h-8 text-white opacity-80 hover:opacity-100 transition" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div
                id="next-section"
                className="px-6 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
            >
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Welcome to GridLink.help
                    </h2>
                    <p className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        Simplifying the Interconnection Process for Renewable Energy
                        Projects
                    </p>
                    <p className="text-lg md:text-xl mb-10 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        At GridLink.help, we know that connecting a new renewable energy
                        project to the power grid can be a long, complicated, and
                        error-prone process. The interconnection queue—the “line” where
                        projects wait to be reviewed and approved—often takes months to move
                        through. Inaccurate or incomplete paperwork can lead to delays and
                        increased costs, hindering New Jersey’s transition to renewable
                        energy.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl md:text-4xl font-semibold text-center mb-6">
                        What We Do
                    </h3>
                    <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
                        GridLink.help is an AI-powered platform designed to streamline the
                        entire interconnection process. Our intuitive user interface guides
                        you step-by-step through complex forms, helping you avoid costly
                        mistakes.
                    </p>

                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
                        {[
                            {
                                title: "Step-by-Step Guidance",
                                desc: "Breaks the process into clear sections, from project details to diagrams, so you're never overwhelmed.",
                                icon: <ChartBarSquareIcon className="w-6 h-6 text-green-500" />
                            },
                            {
                                title: "Real-Time Validation",
                                desc: "Instant feedback highlights issues as you type, helping you submit correctly the first time.",
                                icon: <CheckCircleIcon className="w-6 h-6 text-blue-500" />
                            },
                            {
                                title: "Contextual Help and Tooltips",
                                desc: "Clear instructions for each field ensure you always know what’s expected.",
                                icon: <QuestionMarkCircleIcon className="w-6 h-6 text-red-500" />
                            },
                            {
                                title: "File Upload and Data Integrity",
                                desc: "Secure file upload and validation for technical docs, ensuring compliance and clarity.",
                                icon: <CloudArrowUpIcon className="w-6 h-6 text-yellow-300" />
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-2xl transition"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex items-center space-x-2">
                                    <div>

                                    {item.icon}
                                    </div>
                                    <h4 className="text-xl font-semibold mt-2 mb-2">{item.title}</h4>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="max-w-6xl mx-auto mt-20">
                    <h3 className="text-3xl md:text-4xl font-semibold text-center mb-8">
                        Why Choose Us
                    </h3>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Accelerated Approval",
                                desc: "Fewer mistakes means faster approval from utilities and regulators.",
                                icon: <ArrowTrendingUpIcon className = "w-6 h-6 text-blue-700" />
                            },
                            {
                                title: "Cost Efficiency",
                                desc: "Avoiding rework and delays keeps project costs down.",
                                icon: <CurrencyDollarIcon className = "w-6 h-6 text-yellow-500" />
                            },
                            {
                                title: "Clean Energy Adoption",
                                desc: "We help speed up the energy transition—starting in New Jersey.",
                                icon: <GlobeAmericasIcon className = "w-6 h-6 text-green-500" />
                            },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-2xl transition"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex items-center space-x-2">
                                    {item.icon}
                                    <h4 className="text-xl font-semibold mb-2 mt-2">{item.title}</h4>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-20">
                    <h3 className="text-2xl font-semibold mb-6">
                        Want to Get Started?
                    </h3>
                    <Link to="/submitForm">
                        <motion.button
                            className="bg-green-500 dark:bg-green-700 text-white py-4 px-6 rounded-lg text-lg shadow-md hover:bg-green-600 dark:hover:bg-green-800 transition"
                            whileHover={{ scale: 1.05 }}
                        >
                            Start an Interconnection Queue Request
                        </motion.button>
                    </Link>
                </div>
            </div>
        </>
    );
}
