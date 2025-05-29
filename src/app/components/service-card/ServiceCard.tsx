import { IconType } from "react-icons";

type ServiceCardProps = {
  id: number;
  title: string;
  paragraph: string;
  Icon: IconType;
};

const ServiceCard = ({ title, paragraph, Icon }: ServiceCardProps) => {
  return (
    <div className="group relative bg-white dark:bg-slate-900 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 p-6 min-h-[250px] flex flex-col justify-start">
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white dark:border-slate-900 shadow-md flex items-center justify-center bg-white dark:bg-slate-800 text-teal-400 dark:text-teal-300 text-4xl">
        <Icon />
      </div>

      <div className="pt-14 text-center">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {paragraph}
        </p>
      </div>
    </div>
  );
};


export default ServiceCard;
