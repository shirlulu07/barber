import Burger from "../../assets/svg/Burger";
import Navigation from "../../component/Navigation";

function Nav() {
  const textStyle = "font-poppins hover:text-yellow-400";
  return (
    <div className="bg-white/10 py-5 sm:px-40 px-7">
      <nav className="text-white flex justify-between items-center">
        <h3 className="text-yellow-500 text-4xl sm:text-5xl font-crimson">
          BARBERS
        </h3>
        <Burger width="30" height="30" color="white" hide="sm:hidden" />
        <ul className="justify-between gap-10 hidden poppins sm:flex">
          <Navigation />
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
