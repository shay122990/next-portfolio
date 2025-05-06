type TabButtonProps = {
  tab: string;
  isActive: boolean;
  onClick: () => void;
};

const TabButton = ({ tab, isActive, onClick }: TabButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-6 lg:px-8 text-md md:text-base  lg:text-lg font-semibold rounded text-gray-500 transition-all duration-300
      ${
        isActive
          ? "bg-green-400 text-white border-2 border-green-400"
          : "border-2  border-green-400 bg-white  hover:border-blue-500"
      }`}
    >
      {tab}
    </button>
  );
};

export default TabButton;
