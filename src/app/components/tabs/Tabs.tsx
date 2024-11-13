interface TabsProps {
    items: string[];
    selectedItem: string;
    onTabChange: (item: string) => void;
    renderTabLabel: (item: string) => string;
    className?: string;
  }
  
  const Tabs: React.FC<TabsProps> = ({
    items,
    selectedItem,
    onTabChange,
    renderTabLabel,
    className,
  }) => {
    const handleKeyDown = (event: React.KeyboardEvent, item: string) => {
      if (event.key === "Enter" || event.key === " ") {
        onTabChange(item);
      }
    };
  
    return (
      <div className={className}>
        {items.map((item) => (
          <div
            key={item}
            className={`tab-item ${selectedItem === item ? "active" : ""}`}
            onClick={() => onTabChange(item)}
            onKeyDown={(e) => handleKeyDown(e, item)}
            tabIndex={0}
            role="button"
          >
            {renderTabLabel(item)}
          </div>
        ))}
      </div>
    );
  };
  
  export default Tabs;
  