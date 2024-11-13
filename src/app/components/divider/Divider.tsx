interface DividerProps {
    text: string;
    id?: string;  
  }
  
  const Divider: React.FC<DividerProps> = ({ text, id }) => {
    return (
      <div className="flex items-center justify-between w-full px-2 py-10 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <span id={id} className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-500 dark:text-white sm:w-1/4 lg:w-1/5">
          {text}
        </span>
        <hr className="w-3/5 sm:w-3/4 lg:w-7/10 border-t-2 border-gray-500 dark:border-white" />
      </div>
    );
  };
  
  export default Divider;
  