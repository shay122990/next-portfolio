"use client";

import { useState } from "react";
import TabButton from "../tab-button/TabButton";
import ServiceCard from "../service-card/ServiceCard";
import servicesData from "@/app/page-data/tech-stack-data";

type ServiceCategory = keyof typeof servicesData;

export default function ExperienceCategories() {
  const [activeTab, setActiveTab] = useState<ServiceCategory>("WebDevelopment");
  const items = servicesData[activeTab];
  const isThreeItems = items.length === 3;

  return (
    <div
      className="mb-10 lg:pt-4  pb-10 px-4 "
      // style={{ backgroundImage: "url('/images/experience-bg.jpg')" }}
    >
      <div className="flex justify-center mb-16 md:mb-20 lg:mb-24 mt-8 md:mt-12 lg:mt-26 gap-2 lg:gap-x-64">
        {Object.keys(servicesData).map((tab) => (
          <TabButton
            key={tab}
            tab={tab}
            isActive={activeTab === tab}
            onClick={() => setActiveTab(tab as ServiceCategory)}
          />
        ))}
      </div>

      <div
        className={`grid gap-10 ${
          isThreeItems
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        }`}
      >
        {items.map(({ id, title, paragraph, Icon }) => (
          <ServiceCard
            key={id}
            id={id}
            title={title}
            paragraph={paragraph}
            Icon={Icon}
          />
        ))}
      </div>
    </div>
  );
}
