import Icon from "@mdi/react";
const SmallIconBtn = ({ icon }) => {
  return (
    <div className="flex-auto border-l border-gray-300 border-opacity-20">
      <Icon path={icon} />
    </div>
  );
};

export default SmallIconBtn;
