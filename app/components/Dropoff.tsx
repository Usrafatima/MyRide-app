'use client'
import {  useState } from "react";
import React from "react";


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import Image from "next/image";
import redmarker from "@/app/public/redmarker.png";

import { Search } from "lucide-react";

interface Place {
  osm_id: number;
  lat: number;
  lng: number;
  display_name: string;
}

interface DropoffProps {
  selectPosition: Place | null;
  setSelectPosition: React.Dispatch<React.SetStateAction<Place | null>>;
}

export default function Dropoff({ setSelectPosition }: DropoffProps) {
  const [searchText, setSearchText] = useState("");
  const [listPlace, setListPlace] = useState<Place[]>([]);

  const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search";

  const handleSearch = () => {
    if (!searchText.trim()) return;

    const params = new URLSearchParams({
      q: searchText,
      format: "json",
      addressdetails: "1",
      polygon_geojson: "0",
    });

    fetch(`${NOMINATIM_BASE_URL}?${params.toString()}`)
      .then((response) => response.json())
      .then((data: Place[]) => {
        setListPlace(data);
        console.log("API Response:", data);
      })
      .catch((error) => console.error("Error fetching location:", error));
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchText(newValue);
    if (newValue.trim() === "") {
      setListPlace([]);
    }
  };

  return (
    <div className="flex flex-col items-center w-full sm:w-[400px] mx-auto flex-grow mt-2">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Enter Dropoff Location"
          value={searchText}
          onChange={handleInputChange}
          className="w-full p-3 pr-10 border border-[#FBA403] text-white h-14 bg-[#242424] rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FBA403]"
        />

        <button
          onClick={handleSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FBA403] hover:text-[#ffbf47] transition"
        >
          <Search size={24} />
        </button>
      </div>

      <div
        className={`max-h-[200px] overflow-y-auto border border-[#242424] rounded-lg shadow-md bg-[#242424] w-full mt-4 ${
          listPlace.length === 0 ? "hidden" : "block"
        }`}
      >
        <List component="nav" aria-label="location results" className="bg-[#242424]">
          {listPlace.map((item) => (
            <div key={item.osm_id} className="hover:bg-gray-700 transition">
              <ListItem
                component="button"
                onClick={() => {
                  setSelectPosition(item);
                  setListPlace([]);
                  setSearchText("");
                }}
                className="p-2 text-white border-b border-[#242424]"
              >
                <ListItemIcon>
                  <Image src={redmarker} alt="Location Marker" width={30} height={35} />
                </ListItemIcon>
                <ListItemText primary={item.display_name} className="text-white" />
              </ListItem>
              <Divider className="bg-[#242424]" />
            </div>
          ))}
        </List>
      </div>
    </div>
  );
}

