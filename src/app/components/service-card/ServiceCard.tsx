import Image, { StaticImageData } from "next/image";

type ServiceCardProps = {
  id: number;
  title: string;
  paragraph: string;
  image: string | StaticImageData;
};

const ServiceCard = ({ id, title, paragraph, image }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center text-center bg-gradient-to-b from-white via-gray-100 to-white  dark:from-blue-500 dark:to-teal-400 shadow-lg rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      <div className="relative h-48 w-48 mb-4">
        <Image
          src={image}
          alt={`Tech Image ${id}`}
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-3">{paragraph}</p>
    </div>
  );
};

export default ServiceCard;
