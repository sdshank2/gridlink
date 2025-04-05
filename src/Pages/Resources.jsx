import React from "react";

//Check this document for UI suggestions: https://docs.google.com/document/d/1NGgPjBVcXR7AVJvfigivQgENnvRRJ7YXOZdua_Yhd4I/edit?tab=t.0

export default function Resources() {
    return(
        <>
            <div className="relative h-[432px] bg-[url('https://wp.technologyreview.com/wp-content/uploads/2025/02/250218-powergrid.jpg?resize=1200,600')] bg-cover bg-center flex items-center justify-center bg-fixed">
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <h1 className="text-white font-semibold text-4xl text-center px-4 sm:px-6 md:px-8 relative">Resources & References</h1>
            </div>
            <div>
                <p className="bg-gray-100 dark:bg-gray-800 text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300"><a href="https://www.firstenergycorp.com/content/dam/feconnect/files/retail/Customer-Interconnection-Guide-Single-Phase.pdf">Interconnection Queue Term Guide with Explanation</a></p>
                <p className="bg-gray-100 dark:bg-gray-800 text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300"><a href="https://nj.pseg.com/saveenergyandmoney/solarandrenewableenergy/applicationprocess">Building & Connecting Your Home Solar System - PSE&G</a></p>
                <p className="bg-gray-100 dark:bg-gray-800 text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300"><a href="https://www.interconnection.fyi/?state=NJ">https://www.interconnection.fyi/?state=NJ</a></p>
                <p className="bg-gray-100 dark:bg-gray-800 text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300"><a href="https://www.energy.gov/eere/i2x/articles/tackling-high-costs-and-long-delays-clean-energy-interconnection">https://www.energy.gov/eere/i2x/articles/tackling-high-costs-and-long-delays-clean-energy-interconnection</a></p>
                <p className="bg-gray-100 dark:bg-gray-800 text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300"><a href="https://www.rtoinsider.com/81842-nj-senate-energy-committee-backs-pjm-interconnection-skip-for-solar/">https://www.rtoinsider.com/81842-nj-senate-energy-committee-backs-pjm-interconnection-skip-for-solar/</a></p>
                <p className="bg-gray-100 dark:bg-gray-800 text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300"><a href="https://www.bv.com/projects/partnering-tesla-construct-largest-contiguous-electric-vehicle-charging-system-world/">https://www.bv.com/projects/partnering-tesla-construct-largest-contiguous-electric-vehicle-charging-system-world/</a></p>
                <p className="bg-gray-100 dark:bg-gray-800 text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300"><a href="https://www.firstenergycorp.com/feconnect/newjersey.html">https://www.firstenergycorp.com/feconnect/newjersey.html</a></p>
            </div>
        </>
    )
}