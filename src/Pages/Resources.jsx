import React, { useEffect } from "react";
import { motion } from "motion/react";

const cardClass = "p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-2xl transition";
const headerClass = "text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100";
const descClass = "text-gray-700 dark:text-gray-300 mb-2";

const resources = [
    {
        title: "Interconnection Guides",
        desc: "A collection of useful guides for different regions and organizations.",
        links: [
            {
                name: "Interconnection Queue Term Guide with Explanation",
                url: "https://www.firstenergycorp.com/content/dam/feconnect/files/retail/Customer-Interconnection-Guide-Single-Phase.pdf",
            },
            {
                name: "ISO-NE Interconnection Process Guide",
                url: "https://www.iso-ne.com/participate/applications-status-changes/interconnection-process-guide",
            },
            {
                name: "MISO Generator Interconnection Guide",
                url: "https://www.misoenergy.org/planning/resource-utilization/generator-interconnection/",
            },
            {
                name: "CAISO Generator Interconnection Guide (California)",
                url: "https://www.caiso.com/generation-transmission/generation/generator-interconnection",
            },
        ],
    },
    {
        title: "Utility-Specific Resources",
        desc: "These resources are tailored to different utility companies, providing guidelines and support for joining the interconnection queue.",
        links: [
            {
                name: "Building & Connecting Your Home Solar System - PSE&G",
                url: "https://nj.pseg.com/saveenergyandmoney/solarandrenewableenergy/applicationprocess",
            },
            {
                name: "FirstEnergy Connect - New Jersey",
                url: "https://www.firstenergycorp.com/feconnect/newjersey.html",
            },
            {
                name: "Versant Power - Distribution Interconnection Process",
                url: "https://www.versantpower.com/energy-solutions/clean-energy/distribution-interconnection-process",
            },
        ],
    },
    {
        title: "Clean Energy & Research",
        desc: "Learn more about the trends, costs, and research in clean energy and its impact on the interconnection queue.",
        links: [
            {
                name: "Tackling High Costs and Long Delays in Clean Energy Interconnection",
                url: "https://www.energy.gov/eere/i2x/articles/tackling-high-costs-and-long-delays-clean-energy-interconnection",
            },
            {
                name: "Lawrence Berkeley Lab - Interconnection Queue Trends & Stats",
                url: "https://emp.lbl.gov/queues",
            },
        ],
    },
    {
        title: "Other Useful Resources",
        desc: "Additional resources that might help with the interconnection queue and other related topics.",
        links: [
            {
                name: "Interconnection.fyi - New Jersey",
                url: "https://www.interconnection.fyi/?state=NJ",
            },
            {
                name: "Partnering with Tesla - Largest EV Charging System",
                url: "https://www.bv.com/projects/partnering-tesla-construct-largest-contiguous-electric-vehicle-charging-system-world/",
            },
            {
                name: "ISO Newswire - Interconnecting Step-by-Step",
                url: "https://isonewswire.com/2019/10/03/interconnecting-step-by-step/",
            },
            {
                name: "Distribution Queue Entry Requirements PDF (2024)",
                url: "https://www.energynetworks.org/assets/images/Publications/2024/241218new-distribution-queue-entry-requirements-v1.pdf?1739917614",
            },
        ],
    },
];

export default function Resources() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="relative h-[432px] bg-[url('https://wp.technologyreview.com/wp-content/uploads/2025/02/250218-powergrid.jpg?resize=1200,600')] bg-cover bg-center flex items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
                <motion.h1
                    className="text-white font-semibold text-3xl sm:text-3xl md:text-4xl max-w-full z-10 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Resources
                </motion.h1>
            </div>

            <div className="py-12 px-4 sm:px-8 md:px-12 bg-gray-100 dark:bg-gray-900">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    {resources.map((section, index) => (
                        <motion.div
                            key={index}
                            className={cardClass}
                            whileHover={{ scale: 1.02 }}
                        >
                            <h4 className={headerClass}>{section.title}</h4>
                            <p className={descClass}>{section.desc}</p>
                            <ul className="list-disc list-inside pl-4 space-y-2 text-gray-700 dark:text-gray-300">
                                {section.links.map((link, i) => (
                                    <li key={i} className="text-white dark:text-white">
                                        <a
                                            href={link.url}
                                            className="text-blue-500 hover:text-blue-700 visited:text-purple-600 transition-all duration-300"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}
