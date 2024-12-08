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
        backgroundColor: '#EEEEEE',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23c6c6c6' fill-opacity='0.13'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.13'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E\")",
      }}
      className="relative w-80 bg-white p-4 border-4 border-white rounded-lg shadow-lg transform hover:rotate-2 transition-transform duration-300 ease-in-out max-w-md mx-auto"
    >
      <div className="w-full">
        <Image
          src={imageSrc}
          alt={altText}
          width={350}
          height={350}
          className="w-full h-auto rounded-lg mb-2 border-4 border-white"
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
    </div>
  );
};
export default PolaroidCard;

