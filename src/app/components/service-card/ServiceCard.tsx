import Image, { StaticImageData } from "next/image";

type ServiceCardProps = {
  id: number;
  paragraph: string;
  image: string | StaticImageData;
};

const ServiceCard = ({ id, paragraph, image }: ServiceCardProps) => {
  return (
    <div className="flex flex-col items-center text-center bg-white shadow-md rounded-lg p-4">
      <Image
        src={image}
        alt={`Tech Image ${id}`}
        className="h-40 w-40 object-cover rounded-md"
      />
      <p className="text-gray-700 mt-4">{paragraph}</p>
    </div>
  );
};

export default ServiceCard;
