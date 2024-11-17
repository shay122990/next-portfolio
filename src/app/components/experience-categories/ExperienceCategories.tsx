"use client"
import { useState } from "react";
import Image from "next/image";
import servicesData from "@/app/page-data/tech-stack-data"; 

type ServiceCategory = keyof typeof servicesData;

export default function ExperienceCategories() {
  const [activeTab, setActiveTab] = useState<ServiceCategory>("WebDevelopment");

  const handleTabClick = (tab: ServiceCategory) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex space-x-4 border-b-2 mb-6">
        {Object.keys(servicesData).map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 text-lg font-semibold ${
              activeTab === tab
                ? "border-b-4 border-blue-500 text-blue-500"
                : "text-gray-600 hover:text-blue-500"
            }`}
            onClick={() => handleTabClick(tab as ServiceCategory)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        {servicesData[activeTab].map(({ id, paragraph, image }) => (
          <div key={id} className="flex mb-8 space-x-6">
            <div className="flex-shrink-0">
              <Image src={image} alt={`Tech Image ${id}`} className="h-24 w-24 object-cover rounded-lg" />
            </div>
            <div>
              <p className="text-gray-700">{paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}



 
