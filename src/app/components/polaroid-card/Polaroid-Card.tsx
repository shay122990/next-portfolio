import Image from "next/image";

interface PolaroidCardProps {
  imageSrc: string;
  liveLink: string;
  githubLink: string;
  altText: string;
  projectName: string;
}

const PolaroidCard: React.FC<PolaroidCardProps> = ({
  imageSrc,
  liveLink,
  githubLink,
  altText,
  projectName,
}) => {
  return (
    <div
      style={{
        backgroundColor: "#EEEEEE",
      }}
      className="relative w-80 bg-white p-4 border-4 border-white rounded-lg shadow-lg transform hover:rotate-2 transition-transform duration-300 ease-in-out max-w-md mx-auto"
    >
      <div className="mb-2 border-4 border-white rounded-lg overflow-hidden">
        <Image
          src={imageSrc}
          alt={altText}
          width={750}
          height={1307}
          className="object-cover w-full h-[360px]"
        />
      </div>

      <div className="bg-slate-200 border border-gray-300 mx-1">
        <p className="text-xl font-semibold text-center text-gray-800 mb-2">
          {projectName}
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-950 hover:text-green-500 transition duration-200"
          >
            Live
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-950 hover:text-green-500 transition duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
export default PolaroidCard;
