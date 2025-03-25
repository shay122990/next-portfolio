type TabButtonProps = {
    tab: string;
    isActive: boolean;
    onClick: () => void;
  };
  
  const TabButton = ({ tab, isActive, onClick }: TabButtonProps) => {
    return (
      <button
        className={`py-2 px-6 text-lg ${
          isActive
            ? "border-2 border-green-500"
            : " hover:text-green-500"
        }  lg:px-8 text-xs md:text-base lg:text-lg`}
        onClick={onClick}
      >
        {tab}
      </button>
    );
  };
export default TabButton  