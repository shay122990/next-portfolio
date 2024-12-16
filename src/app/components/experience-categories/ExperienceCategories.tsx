"use client";

import { useState } from "react";
import TabButton from "../tab-button/TabButton";
import ServiceCard from "../service-card/ServiceCard";
import servicesData from "@/app/page-data/tech-stack-data";

type ServiceCategory = keyof typeof servicesData;

export default function ExperienceCategories() {
  const [activeTab, setActiveTab] = useState<ServiceCategory>("WebDevelopment");

  return (
    <div className="w-full h-auto max-w-7xl mx-auto px-2">
      <div className="flex justify-center mb-8 md:mb-12 lg:mb-16 mt-8 md:mt-12 lg:mt-16 gap-2 lg:gap-x-64">
        {Object.keys(servicesData).map((tab) => (
          <TabButton
            key={tab}
            tab={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab as ServiceCategory)}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData[activeTab].map(({ id, title,  paragraph, image }) => (
          <ServiceCard key={id} id={id} title={title} paragraph={paragraph} image={image} />
        ))}
      </div>
    </div>
  );
}
