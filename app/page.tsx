import Image from "next/image";
import Hero from "@/app/public/Hero image.svg";

import card from "@/app/public/Card image.svg";
import cardd from "@/app/public/Cardd.svg";
import carddd from "@/app/public/Carddd.svg";
import car1 from "@/app/public/car1.svg";
import car2 from "@/app/public/car2.svg";
import car3 from "@/app/public/car3.svg";
import car4 from "@/app/public/car4.svg";
import car from "@/app/public/car image.svg";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen bg-[#242424] flex flex-col items-center">
      <div className="w-full px-5 md:px-10 lg:px-20">
        {/* Hero Section */}
        <div className="mt-10 flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Left Side: Hero Image */}
          <div className="w-full lg:w-1/2">
            <Image src={Hero} alt="Hero Image" className="w-full h-auto" />
          </div>

          {/* Right Side: Text + Form */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-white text-3xl">Need a Ride?</h1>
            <h1 className="text-white text-3xl">
              Book with <span className="text-[#FBA403]">myRIDE</span> now!
            </h1>
            

            {/* Search Form Box */}
            <div className="border-2 border-[#2C2C2C] bg-[#2C2C2C] max-w-md mx-auto lg:mx-0 w-full h-auto p-5 rounded-lg mt-5 shadow-lg">
            <h2 className="text-white text-2xl ">Find a ride now</h2>
              {/* Pickup & Dropoff Search Inputs */}
              <div className="mt-2">
              <input
          type="text"
          placeholder="Enter Pickup Location"
        
          className="w-full p-3 pr-10 border border-[#FBA403] text-white h-14 bg-[#242424] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FBA403]"
        />
              {/* <LocationSearch selectPosition={undefined} selectPosition={undefined}  /> */}
              </div>

              {/* Book Button */}
              <Link href="/Taxi">
  <button className="mt-5 w-full bg-[#FBA403] text-white py-3 rounded-lg text-lg font-bold hover:bg-[#d98c02]">
    Book Now
  </button>
</Link>
            </div>
          </div>
        </div>

        {/* Why Choose myRIDE? */}
        <div className="mt-20 text-center">
          <h1 className="text-[#FBA403] text-2xl">THE BEST OUT THERE</h1>
          <h1 className="text-white font-bold text-2xl">WHY CHOOSE myRIDE?</h1>
        </div>

        {/* Features Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <Image src={card} alt="Ride Coverage" className="w-32 h-32" />
            <h2 className="text-white text-2xl font-bold mt-3">Our rides are everywhere</h2>
            <p className="text-white max-w-xs">
              We have a wide range of coverage. We are available in multiple cities in the US and Asia.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <Image src={cardd} alt="Fast Booking" className="w-32 h-32" />
            <h2 className="text-white text-2xl font-bold mt-3">Fast and easy booking</h2>
            <p className="text-white max-w-xs">
              Book by going to myRide.com or download our mobile app for iOS and Android.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <Image src={carddd} alt="Affordable Pricing" className="w-32 h-32" />
            <h2 className="text-white text-2xl font-bold mt-3">Your Wallet will thank you</h2>
            <p className="text-white max-w-xs">
              We have the lowest fares available. Now you can make it even lower by using myRide points.
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <h1 className="text-[#FBA403] lg:text-2xl">WHY SHOULD YOU RIDE WITH US?</h1>
          <h1 className=" lg:text-2xl font-bold text-white">Best in class rides</h1>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-5">
  {/* Card 1 - Basic */}
  <div className="border-2 w-full max-w-[400px] border-[#383838] p-5 rounded-lg shadow-lg bg-[#383838]">
    <div className="flex justify-center">
      <Image src={car1} alt="Basic Ride" className="w-[400px] h-auto" />
    </div>
    <div className="text-white text-center mt-5">
      <h1 className="text-xl font-bold">Basic</h1>
      <p className="text-sm text-gray-300 mt-2">
        The best balance of price and comfort. You will not go wrong with our basic rides.
      </p>
    </div>
    <div className="flex justify-end mt-5">
      <button className="bg-[#FBA403] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#d98c02]">
        LEARN MORE
      </button>
    </div>
  </div>

  {/* Card 2 - Premium */}
  <div className="border-2 w-full max-w-[400px] border-[#383838] p-5 rounded-lg shadow-lg bg-[#383838]">
    <div className="flex justify-center">
      <Image src={car2} alt="Premium Ride" className="w-[400px] h-auto" />
    </div>
    <div className="text-white text-center mt-5">
      <h1 className="text-xl font-bold">Comfort</h1>
      <p className="text-sm text-gray-300 mt-2">
        If comfort is your priority, this is the ride for you. Its spacious and packed with features.
      </p>
    </div>
    <div className="flex justify-end mt-5">
      <button className="bg-[#FBA403] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#d98c02]">
        LEARN MORE
      </button>
    </div>
  </div>

  {/* Card 3 - Luxury */}
  <div className="border-2 w-full max-w-[400px] border-[#383838] p-5 rounded-lg shadow-lg bg-[#383838]">
    <div className="flex justify-center">
      <Image src={car3} alt="Luxury Ride" className="w-[400px] h-auto" />
    </div>
    <div className="text-white text-center mt-5">
      <h1 className="text-xl font-bold">Business</h1>
      <p className="text-sm text-gray-300 mt-2">
      Do you want to travel around the city in style? Make sure to select or business class rides.
      </p>
    </div>
    <div className="flex justify-end mt-5">
      <button className="bg-[#FBA403] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#d98c02]">
        LEARN MORE
      </button>
    </div>
  </div>

  {/* Card 4 - Electric */}
  <div className="border-2 w-full max-w-[400px] border-[#383838] p-5 rounded-lg shadow-lg bg-[#383838]">
    <div className="flex justify-center">
      <Image src={car4} alt="Electric Ride" className="w-[400px] h-auto" />
    </div>
    <div className="text-white text-center mt-5">
      <h1 className="text-xl font-bold">Deluxe</h1>
      <p className="text-sm text-gray-300 mt-2">
        The best ride for luxury and comfort.No compromises here. Youll surely get what you pay for.
      </p>
    </div>
    <div className="flex justify-end mt-5">
      <button className="bg-[#FBA403] text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-[#d98c02]">
        LEARN MORE
      </button>
    </div>
  </div>
</div>
<div className="w-full border-[#383838] bg-[#383838] mt-10 h-auto flex flex-col lg:flex-row items-center lg:items-start px-6 py-10 lg:px-16">

  {/* ✅ Car Image */}
  <div className="w-full lg:w-auto flex justify-center">
    <Image src={car} alt="Car" className="max-w-[250px] lg:max-w-[300px]" />
  </div>

  {/* ✅ Text Section */}
  <div className="text-center lg:text-left mt-5 lg:mt-20 flex-1 px-4">
    <h1 className="font-bold text-white text-2xl lg:text-3xl">Become a Driver</h1>
    <p className="text-white text-lg mt-2 max-w-lg">
      Be a part of a growing community of myRiders. Register as a driver and dont forget to register your car as well.
    </p>
  </div>

  {/* ✅ Register Button */}
  <div className="mt-5 lg:mt-28">
    <Link href="/DriverRegister">
      <button className="text-lg font-bold text-black bg-[#FBA403] border-2 border-white rounded-2xl px-6 py-3 hover:bg-[#d98c02] transition">
        Register Now
      </button>
    </Link>
  </div>

</div>

</div>
</div>
  )}
