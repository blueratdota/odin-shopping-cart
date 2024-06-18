import Icon from "@mdi/react";
const SmallIconBtn = ({ icon, onClick, ref }) => {
  return (
    <div
      className="flex-auto border-l border-gray-300 border-opacity-20"
      onClick={onClick}
      ref={ref}
    >
      <Icon path={icon} />
    </div>
  );
};

export default SmallIconBtn;
