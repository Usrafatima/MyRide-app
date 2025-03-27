'use client'
import React, { useState } from 'react'
import Map from '@/app/components/Map';
import LocationSearch from '../components/LocationSearch';

import Dropoff from "@/app/components/Dropoff";

import { LatLngExpression } from "leaflet"; // Import correct type

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
                ? ([selectPosition.lat, selectPosition.lng] as LatLngExpression)
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
