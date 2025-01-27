// components/SortingLocation.js
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import vector1 from "../src/img/vector-1.png";
import vector2 from "../src/img/vector-2.png";
import cross from "../src/img/cross.png";

export default function SortingLocation({ locations, onSelectedItemsChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (item) => {
    setSelectedItems((prevItems) => {
      const newSelectedItems = prevItems.includes(item)
        ? prevItems.filter((i) => i !== item)
        : [...prevItems, item];

      // Invoke the callback with the new selected items
      if (onSelectedItemsChange) {
        onSelectedItemsChange(newSelectedItems);
      }

      return newSelectedItems;
    });
  };

  const renderItem = (itemName) => (
    <button
      onClick={() => toggleItem(itemName)}
      className={`block w-full px-3 py-2 text-sm
       text-black hover:bg-yellow transition-colors duration-150 ease-in-out
        ${
          selectedItems.includes(itemName)
            ? "bg-yellow border border-black"
            : "hover:border hover:border-black"
        } 
          rounded-md flex items-center justify-between mx-auto my-1`}
      role="menuitem"
      button={selectedItems.includes(itemName)}
    >
      <span className="text-left truncate max-w-[120px]">{itemName}</span>
      {selectedItems.includes(itemName) && (
        <Image
          src={cross}
          alt="Remove filter"
          width={12}
          height={12}
          className="ml-2 flex-shrink-0"
        />
      )}
    </button>
  );

  useEffect(() => {
    const clickListener = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", clickListener);
    }

    return () => {
      document.removeEventListener("mousedown", clickListener);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block text-left z-10" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white shadow-custom2 p-2
         w-full flex items-center justify-between
          rounded-lg tracking-wider border-[2.5px]
           border-black transition-all duration-200
           hover:translate-x-0.5 hover:translate-y-0.5
          hover:shadow-hover"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span className="font-medium">Location</span>
        <div className="pl-2">
          <Image
            src={isOpen ? vector1 : vector2}
            alt="Toggle dropdown"
            width={16}
            height={16}
          />
        </div>
      </button>
      {isOpen && (
        <div
          className="absolute left-0 mt-2
         w-36 rounded-md bg-white border-2 border-black
         shadow-custom2 transform transition-all duration-200"
        >
          <div
            className="py-2 px-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <div
              onClick={(event) => event.stopPropagation()}
              className="text-left space-y-1"
            >
              {locations &&
                locations.map((location, index) => renderItem(location))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
