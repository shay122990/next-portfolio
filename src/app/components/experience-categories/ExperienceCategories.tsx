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
    <div className="w-full h-auto max-w-7xl mx-auto  place-content-center">
      <div className="flex place-content-center mb-8 md:mb-12 lg:mb-16 mt-8 md:mt-12 lg:mt-16 lg:gap-x-64">
        {Object.keys(servicesData).map((tab) => (
          <button
            key={tab}
            className={`py-2 px-6 text-lg ${
              activeTab === tab
                ? "border-2 border-green-500"
                : "text-gray-600 hover:text-green-500"
            } md:px-8 lg:px-10`}
            onClick={() => handleTabClick(tab as ServiceCategory)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex flex-col place-content-center">
        {servicesData[activeTab].map(({ id, paragraph, image }) => (
          <div key={id} className="flex mb-8 space-x-6 px-10 py-4 md:items-center">
            <div className="flex-shrink-0">
              <Image
                src={image}
                alt={`Tech Image ${id}`}
                className="h-40 w-48 md:w-auto md:h-auto object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-gray-700 w-full md:w-3/5">{paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
