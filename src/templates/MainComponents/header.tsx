/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable tailwindcss/no-custom-classname */
// import Button from '@/components/elements/button';
import Logo from '@images/logo-light.png';
import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import Button from '@/components/elements/button';

const Header = () => {
  const [navbar, setNavbar] = React.useState(false);

  return (
    <header className={`main-header header 'on-top' fixed z-10 w-full`}>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Fade duration={500} cascade direction="up">
          <div className="flex flex-row items-center md:gap-10">
            <div className="logo">
              <Button href="/">
                <Image className="logo" src={Logo} alt={''} />
              </Button>
            </div>
          </div>
        </Fade>
        <div className="flex flex-row items-center gap-2 lg:gap-5">
          <div className="hidden md:block">
            <div className="flex flex-row items-center gap-2 lg:gap-5">
              <ul className="mt-4 flex flex-col font-medium md:mt-0 md:flex-row md:space-x-8">
                <li className="py-2">
                  <Button
                    href="/"
                    className="block border-b border-gray-100 py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-orange-400"
                    aria-current="page"
                  >
                    Home
                  </Button>
                </li>
                <li>
                  <div className="main-dropdowon py-2">
                    <div className="block border-b border-gray-100 py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-orange-400">
                      Courses
                    </div>
                    <ul className="main-dropdowon-menu rounded-md shadow-lg">
                      <li className="p-2 text-left hover:bg-zinc-100 hover:text-orange-400">
                        <a href="#">Piano</a>
                      </li>
                      <li className="p-2 text-left hover:bg-zinc-100 hover:text-orange-400">
                        <a href="#">Guitar</a>
                      </li>
                      <li className="p-2 text-left hover:bg-zinc-100 hover:text-orange-400">
                        <a href="#">Drum</a>
                      </li>
                      <li className="p-2 text-left hover:bg-zinc-100 hover:text-orange-400">
                        <a href="#">Bass</a>
                      </li>
                      <li className="p-2 text-left hover:bg-zinc-100 hover:text-orange-400">
                        <a href="#">All courses</a>
                      </li>
                    </ul>
                  </div>
                  {/* <Button
                    href="#"
                    className="block border-b border-gray-100 py-2 pr-4 pl-3 text-white hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-orange-400"
                    aria-current="page"
                  >
                    Courses
                  </Button> */}
                </li>
              </ul>
              {/* <Button className="font-medium text-white" href="/">
                Home
              </Button>
              <Button className="font-medium text-white" href="/">
                Courses
              </Button> */}
              <Button>
                <AiOutlineShoppingCart size={30} color="white" />
              </Button>
              <a
                href="#_"
                className="group relative inline-block rounded-full px-5 py-2.5 font-medium text-white"
              >
                <span className="absolute top-0 left-0 h-full w-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-50 blur-sm"></span>
                <span className="absolute inset-0 mt-0.5 ml-0.5 h-full w-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 opacity-50 group-active:opacity-0"></span>
                <span className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-xl transition-all duration-200 ease-out group-hover:blur-sm group-active:opacity-0"></span>
                <span className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-br from-red-500 to-orange-400 transition duration-200 ease-out"></span>
                <span className="relative">Login</span>
              </a>
            </div>
          </div>
          {/* mobile version */}
          <button
            className="block cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none outline-none focus:outline-none md:hidden"
            type="button"
            onClick={() => setNavbar(!navbar)}
          >
            <GiHamburgerMenu color="white" />
          </button>
        </div>
      </nav>
      {/* nav bar mobile */}
      <div className={`${navbar ? ' block' : ' hidden'}`}>
        <Fade duration={300} cascade direction="right">
          <div
            className={`grow items-center bg-white lg:flex lg:bg-opacity-0 lg:shadow-none`}
            id="nav-mobile"
          >
            <div>
              <ul className="mr-auto flex list-none flex-col lg:flex-row">
                <li className="flex items-center">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar"
                  >
                    <i className="text-blueGray-400 far fa-file-alt leading-lg mr-2 text-lg" />{' '}
                    Docs
                  </a>
                </li>
              </ul>
              <ul className="mr-auto flex list-none flex-col lg:flex-row">
                <li className="flex items-center">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar"
                  >
                    <i className="text-blueGray-400 far fa-file-alt leading-lg mr-2 text-lg" />{' '}
                    Docs
                  </a>
                </li>
              </ul>
              <ul className="mr-auto flex list-none flex-col lg:flex-row">
                <li className="flex items-center">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar"
                  >
                    <i className="text-blueGray-400 far fa-file-alt leading-lg mr-2 text-lg" />{' '}
                    Docs
                  </a>
                </li>
              </ul>
              <ul className="mr-auto flex list-none flex-col lg:flex-row">
                <li className="flex items-center">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar"
                  >
                    <i className="text-blueGray-400 far fa-file-alt leading-lg mr-2 text-lg" />{' '}
                    Docs
                  </a>
                </li>
              </ul>
              <ul className="mr-auto flex list-none flex-col lg:flex-row">
                <li className="flex items-center">
                  <a
                    className="hover:text-blueGray-500 text-blueGray-700 flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2"
                    href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index-navbar"
                  >
                    <i className="text-blueGray-400 far fa-file-alt leading-lg mr-2 text-lg" />{' '}
                    Docs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Fade>
      </div>
    </header>
  );
};

export default Header;
