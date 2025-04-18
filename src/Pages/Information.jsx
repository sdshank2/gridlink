import React, { useEffect } from "react";
import { motion } from "motion/react";

const cardClass = "bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 min-h-[400px] flex flex-col hover:shadow-xl transition-shadow duration-300";
const headerClass = "text-lg font-bold mb-2 text-gray-800 dark:text-white text-center";
const infoClass = "text-gray-600 dark:text-gray-300 text-center flex-col space-y-6 text-base";

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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <motion.div
                        className={cardClass}
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className={headerClass}>Important Considerations</h2>
                        <div className={infoClass}>
                            <div>
                                <strong>Detailed Application:</strong><br />
                                <span>Prepare a comprehensive application with all required information, including project details, location, technical specifications, and contact information.</span>
                            </div>
                            <div>
                                <strong>Deposit and Milestone Payments:</strong><br />
                                <span>Be aware of required deposits or milestone payments (e.g., M2 in some regions).</span>
                            </div>
                            <div>
                                <strong>Site Control:</strong><br />
                                <span>Demonstrate that necessary permits and approvals for the project location have been secured.</span>
                            </div>
                            <div>
                                <strong>Documentation:</strong><br />
                                <span>Gather all necessary documentation (e.g., property documents, permits, etc.).</span>
                            </div>
                            <div>
                                <strong>Online Portal (if applicable):</strong><br />
                                <span>Many utilities/operators have online portals for application submissions.</span>
                            </div>
                            <div>
                                <strong>Contact Utility/Grid Operator:</strong><br />
                                <span>Contact the relevant utility or grid operator to clarify specific requirements.</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={cardClass}
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className={headerClass}>Key Steps in the Interconnection Process</h2>
                        <div className={infoClass}>
                            <div>
                                <strong>Pre-Application:</strong><br />
                                <span>Determine project siting, design, and estimated costs using available tools like hosting capacity maps.</span>
                            </div>
                            <div>
                                <strong>Application Submission:</strong><br />
                                <span>Submit your application to the electric utility.</span>
                            </div>
                            <div>
                                <strong>Queue Placement:</strong><br />
                                <span>Your application is placed in the interconnection queue.</span>
                            </div>
                            <div>
                                <strong>Evaluation and Studies:</strong><br />
                                <span>The utility will review your application and perform studies to assess grid impacts.</span>
                            </div>
                            <div>
                                <strong>Interconnection Agreement:</strong><br />
                                <span>Once studies are complete, you'll enter into an interconnection agreement with the utility.</span>
                            </div>
                            <div>
                                <strong>Construction and Grid Updates:</strong><br />
                                <span>You'll construct your project, and the utility will make necessary grid upgrades.</span>
                            </div>
                            <div>
                                <strong>Commissioning and Operation:</strong><br />
                                <span>The utility will perform final checks before the project can begin operating.</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={cardClass}
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className={headerClass}>Potential Challenges and Delays</h2>
                        <div className={infoClass}>
                            <div>
                                <strong>Interconnection Queue Backlogs:</strong><br />
                                <span>Interconnection queues can have significant backlogs, causing delays.</span>
                            </div>
                            <div>
                                <strong>Study Periods:</strong><br />
                                <span>Interconnection studies can take considerable time.</span>
                            </div>
                            <div>
                                <strong>Grid Infrastructure Limitations:</strong><br />
                                <span>Capacity limitations on the grid can cause further delays.</span>
                            </div>
                            <div>
                                <strong>Regulatory Requirements and Changes:</strong><br />
                                <span>Be aware of any regulatory changes that may affect the process.</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={cardClass}
                        whileHover={{ scale: 1.02 }}
                    >
                        <h2 className={headerClass}>Seeking Guidance and Support</h2>
                        <div className={infoClass}>
                            <div>
                                <strong>Regional Grid Operators/Utilities:</strong><br />
                                <span>Consult with the utility or grid operator in your region for specific information.</span>
                            </div>
                            <div>
                                <strong>Industry Associations and Organizations:</strong><br />
                                <span>Consult with organizations like the American Clean Power Association (ACP).</span>
                            </div>
                            <div>
                                <strong>Consultants:</strong><br />
                                <span>Consider engaging with experts who specialize in the interconnection process to help navigate the challenges.</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
