import React from "react";
import {motion} from "motion/react";

//Check this document for UI suggestions: https://docs.google.com/document/d/1NGgPjBVcXR7AVJvfigivQgENnvRRJ7YXOZdua_Yhd4I/edit?tab=t.0

export default function Resources() {
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
                    Resources & References
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
                </div>
            </div>
        </>
    );
}
