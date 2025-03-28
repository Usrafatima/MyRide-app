'use client'
import React, { useState } from 'react'
import Map from '@/app/components/Map';
import LocationSearch from '../components/LocationSearch';
import { Place } from '@/types'; 
import Dropoff from "@/app/components/Dropoff";


export default function MapBoxMap() {
  const [selectPosition, setSelectPosition] = useState<Place | null>(null);

const safeSelectPosition: Place | null = selectPosition
  ? { 
      ...selectPosition, 
      osm_id: selectPosition.osm_id ?? 0, 
      display_name: selectPosition.display_name ?? "" 
  : null;
  return (
    <div>
      <div className="flex flex-col items-center w-full h-[500px] bg-[#242424]">
        {/* Left Side - Map */}
        <div className="w-full lg:w-1/2 h-full mt-2">
          <Map
            selectPosition={
              safeSelectPosition
                ? { lat: safeSelectPosition.lat, lon: safeSelectPosition.lng } 
                : undefined
            }
          />
        </div>

        {/* Right Side - Location Inputs */}
        <div className="w-full lg:w-1/2 p-4 border-r-2">
          <LocationSearch 
            selectPosition={safeSelectPosition} 
            setSelectPosition={setSelectPosition} 
          />
          <Dropoff 
            selectPosition={safeSelectPosition} 
            setSelectPosition={setSelectPosition} 
          />
        </div>
      </div>
    </div>
  );
}
