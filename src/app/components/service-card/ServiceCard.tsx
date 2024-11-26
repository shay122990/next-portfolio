import Image,  { StaticImageData }  from "next/image";

type ServiceCardProps = {
    id: number;
    paragraph: string;
    image: string | StaticImageData;
  };
  
  const ServiceCard = ({ id, paragraph, image,  }: ServiceCardProps) => {
    return (
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
    );
  };
export default ServiceCard  