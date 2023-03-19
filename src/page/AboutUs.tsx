import Img1 from "../image/1.png";

function AboutUs() {
  const buttonStyle2 =
    "text-white bg-yellow-400 border-2 border-yellow-400 w-40 h-10 rounded-3xl my-1 hover:bg-yellow-400";
  return (
    <div
      className="px-10 py-20 sm:px-40 sm:flex sm:flex-row sm:justify-evenly gap-10 items-center"
      id="aboutUs"
    >
      <div className="flex flex-col gap-10 sm:w-1/2 py-5">
        <div>
          <h3 className="headStyle1">THE UNIQUE STORY</h3>
          <h1 className="headStyle">50 YEARS OF EXPERIENCE</h1>
        </div>
        <div className="">
          <p className="textStyle text-gray-400">
            Lorem ipsum dolorsit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex eacommando consequat.
            <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidant non proident, sunt in cuipa qui officia deserunt mollit
            anim id est laborum. Sed ut perspiciatis undeomnis iste error sit
            volumptatem accusantium.
          </p>
        </div>
        <button type="button" className={buttonStyle2}>
          READ MORE
        </button>
      </div>

      <img src={Img1} alt="" className=" sm:h-96 sm:w-128" />
    </div>
  );
}

export default AboutUs;
