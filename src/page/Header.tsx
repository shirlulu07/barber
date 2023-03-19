import Top from "./header/Top";
import Nav from "./header/Nav";
import HeadBody from "./header/HeadBody";

function Header() {
  return (
    <div className="bg-top pb-10 bg-no-repeat bg-bg-1 sm:bg-cover" id="home">
      <Top />
      <Nav />
      <HeadBody />
    </div>
  );
}

export default Header;
