'use client'
import React, { useState } from 'react'
import Map from '@/app/components/Map';
import LocationSearch from '../components/LocationSearch';

import Dropoff from "@/app/components/Dropoff";

import { LatLngExpression } from "leaflet"; // ✅ Correct import

interface Place {
  lat: number;
  lng: number;
}

export default function MapBoxMap() {
  const [selectPosition, setSelectPosition] = useState<Place | null>(null);

  return (
    <div className="">
      <div className="flex flex-col items-center w-full h-[500px] bg-[#242424]">
        {/* Left Side - Location Search */}
        <div className="w-full lg:w-1/2 h-full mt-2">
         <Map
  selectPosition={
    selectPosition
      ? { lat: selectPosition.lat, lon: selectPosition.lng } // ✅ Use 'lon' instead of 'lng'
      : undefined
  }
/>
        </div>
        {/* Right Side - Location Inputs */}
        <div className="w-1/2 p-4 border-r-2">
          <LocationSearch setSelectPosition={setSelectPosition} />
          <Dropoff setSelectPosition={setSelectPosition} />
        </div>
      </div>
    </div>
  );
}

