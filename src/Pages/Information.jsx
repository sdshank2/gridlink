import React, { useEffect } from "react";
import { motion } from "motion/react";
import { DocumentTextIcon, AdjustmentsHorizontalIcon, ExclamationCircleIcon, PhoneIcon } from '@heroicons/react/24/solid';

const cardClass = "bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-[400px] flex flex-col hover:shadow-xl transition-shadow duration-300";
const headerClass = "text-lg font-bold mb-2 text-gray-800 dark:text-white";
const infoClass = "text-gray-600 dark:text-gray-300 flex-col space-y-6 text-base";
const subheaderClass = "font-semibold text-green-700 dark:text-green-400";

export default function Information() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="relative h-[432px] bg-[url('https://images.unsplash.com/photo-1620415629284-975004d37752?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
                <motion.h1
                    className="text-white font-semibold text-3xl sm:text-3xl md:text-4xl max-w-full z-10 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Information
                </motion.h1>
            </div>
            <div className="p-10 bg-gray-100 dark:bg-gray-900">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div
                        className={cardClass}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <DocumentTextIcon className="h-6 w-6 mb-1.5 text-blue-500" />
                            <h2 className={headerClass}>Important Considerations</h2>
                        </div>
                        <div className={infoClass}>
                            <div>
                                <strong className={subheaderClass}>Detailed Application:</strong>
                                <p>Prepare a comprehensive application with all required information, including project details, location, technical specifications, and contact information.</p>
                            </div>
                            <div>
                                <strong className={subheaderClass}>Deposit and Milestone Payments:</strong>
                                <p>Be aware of required deposits or milestone payments (e.g., M2 in some regions).</p>
                            </div>
                            <div>
                                <strong className={subheaderClass}>Site Control:</strong>
                                <p>Demonstrate that necessary permits and approvals for the project location have been secured.</p>
                            </div>
                            <div>
                                <strong className={subheaderClass}>Documentation:</strong>
                                <p>Gather all necessary documentation (e.g., property documents, permits, etc.).</p>
                            </div>
                            <div>
                                <strong className={subheaderClass}>Online Portal (if applicable):</strong>
                                <p>Many utilities/operators have online portals for application submissions.</p>
                            </div>
                            <div>
                                <strong className={subheaderClass}>Contact Utility/Grid Operator:</strong>
                                <p>Contact the relevant utility or grid operator to clarify specific requirements.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={cardClass}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <AdjustmentsHorizontalIcon className="h-6 w-6 mb-1.5 text-yellow-500" />
                            <h2 className={headerClass}>Key Steps in the Interconnection Process</h2>
                        </div>
                        <div className={infoClass}>
                            <div>
                                <strong className={subheaderClass}>Pre-Application:</strong>
                                <p>Determine project siting, design, and estimated costs using available tools like hosting capacity maps.</p>
                            </div>
                            <div>
                                <strong className={subheaderClass}>Application Submission:</strong>
                                <p>Submit your application to the electric utility.</p>
                            </div>
                            <div>
                                <strong className={subheaderClass}>Queue Placement:</strong>
                                <p>Your application is placed in the interconnection queue.</p>
                            </div>
                            <div>
                                <strong className={subheaderClass}>Evaluation and Studies:</strong>
                                <p>The utility will review your application and perform studies to assess grid impacts.</p>
                            </div>
                            <div>
                                <strong className={subheaderClass}>Interconnection Agreement:</strong>
                                <p>Once studies are complete, you'll enter into an interconnection agreement with the utility.</p>
                            </div>
                            <div>
                                <strong className={subheaderClass}>Construction and Grid Updates:</strong>
                                <p>You'll construct your project, and the utility will make necessary grid upgrades.</p>
                            </div>
                            <div>
                                <strong className={subheaderClass}>Commissioning and Operation:</strong>
                                <p>The utility will perform final checks before the project can begin operating.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={cardClass}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <ExclamationCircleIcon className="h-6 w-6 mb-1.5 text-red-500" />
                            <h2 className={headerClass}>Potential Challenges and Delays</h2>
                        </div>
                        <div className={infoClass}>
                            <div>
                                <strong className={subheaderClass}>Interconnection Queue Backlogs:</strong>
                                <p>Interconnection queues can have significant backlogs, causing delays.</p>
                            </div>
                            <div>
                                <strong className={subheaderClass}>Study Periods:</strong>
                                <p>Interconnection studies can take considerable time.</p>
                            </div>
                            <div>
                                <strong className={subheaderClass}>Grid Infrastructure Limitations:</strong>
                                <p>Capacity limitations on the grid can cause further delays.</p>
                            </div>
                            <div>
                                <strong className={subheaderClass}>Regulatory Requirements and Changes:</strong>
                                <p>Be aware of any regulatory changes that may affect the process.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={cardClass}
                        whileHover={{ scale: 1.02 }}
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <PhoneIcon className="h-6 w-6 mb-1.5 text-green-500" />
                            <h2 className={headerClass}>Seeking Guidance and Support</h2>
                        </div>
                        <div className={infoClass}>
                            <div>
                                <strong className={subheaderClass}>Regional Grid Operators/Utilities:</strong>
                                <p>Consult with the utility or grid operator in your region for specific information.</p>
                            </div>
                            <div>
                                <strong className={subheaderClass}>Industry Associations and Organizations:</strong>
                                <p>Consult with organizations like the American Clean Power Association (ACP).</p>
                            </div>
                            <div>
                                <strong className={subheaderClass}>Consultants:</strong>
                                <p>Consider engaging with experts who specialize in the interconnection process to help navigate the challenges.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
