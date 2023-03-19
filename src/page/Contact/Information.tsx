import Pointer from "./../../assets/svg/Pointer";
import Phone from "../../assets/svg/Phone";
import Email from "../../assets/svg/Email";

function Information() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between py-5">
      <div className="flex flex-col gap-2">
        <p className="text-sm text-gray-500 font-bold text-center sm:text-left">
          Contact Information:
        </p>
        <div className="flex gap-1 items-center">
          <Pointer width="9" height="13" />
          <p className="textStyle text-gray-400">123 Your Address here</p>
        </div>
        <div className="flex gap-1 items-center">
          <Phone width=".8em" height=".8em" />
          <p className="textStyle text-gray-400">(046)123 - 456</p>
        </div>
        <div className="flex gap-1 items-center">
          <Email width="0.75rem" height="0.75rem" />
          <p className="textStyle text-gray-400">youremail@gmail.com</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className=" textStyle text-gray-500 font-bold text-center sm:text-left">
          Working Hours:
        </p>
        <div className="flex justify-between sm:flex-row gap-2">
          <div className="flex flex-col gap-2">
            <p className="textStyle text-gray-400">Monday to Friday</p>
            <p className="textStyle text-gray-400">Saturday</p>
            <p className="textStyle text-gray-400">Sunday</p>
          </div>
          <div className="flex flex-col gap-2 items-end sm:justify-center ">
            <p className="textStyle text-gray-400">9 AM - 6 PM</p>
            <p className="textStyle text-gray-400">9 AM - 5 PM</p>
            <p className="textStyle text-gray-400">9 AM - 12 NN</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
