import Navigation from "../component/Navigation";
import Facebook from "../assets/svg/Facebook";
import Twitter from "../assets/svg/Twitter";
import Linkin from "../assets/svg/Linkin";

function Footer() {
  return (
    <div className="bg-black text-center py-5 font-poppins">
      <h1 className="headStyle">BARBERS</h1>
      <ul className="justify-between gap-3 text-white hidden sm:flex sm:px-40 sm:justify-center sm:gap-7">
        <Navigation />
      </ul>
      <div className="flex justify-center gap-5 py-2 items-center">
        <div>
          <Facebook width="7" height="13" />
        </div>
        <div>
          <Twitter width="13" height="13" />
        </div>
        <div>
          <Linkin width="13" height="13" />
        </div>
      </div>
      <h3 className="text-white textStyle">
        {" "}
        BARBERS © 2018. All rights Reserved.
      </h3>
    </div>
  );
}

export default Footer;
