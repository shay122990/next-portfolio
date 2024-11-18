
interface MessageDisplayProps {
    message: string;
    type: "success" | "error";
  }
  
  const MessageDisplay: React.FC<MessageDisplayProps> = ({ message, type }) => {
    const messageStyle =
      type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700";
  
    return (
      <div className={`p-4 mb-4 rounded-md ${messageStyle}`}>
        <p>{message}</p>
      </div>
    );
  };
  
  export default MessageDisplay;
  