'use client'
import React, { useState } from "react";
import car from "@/app/public/car image.svg";
import Image from "next/image";
import drive1 from "@/app/public/drive1.svg";
import drive2 from "@/app/public/drive2.svg";
import drive3 from "@/app/public/drive3.svg";
import drive4 from "@/app/public/drive4.svg";
import { CheckboxDemo } from "../components/checkbox";

const DriverRegister = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-[#242424] flex justify-center items-center min-h-screen px-4">
      <div className="border-2 bg-[#1e1e1e] p-6 sm:p-10 rounded-lg w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Image src={drive1} alt="Car" width={100} height={100} />
          <div>
            <h1 className="font-bold text-2xl text-[#FBA403]">Drive with MyRide</h1>
            <p className="text-white text-sm">
              Register as a driver using the form below. Our team will assess and get back to you within 48 hours.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="mt-6 space-y-4">
          {/* Name Inputs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="text" 
              placeholder="First Name" 
              className="w-full sm:w-1/2 p-2 border rounded-lg bg-[#2c2c2c] text-white placeholder-gray-400"
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              className="w-full sm:w-1/2 p-2 border rounded-lg bg-[#2c2c2c] text-white placeholder-gray-400"
            />
          </div>

          {/* Email */}
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-2 border rounded-lg bg-[#2c2c2c] text-white placeholder-gray-400"
          />

          {/* Country & City */}
          <div className="flex flex-col sm:flex-row gap-4">
            <select 
              defaultValue="" 
              className="w-full sm:w-1/2 p-2 border rounded-lg bg-[#2c2c2c] text-white"
            >
              <option value="" disabled>Select Country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>

            <input 
              type="text" 
              placeholder="City" 
              className="w-full sm:w-1/2 p-2 border rounded-lg bg-[#2c2c2c] text-white placeholder-gray-400"
            />
          </div>

          {/* Referral Code */}
          <input 
            type="text" 
            placeholder="Referral Code (Optional)" 
            className="w-full p-2 border rounded-lg bg-[#2c2c2c] text-white placeholder-gray-400"
          />

          {/* Car Selection */}
          <h2 className="text-white">Select Your Car Type</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[drive1, drive2, drive3, drive4].map((car, index) => (
              <div key={index} className="border-2 p-2 rounded-lg flex flex-col items-center">
                <Image src={car} alt="Car" className="w-20 h-16" />
                <p className="text-white mt-2">{["Sedan", "SUV/Van", "Semi luxury", "Luxury Car"][index]}</p>
              </div>
            ))}
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <p className="text-gray-400">I drive my own car</p>
          </div>

          <div className="flex items-center gap-3">
            <input type="checkbox" />
            <p className="text-white">
              I agree to MyRide's <span className="text-[#FBA403]">Terms & Conditions</span> and 
              <span className="text-[#FBA403]"> Privacy Policy</span>.
            </p>
          </div>

          {/* Submit Button */}
          <button
            className="w-full bg-[#FBA403] text-black py-3 rounded-lg font-bold hover:bg-[#d98c02]"
            onClick={() => setShowPopup(true)}
          >
            Register Now
          </button>
        </div>
      </div>

      {/* ✅ Small Popup Box */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#1e1e1e] p-6 rounded-lg shadow-lg text-center w-80 border-2 border-[#FBA403]">
            <h2 className="text-xl font-bold text-[#FBA403]">Application Received</h2>
            <p className="text-gray-300 mt-2">We will review your application and respond within 48 hours.</p>
            <button
              className="mt-4 bg-[#FBA403] px-6 py-2 rounded-lg font-bold text-black"
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverRegister;