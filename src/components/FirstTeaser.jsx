const FirstTeaser = () => {
  return (
    <div className="w-full h-[600px] px-16 gap-10 bg-white flex items-center">
      <div className="max-w-[50%] grow py-32 text-right">
        <h2 className="text-2xl font-bold mb-10">
          REALISTIC SIMULATION HARDWARE
        </h2>
        <div className="flex justify-end">
          <p className="max-w-[500px]">
            Enthusiast-grade equipment, built by sim racers, for sim racers.
            Designed and engineered in Germany, Fanatec racing simulation
            hardware is built to the highest standards so that you can perform
            at your best. It’s time to stop playing with toys.
          </p>
        </div>
        <div>skewed button</div>
      </div>
      <div className="max-w-[50%] grow">
        <img
          src="https://fanatec.com/media/image/64/81/70/DD2_frontpage3.jpg"
          alt=""
          className="max-h-[400px]"
        />
      </div>
    </div>
  );
};
export default FirstTeaser;
