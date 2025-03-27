'use client';
import React from 'react'
import {MapContainer, Marker , Popup, TileLayer, useMap} from 'react-leaflet';
import "leaflet/dist/leaflet.css";


import L  from "leaflet"; // Import LatLngTuple
import { useEffect } from 'react';




// ✅ Define TypeScript types for selectPosition
interface Position {
  lat: number;
  lon: number;
}

// ✅ Correctly load the red marker image
const redMarkerIcon = L.icon({
  iconUrl: new URL("@/app/public/redmarker.png", import.meta.url).href,
  iconSize: [38, 38],
});

// ✅ Reset Map View Component
function ResetCenterView({ selectPosition }: { selectPosition?: Position }) {
  const map = useMap();

  useEffect(() => {
    if (selectPosition) {
      map.setView([selectPosition.lat, selectPosition.lon], map.getZoom(), {
        animate: true,
      });
    }
  }, [selectPosition, map]);

  return null;
}

// ✅ Main Map Component
export default function Map({ selectPosition }: { selectPosition?: Position }) {
  const defaultPosition: [number, number] = [24.8607, 67.0011]; // Karachi as default

  return (
    <div className=''>
      <h1 className='text-white mt-5 text-center'>MAp</h1><div className="w-full h-[400px] sm:h-[500px] md:h-[600px] max-w-[600px] mx-auto">
      <MapContainer className="w-full h-full" center={defaultPosition} zoom={13}>
        {/* OpenStreetMap Layer */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=NJC25r1bNyWvszNRirMC" />

        {/* Selected Location Marker */}
        {selectPosition && (
          <Marker
            position={[selectPosition.lat, selectPosition.lon]} 
            icon={redMarkerIcon}
          
          >
            <Popup>Selected Location</Popup>
          </Marker>
        )}

        {/* Auto-Center View */}
        <ResetCenterView selectPosition={selectPosition} />
      </MapContainer>
    </div></div>
  );
}
