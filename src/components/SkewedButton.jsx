const SkewedButton = ({ text, color, bgColor }) => {
  return (
    <div className="mt-5 mr-2 font-semibold">
      <button
        className={`border py-2 px-10 -skew-x-[20deg]   ${bgColor == "white" ? "btn-bg-blk hover:text-white" : "btn-bg"}`}
      >
        <p className={`skew-x-[20deg] uppercase`}>{text}</p>
      </button>
    </div>
  );
};

export default SkewedButton;
