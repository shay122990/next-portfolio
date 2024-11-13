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
    <div className="relative w-80 bg-white p-4 border-4 border-white rounded-lg shadow-lg transform hover:rotate-2 transition-transform duration-300 ease-in-out max-w-md mx-auto">
      <div className="w-full">
        <Image
          src={imageSrc}
          alt={altText}
          width={350}
          height={350}
          className="w-full h-auto rounded-lg mb-2 border-4 border-white"
        />
      </div>

      <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
        {projectName}
      </h3>

      <div className="flex justify-center space-x-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-lime-500 transition duration-200"
        >
          Live
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-lime-500 transition duration-200"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default PolaroidCard;
