import React from 'react'
import Banner from "@/app/public/Banner Image.svg";
import Image from 'next/image';
import bookicon from "@/app/public/Book icon.svg";
import bookiconn from "@/app/public/Book iconn.svg";
import bookiconnn from "@/app/public/Book iconnn.svg";
import { AccordionDemo } from '../components/faq';

const Mobilepage = () => {
  return (
    <div className="bg-[#242424] text-white">
      <div className="flex flex-col items-center px-4 md:px-10 lg:px-20 text-center">
        {/* Main Heading */}
        <h1 className="text-xl md:text-2xl mt-10 md:mt-20">
          BOOKING RIDES ON THE GO!
        </h1>
        <h1 className="font-bold text-2xl md:text-3xl w-full md:w-2/3 lg:w-1/2">
          Introducing the <span className="text-[#FBA403]">myRIDE Mobile app</span>
        </h1>

        {/* Banner Image */}
        <div className="w-full max-w-4xl mt-5">
          <Image src={Banner} alt="Banner Image" className="w-full" />
        </div>

        {/* How it Works Section */}
        <div className="mt-10 text-center">
          <h1 className="text-[#FBA403] text-lg md:text-xl">
            QUICK AND EASY BOOKING
          </h1>
          <h1 className="font-bold text-2xl">How does it Work?</h1>
        </div>

        {/* Features Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 px-4">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <Image src={bookicon} alt="Ride Coverage" className="w-24 h-24 md:w-32 md:h-32" />
            <h2 className="text-white text-lg md:text-2xl font-bold mt-3">
              Download the app
            </h2>
            <p className="text-white max-w-xs text-sm md:text-base">
              Download the myRide App from the <span className="text-[#FBA403]">App Store</span> or <span className="text-[#FBA403]">Google Play Store</span>.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <Image src={bookiconn} alt="Fast Booking" className="w-24 h-24 md:w-32 md:h-32" />
            <h2 className="text-white text-lg md:text-2xl font-bold mt-3">
              Sign up
            </h2>
            <p className="text-white max-w-xs text-sm md:text-base">
              Sign up quickly. You can either sign up with Facebook, Google, or your email.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <Image src={bookiconnn} alt="Affordable Pricing" className="w-24 h-24 md:w-32 md:h-32" />
            <h2 className="text-white text-lg md:text-2xl font-bold mt-3">
              Book a ride
            </h2>
            <p className="text-white max-w-xs text-sm md:text-base">
              Add your destination, select your ride class, and find a driver.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 w-full max-w-4xl text-center">
          <h1 className="text-[#FBA403] text-lg md:text-xl">QUICK AND EASY BOOKING</h1>
          <h1 className="font-bold text-white text-2xl md:text-3xl">FAQ</h1>

          <div className="mt-5">
            <AccordionDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobilepage;
