import Dotfill from "../assets/svg/Dotfill";
import Dot from "./../assets/svg/Dot";

function Testimonial() {
  return (
    <div
      className="bg-no-repeat bg-left-top sm:bg-cover sm:bg-left-top px-10 py-20 sm:px-40 bg-black bg-bg-2"
      id="testimonials"
    >
      <h3 className="font-crimson text-lg text-white">100+ HAPPY CLIENTS</h3>
      <h1 className="headStyle text-2xl">TESTIMONIALS</h1>
      <div className="py-5 flex flex-col gap-3 sm:w-1/2">
        <p className="textStyle text-white ">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat Duis aute irure dolor in reprehenderit in
          voluptate"
        </p>
        <p className="textStyle text-white ">
          <strong>
            <i>John Doe, CEO Microsoft</i>
          </strong>
        </p>
        <p className="textStyle text-white ">July 27, 2018</p>
      </div>
      <div className="flex">
        <div>
          <Dotfill width="1em" height="1em" />
        </div>
        <div>
          <Dot width="1em" height="1em" />
        </div>
        <div>
          <Dot width="1em" height="1em" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
