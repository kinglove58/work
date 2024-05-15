import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constant";

const Nav = () => {
  return (
    <header className="py-8 padding-x absolute z-10 w-full">
      <nav className="flex items-center max-container justify-between">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={28} />
        </a>
        <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
          {" "}
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}> {item.label} </a>
            </li>
          ))}{" "}
        </ul>
        <div className="flex gap-2 leading-normal font-normal font-montserrat text-lg max-lg:hidden wide:mr-24">
          <a href="/">Signin</a>
          <span>/</span>
          <a href="/">Explore</a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
