'use client'
import React, { useState } from 'react'
import Map from '@/app/components/Map';
import LocationSearch from '../components/LocationSearch';

import Dropoff from "@/app/components/Dropoff";




export default function MapBoxMap() {
  const [selectPosition, setSelectPosition] = useState(null);



  return (
    <div className=''>
    <div className="flex flex-col items-center w-full h-[500px]  border-red bg-[#242424] ">
      {/* Left Side - Location Search */}
      <div className="w-full  lg:w-1/2 h-full mt-2">
        <Map selectPosition={selectPosition ?? undefined} />
      </div>
      {/* Right Side - Map */}
      <div className="w-1/2 p-4 border-r-2">
<LocationSearch selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
<Dropoff selectPosition={selectPosition} setSelectPosition={setSelectPosition} />
</div>

    </div>
    </div>
  );
}
