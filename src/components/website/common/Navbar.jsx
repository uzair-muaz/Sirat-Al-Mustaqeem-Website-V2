'use client';
import { navLinks } from '@/utils/website/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { IoIosMenu } from 'react-icons/io';
import Sidebar from './Sidebar';
const Navbar = () => {
  const currentURL = usePathname();
  const [isSidebarOpen, setOpenSidebar] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      let screenWidth = window.innerWidth;
      const navHeight = screenWidth < 1024 ? 96 : 112;
      if (window.scrollY > navHeight) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed w-full transition-all duration-[700ms] z-50 ${
        scrolling
          ? 'bg-custom9 bg-opacity-[0.3] backdrop-blur-sm'
          : 'bg-white bg-opacity-[0.3] lg:bg-opacity-[1] lg:bg-transparent'
      }`}
    >
      <nav
        className={
          'sm:container mx-auto h-16 lg:h-20 w-full flex justify-between items-center px-6'
        }
      >
        <div className='bg-custom1 rounded-b-3xl hidden lg:flex lg:h-20 pr-2  items-center'>
          <img className='w-40' src='/website-assets/nav-logo.svg' alt='...' />
        </div>
        <div className='lg:hidden flex pr-2 items-center'>
          <img className='h-10' src='/website-assets/nav-logo.svg' alt='...' />
        </div>
        <div className={`hidden lg:block`}>
          <ul className='flex items-center gap-8'>
            {navLinks.map((link) => (
              <Link key={link.route} href={link.route} legacyBehavior>
                <a
                  className={`text-sm px-2  ${
                    currentURL === link.route
                      ? 'active-nav text-custom5'
                      : ' hover:text-custom5 text-white inactive-nav'
                  } `}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </ul>
        </div>
        <div className='lg:hidden'>
          <IoIosMenu
            className={`cursor-pointer text-3xl text-white hover:text-custom5 duration-700`}
            onClick={() => {
              setOpenSidebar(true);
            }}
          />
        </div>
      </nav>
      <Sidebar
        isOpen={isSidebarOpen}
        handleCloseSidebar={() => setOpenSidebar(false)}
      />
    </header>
  );
};

export default Navbar;
