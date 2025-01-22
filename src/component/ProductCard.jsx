import React from "react";

import { FaEdit, FaTrash } from 'react-icons/fa'; // Importing icons

const ProductCard = ({ image, label, name, price }) => {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden group relative hover:scale-95 transition-all duration-300">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <span
          className={`absolute top-2 right-2 text-white text-xs px-2 py-1 rounded bg-${label.color}`}
        >
          {label.text}
        </span>
      </div>

      {/* Icons and Add to Cart Button */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300">
        {/* Update and Delete icons */}
        <div className="flex flex-col items-end gap-2 p-4">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <FaEdit className="text-blue-500" />
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
            <FaTrash className="text-red-500" />
          </button>
        </div>

        {/* Add to Cart button on the right */}
        <div className="absolute bottom-4 right-4">
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-600">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
