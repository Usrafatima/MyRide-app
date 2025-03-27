import React from 'react';
import Image from 'next/image';
import Logo from "@/app/public/Logofooter.svg";
import facebook from "@/app/public/Facebook.svg";
import Instagram from "@/app/public/Instagram.svg";
import Twitter from "@/app/public/Twitter.svg";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="bg-[#242424] pt-28 pb-5">
      {/* Top Section - Logo & Social Media */}
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Logo & Address */}
        <div className="mb-5 md:mb-0">
          <Image src={Logo} alt="MyRide Logo" className="w-[150px]" />
          <p className="text-white mt-3 text-sm">
            MyRide Inc, 2nd Floor, New York, NY 10016
          </p>
          {/* Social Media Icons */}
          <div className="flex gap-3 mt-3 justify-center md:justify-start">
            <Image src={facebook} alt="Facebook" className="w-6 h-6 cursor-pointer hover:opacity-80" />
            <Image src={Instagram} alt="Instagram" className="w-6 h-6 cursor-pointer hover:opacity-80" />
            <Image src={Twitter} alt="Twitter" className="w-6 h-6 cursor-pointer hover:opacity-80" />
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-white">
          {/* Column 1 */}
          <div>
            <h1 className="font-bold text-lg mb-3">Company</h1>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <Link href={"/"} className="hover:text-[#FBA403]">About Us</Link>
              <Link href={"/"} className="hover:text-[#FBA403]">News</Link>
              <Link href={"/"} className="hover:text-[#FBA403]">Careers</Link>
              <Link href={"/"} className="hover:text-[#FBA403]">How We Work</Link>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h1 className="font-bold text-lg mb-3">Support</h1>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <Link href={"/"} className="hover:text-[#FBA403]">FAQ</Link>
              <Link href={"/"} className="hover:text-[#FBA403]">US Office</Link>
              <Link href={"/"} className="hover:text-[#FBA403]">Asia Office</Link>
              <Link href={"/"} className="hover:text-[#FBA403]">Help Center</Link>
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <h1 className="font-bold text-lg mb-3">More</h1>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <Link href={"/"} className="hover:text-[#FBA403]">Become a Partner</Link>
              <Link href={"/"} className="hover:text-[#FBA403]">Partner Support</Link>
              <Link href={"/"} className="hover:text-[#FBA403]">Mobile App Links</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2025 MyRide Inc. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
