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
    <div className="relative bg-white p-4 border-4 border-white rounded-lg shadow-lg transform rotate-2 hover:rotate-3 transition-all duration-300 ease-in-out max-w-xs mx-auto">
      <Image
        src={imageSrc}
        alt={altText}
        width={200} 
        height={200} 
        className="w-full h-auto rounded-lg mb-4 border-4 border-white"
      />
  
      <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">{projectName}</h3>
  
      <div className="flex justify-center space-x-4">
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition duration-200"
        >
          Live
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition duration-200"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default PolaroidCard;
