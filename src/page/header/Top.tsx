import Email from "../../assets/svg/Email";
import Phone from "../../assets/svg/Phone";

function Top() {
  return (
    <div className="flex justify-between text-white text-xs p-5 items-center sm:py-3 sm:px-40">
      <div className="flex items-center gap-1">
        <Email width="0.75rem" height="0.75rem" />
        <a
          href="mailto:youremail@gmail.com"
          className="font-poppins text-yellow-500 text-xs"
        >
          youremail@gmail.com
        </a>
      </div>
      <div className="flex gap-1 items-center">
        <Phone width=".8em" height=".8em" />
        <a
          href="tel:+046123467"
          className="font-poppins text-yellow-500 text-xs"
        >
          {" "}
          (046) 123 - 4567
        </a>
      </div>
    </div>
  );
}

export default Top;
