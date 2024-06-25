const FirstTeaser = () => {
  return (
    <div className="bg-white w-full max-h-[645x] text-center md:flex md:items-center md:gap-10 xl:gap-20">
      <div className="pt-20 pb-10 md:max-w-[45%] md:text-end md:grow ">
        <h2 className="text-3xl font-medium mb-10 teaser-line relative">
          REALISTIC SIMULATION HARDWARE
        </h2>
        <div className="flex justify-center mx-auto grow md:hidden">
          <img
            src="https://fanatec.com/media/image/64/81/70/DD2_frontpage3.jpg"
            alt=""
            className="max-w-[320px]"
          />
        </div>
        <div className="flex justify-center md:justify-end mt-5 px-4 md:px-0 md:pl-5">
          <p className="max-w-[500px] font-thin text-lg">
            Enthusiast-grade equipment, built by sim racers, for sim racers.
            Designed and engineered in Germany, Fanatec racing simulation
            hardware is built to the highest standards so that you can perform
            at your best. It’s time to stop playing with toys.
          </p>
        </div>
        <div className="mt-5">skewed button</div>
      </div>

      <div className="max-w-[55%] h-[645px] grow hidden md:block w-0">
        <img
          src="https://fanatec.com/media/image/64/81/70/DD2_frontpage3.jpg"
          alt=""
          className="h-full w-full xl:max-w-[595px] object-contain "
        />
      </div>
    </div>

    // <div className="w-full h-[600px] px-16 gap-20 bg-white flex items-center">
    //   <div className="max-w-[50%] grow py-32 text-right">
    //     <h2 className="text-3xl font-medium mb-10">
    //       REALISTIC SIMULATION HARDWARE
    //     </h2>
    //     <div className="max-w-[50%] grow md:hidden">
    //       <img
    //         src="https://fanatec.com/media/image/64/81/70/DD2_frontpage3.jpg"
    //         alt=""
    //         className="max-h-[400px]"
    //       />
    //     </div>
    //     <div className="flex justify-end">
    //       <p className="max-w-[500px] font-thin text-lg">
    //         Enthusiast-grade equipment, built by sim racers, for sim racers.
    //         Designed and engineered in Germany, Fanatec racing simulation
    //         hardware is built to the highest standards so that you can perform
    //         at your best. It’s time to stop playing with toys.
    //       </p>
    //     </div>
    //     <div className="mt-10">skewed button</div>
    //   </div>
    //   <div className="max-w-[50%] grow hidden md:block">
    //     <img
    //       src="https://fanatec.com/media/image/64/81/70/DD2_frontpage3.jpg"
    //       alt=""
    //       className="max-h-[400px]"
    //     />
    //   </div>
    // </div>
  );
};
export default FirstTeaser;
