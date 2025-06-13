import Image from "next/image";
import logos from "@/app/page-data/tech-icons";

export default function LogoBanner() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex animate-scroll space-x-12 mb-10">
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex space-x-12">
            {logos.map(({ id, imageUrl }) => (
              <div
                key={id}
                className="flex items-center justify-center h-12 w-12"
              >
                <Image
                  src={imageUrl}
                  alt={`Logo ${id}`}
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
