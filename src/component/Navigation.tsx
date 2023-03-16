import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navigation() {
  const links = [
    { id: 'home', text: 'HOME' },
    { id: 'aboutUs', text: 'About Us' },
    { id: 'services', text: 'Services' },
    { id: 'testimonials', text: 'Testimonials' },
    { id: 'team', text: 'Our Team' },
    { id: 'contact', text: 'Contact Us' }
  ];

  return (
    <>
      {links.map((link) => (
        <li key={link.id}>
          <AnchorLink href={`#${link.id}`} className="textStyle text-white hover:text-yellow-500">{link.text}</AnchorLink>
        </li>
      ))}
    </>
  );
}

export default Navigation;
