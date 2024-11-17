import Image from "next/image";
import logos from "@/app/page-data/tech-icons";

export default function LogoBanner() {
  return (
    <div className="relative w-full overflow-hidden py-2">
      <div className="flex animate-scroll space-x-10">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex space-x-6">
            {logos.map(({ id, imageUrl }) => (
              <div key={id} className="flex items-center justify-center h-20 w-20">
                <Image
                  src={imageUrl}
                  alt={`Logo ${id}`}
                  width={50}
                  height={50}
                  className="object-contain logo-size"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
