"use client";
import { useState } from "react";

const CarCard = ({ name, image }: { name: string; image: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white shadow-md p-4 rounded-lg text-center">
      <img src={image} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-lg font-semibold mt-2">{name}</h2>

      {/* Learn More Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Learn More
      </button>

      {/* Simple Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-5 rounded-lg shadow-lg w-80 text-center">
            <h2 className="text-xl font-bold">{name}</h2>
            <img src={image} alt={name} className="w-full h-40 object-cover rounded-md my-3" />
            <button
              onClick={() => setIsOpen(false)}
              className="bg-red-500 text-white px-4 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarCard;
