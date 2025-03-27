'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from "@/app/public/Logo.svg";
import bellicon from "@/app/public/bellicon.svg";
import profileIcon from "@/app/public/profile-icon.svg"; 
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#242424] h-16 px-5 flex items-center justify-between relative z-[9999]">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link href={"/"}>
          <Image src={Logo} alt="Logo" width={100} height={100} />
        </Link>
      </div>

      {/* Center: Navigation - Hidden on small screens */}
      <div className="hidden md:flex flex-row text-white gap-5">
        <Link href={"/"} className="hover:text-gray-300">Home</Link>
        <Link href={"/Taxi"} className="hover:text-gray-300">Get a Taxi</Link>
        <Link href={"/Mobile"} className="hover:text-gray-300">Mobile App</Link>
        <Link href={"/Contact"} className="hover:text-gray-300">Contact Us</Link>
      </div>

      {/* Right: Icons & Mobile Menu Toggle */}
      <div className="flex items-center gap-3">
        <Image src={bellicon} alt="Bell Icon" width={24} height={24} className="cursor-pointer" />
        <Image src={profileIcon} alt="Profile Icon" width={32} height={32} className="rounded-full cursor-pointer" />

        {/* Hamburger Menu for Mobile */}
        <button onClick={() => setIsOpen(true)} className="md:hidden text-white">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar Menu - Opens from Left */}
      <div className={`fixed top-0 left-0 h-full w-[250px] bg-[#242424] shadow-lg z-[9999] transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-end p-5">
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col text-white items-start pl-5 space-y-4">
          <Link href={"/"} className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href={"/Taxi"} className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Get a Taxi</Link>
          <Link href={"/Mobile"} className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Mobile App</Link>
          <Link href={"/Contact"} className="hover:text-gray-300" onClick={() => setIsOpen(false)}>Contact Us</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;