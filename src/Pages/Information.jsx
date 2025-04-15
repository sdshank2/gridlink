import React, { useEffect } from "react";
import { motion } from "motion/react";

export default function Information() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <>
            <div className="relative h-[432px] bg-[url('https://wp.technologyreview.com/wp-content/uploads/2025/02/250218-powergrid.jpg?resize=1200,600')] bg-cover bg-center flex items-center justify-center bg-fixed">
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

            <div className="py-8 px-4 sm:px-8 md:px-12">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Useful Resources:</h2>
                <div className="space-y-4">
                    <p className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <a className="text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300" href="https://www.firstenergycorp.com/content/dam/feconnect/files/retail/Customer-Interconnection-Guide-Single-Phase.pdf">
                            Interconnection Queue Term Guide with Explanation
                        </a>
                    </p>
                    <p className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <a className="text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300" href="https://nj.pseg.com/saveenergyandmoney/solarandrenewableenergy/applicationprocess">
                            Building & Connecting Your Home Solar System - PSE&G
                        </a>
                    </p>
                    <p className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <a className="text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300" href="https://www.interconnection.fyi/?state=NJ">
                            https://www.interconnection.fyi/?state=NJ
                        </a>
                    </p>
                    <p className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <a className="text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300" href="https://www.energy.gov/eere/i2x/articles/tackling-high-costs-and-long-delays-clean-energy-interconnection">
                            Tackling High Costs and Long Delays in Clean Energy Interconnection
                        </a>
                    </p>
                    <p className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <a className="text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300" href="https://www.bv.com/projects/partnering-tesla-construct-largest-contiguous-electric-vehicle-charging-system-world/">
                            Partnering with Tesla to Construct the Largest Electric Vehicle Charging System
                        </a>
                    </p>
                    <p className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <a className="text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300" href="https://www.firstenergycorp.com/feconnect/newjersey.html">
                            FirstEnergy Connect - New Jersey
                        </a>
                    </p>
                    <p className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <a className="text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300" href="https://www.iso-ne.com/participate/applications-status-changes/interconnection-process-guide">
                            ISO-NE Interconnection Process Guide
                        </a>
                    </p>
                    <p className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <a className="text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300" href="https://www.iso-ne.com/system-planning/interconnection-service">
                            ISO-NE Interconnection Services Overview
                        </a>
                    </p>
                    <p className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <a className="text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300" href="https://isonewswire.com/2019/10/03/interconnecting-step-by-step/">
                            ISO Newswire - Interconnecting Step-by-Step
                        </a>
                    </p>
                    <p className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <a className="text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300" href="https://www.versantpower.com/energy-solutions/clean-energy/distribution-interconnection-process">
                            Versant Power - Distribution Interconnection Process
                        </a>
                    </p>
                    <p className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <a className="text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300" href="https://www.energynetworks.org/assets/images/Publications/2024/241218new-distribution-queue-entry-requirements-v1.pdf?1739917614">
                            Distribution Queue Entry Requirements PDF (2024)
                        </a>
                    </p>
                    <p className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <a className="text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300" href="https://www.misoenergy.org/planning/resource-utilization/generator-interconnection/">
                            MISO Generator Interconnection Guide
                        </a>
                    </p>
                    <p className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <a className="text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300" href="https://emp.lbl.gov/queues">
                            Lawrence Berkeley Lab - Interconnection Queue Trends & Stats
                        </a>
                    </p>
                    <p className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
                        <a className="text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300" href="https://www.caiso.com/generation-transmission/generation/generator-interconnection">
                            CAISO Generator Interconnection Guide (California)
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
