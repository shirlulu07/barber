function HeadBody() {
  const buttonStyle =
    "text-white border-2 w-40 h-10 rounded-3xl my-1 hover:bg-yellow-400";
  return (
    <div className="pl-8 pr-3 py-32 text-white sm:px-40">
      <div className="pt-32 flex flex-col gap-5">
        <h1 className="text-5xl text-white font-crimson">
          Quality Barber Shop
        </h1>
        <p className="text-sm font-poppins">
          Lorem ipsum dolr sit amet, consectutuer adipisicing elit, sed do
          eismod
          <br />
          tempor incididunt er dolore magna aliqua
        </p>
      </div>
      <div className="flex flex-col text-sm pt-2 sm:flex-row gap-2">
        <div>
          <button type="button" className={buttonStyle}>
            LEARN MORE
          </button>
        </div>
        <div>
          <button type="button" className={buttonStyle}>
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeadBody;
