'use client'
import React, { useState } from 'react'
import Map from '@/app/components/Map';
import LocationSearch from '../components/LocationSearch';
import { DropletOff } from 'lucide-react';
import Dropoff from "@/app/components/Dropoff";
import car1 from "@/app/public/car1.svg";
import Image from 'next/image';
import car2 from "@/app/public/car2.svg";
import car3 from "@/app/public/car3.svg";
import car4 from "@/app/public/car4.svg";
import Link from 'next/link';



export default function MapBoxMap() {
    const [selectPosition, setSelectPosition] = useState<Place | null>(null);
    const [showPopup, setShowPopup] = useState(false); // ✅ Popup state
  
    // ✅ Function to show popup
    const handleFindDriver = () => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000); // ✅ 2 sec baad hide
    };
  
    return (
      <div className="bg-[#242424] min-h-screen p-5">
        {/* ✅ Map */}
        <div className="w-full h-full justify-center">
          <Map selectPosition={selectPosition} />
        </div>
  
        {/* ✅ Heading */}
        <h1 className="text-white font-bold text-2xl text-center mt-4">Find a Ride Now</h1>
  
        {/* ✅ Pickup & Dropoff */}
        <div className="mt-4">
          <LocationSearch selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
          <Dropoff selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
        </div>
  
        {/* ✅ Car Selection */}
        <div className="w-full px-4">
          <h1 className="text-white font-bold text-2xl text-center mt-4">Select Class</h1>
  
          {/* ✅ Responsive Cars Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 justify-center mt-5 max-w-5xl mx-auto">
            {[car1, car2, car3, car4].map((car, index) => (
              <div
                key={index}
                className="border-2 border-[#FBA403] rounded-lg p-4 flex flex-col items-center bg-[#242424] shadow-lg 
                     hover:scale-105 transition cursor-pointer w-full max-w-[180px] mx-auto"
              >
                <Image src={car} alt={`Car ${index + 1}`} width={140} height={90} className="object-contain"/>
                <h1 className="text-white mt-2 text-lg font-semibold">{["Basic", "Standard", "Luxury", "Premium"][index]}</h1>
              </div>
            ))}
          </div>
  
          {/* ✅ Button to Find Driver */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handleFindDriver}
              className="bg-[#FBA403] text-black px-6 py-3 rounded-lg font-bold text-lg hover:bg-[#ffbf47] transition cursor-pointer"
            >
              Find a Driver Now
            </button>
          </div>
        </div>
  
        {/* ✅ Compact Popup Message */}
        {showPopup && (
          <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold text-red-600">🚗 Sorry, no driver available!</h2>
          </div>
        )}
      </div>
    );
  }
  