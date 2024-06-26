const HomeContent = ({
  bgColor,
  txtColor,
  headerTitle,
  imgLink,
  description
}) => {
  return (
    <div
      className={`bg-${bgColor} text-${txtColor} w-full max-h-[645x] text-center md:flex md:items-center sm:gap-10 md:gap-10 xl:gap-20`}
    >
      <div className="pt-20 pb-10 md:max-w-[45%] md:text-end md:grow ">
        <h2 className="text-3xl font-medium mb-10 teaser-line relative">
          {headerTitle}
        </h2>
        <div className="flex justify-center mx-auto grow md:hidden">
          <img src={imgLink} alt="" className="max-w-[320px]" />
        </div>
        <div className="flex justify-center md:justify-end mt-5 px-4 md:px-0 md:pl-5">
          <p className="max-w-[420px] font-thin text-lg">{description}</p>
        </div>
        <div className="mt-5">skewed button</div>
      </div>

      <div className="max-w-[55%] h-[645px] grow hidden md:block w-0">
        <img
          src={imgLink}
          alt=""
          className="h-full w-full xl:max-w-[595px] object-contain "
        />
      </div>
    </div>
  );
};
export default HomeContent;
