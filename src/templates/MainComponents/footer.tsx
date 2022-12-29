/* eslint-disable tailwindcss/no-custom-classname */
import Logo from '@images/logo-light.png';
import Image from 'next/image';
import React from 'react';
import { BsFillPhoneFill } from 'react-icons/Bs';
import { IoMail } from 'react-icons/io5';

import Button from '@/components/elements/button';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto p-4">
        <div className="items-center py-5">
          <div>
            <Button href="/">
              <Image className="logo" src={Logo} alt={''} />
            </Button>
          </div>
          <div className="flex flex-row py-4">
            <div className="flex flex-1">
              <span className="grey-color">
                The Biggest Music Family Jakarta, Indonesia
              </span>
            </div>
            <div className="flex flex-1 ">
              <div className="flex flex-1 flex-col px-2">
                <span className="mb-2 text-xl font-semibold text-white">
                  Useful links
                </span>
                <span className="grey-color text-base">Courses</span>
                <span className="grey-color text-base">Login</span>
                <span className="grey-color text-base">Register</span>
              </div>
              <div className="flex flex-1 flex-col px-2">
                <span className="mb-2 text-xl font-semibold text-white">
                  Contact with us
                </span>
                <span className="grey-color inline-flex items-center gap-2 text-base">
                  <BsFillPhoneFill /> +62 857 1760 5990
                </span>
                <span className="grey-color inline-flex items-center gap-2 text-base">
                  <IoMail /> info@reharm.com
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-700 py-5">
          <div className="flex flex-row">
            <span className="txt-footer mr-2 text-sm">Term & Condition</span>
            <span className="grey-color mr-2 text-sm">|</span>
            <span className="txt-footer mr-2 text-sm">Privacy policy</span>
            <span className="grey-color mr-2 text-sm">|</span>
            <span className="txt-footer text-sm">About us</span>
          </div>
          <span className="txt-footer text-sm">© Reharm 2022</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
