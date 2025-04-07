'use client'
import React, { useState } from 'react'
import Map from '@/app/components/Map';
import LocationSearch from '../components/LocationSearch';
import { Place } from '@/types'; 
import Dropoff from "@/app/components/Dropoff";

export default function MapBoxMap() {
  const [selectPosition, setSelectPosition] = useState<Place | null>(null);

  // Directly use selectPosition instead of creating a new safeSelectPosition object
  const safeSelectPosition = selectPosition;

  return (
    <div>
      <div className="flex flex-col items-center w-full h-[500px] bg-[#242424]">
        <div className="w-full lg:w-1/2 h-full mt-2">
          <Map
            selectPosition={
              safeSelectPosition
                ? { lat: safeSelectPosition.lat, lon: safeSelectPosition.lng }
                : undefined
            }
          />
        </div>

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
