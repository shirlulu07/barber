import AnchorLink from 'react-anchor-link-smooth-scroll';

function Nav() {
  const textStyle = "font-poppins hover:text-yellow-400"
  return (
    <div className="bg-white/10 py-8 sm:px-40 px-7">
      <nav className="text-white flex justify-between items-center">
        <h3 className="text-yellow-400 text-4xl sm:text-5xl font-crimson">BARBERS</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#FFFFFF"
          className="sm:hidden">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
        <ul className="justify-between gap-10 hidden poppins sm:flex">
          <li>
            <AnchorLink href="#home" className={textStyle}>HOME</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#aboutUs" className={textStyle}>About Us</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#services" className={textStyle}>Services</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#testimonials" className={textStyle}>Testimonials</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#team" className={textStyle}>Our Team</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#contact" className={textStyle}>Contact Us</AnchorLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
