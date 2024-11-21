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
    <div className="w-full h-[600px] lg:h-[700px] max-w-5xl mx-auto mt-10">
      <div className="flex place-content-center mb-8 md:mb-12 lg:mb-16 mt-8 md:mt-12 lg:mt-16">
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
      <div>
        {servicesData[activeTab].map(({ id, paragraph, image }) => (
          <div key={id} className="flex mb-8 space-x-6">
            <div className="flex-shrink-0">
              <Image
                src={image}
                alt={`Tech Image ${id}`}
                className="h-24 w-24 object-cover rounded-lg"
              />
            </div>
            <div>
              <p className="text-gray-700">{paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
