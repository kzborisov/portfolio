import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

import { navLinks } from "../utils/constants";
import Logo from "../assets/logo-no-bg.png";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <nav className='flex items-center justify-between w-full p-10 z-10 bg-black'>
      <Link href='/' onClick={() => window.scroll(0, 0)}>
        <img
          src={Logo}
          alt='logo'
          className='w-[86px] hover:drop-shadow-primary'
        />
      </Link>

      <ul className='hidden md:flex gap-10'>
        {navLinks.map((link) => (
          <li
            key={link.link}
            className='text-white uppercase tracking-widest hover:text-primary ease-in duration-100 hover:drop-shadow-primary'
          >
            <a href={`#${link.link}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <button
        type='button'
        className='md:hidden text-primary cursor-pointer z-20 hover:drop-shadow-primary'
        onClick={() => setIsToggled(!isToggled)}
      >
        {isToggled ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {isToggled && (
        <div className='w-screen h-screen bg-black absolute top-0 left-0 flex justify-center items-center animate-slide-in'>
          <ul className='md:hidden flex flex-col  items-center justify-center gap-10'>
            {navLinks.map((link) => (
              <li
                key={link.link}
                className={
                  "text-white text-2xl font-semibold uppercase tracking-widest hover:text-primary hover:drop-shadow-primary ease-in duration-100 before:content-{}"
                }
                onClick={() => setIsToggled(!isToggled)}
              >
                <a href={`#${link.link}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
