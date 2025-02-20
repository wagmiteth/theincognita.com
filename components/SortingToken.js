// components/SortingFollowers.js
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import vector1 from "../src/img/vector-1.png";
import vector2 from "../src/img/vector-2.png";
import cross from "../src/img/cross.png";

export default function SortingFollowers({ onSelectedItemsChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedItems, setSelectedItems] = useState([]);

  // Toggle the selection of items and invoke the callback
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
      className={`block px-4 py-2 mx-2 my-2 text-sm
       text-black hover:bg-teal
        ${selectedItems.includes(itemName) ? 
          'bg-teal border-2 border-black' : ''} 
          rounded-md flex justify-between items-center`}
      role="menuitem"
      button={selectedItems.includes(itemName)}
    >
      {itemName}
      {selectedItems.includes(itemName) && (
        <Image src={cross} alt="Remove filter" width={16} height={16} />
      )}
    </button>
  );

  // Detect clicks outside of the dropdown to close it
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
    <div className="relative inline-block text-left z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white shadow-custom2 p-2
         w-full flex items-center justify-between
          rounded-lg tracking-wider border-[2.5px]
           border-black transition-colors duration-200
           transition-transform transition-shadow duration-200 
           transform hover:translate-x-0.5 hover:translate-y-0.5
          hover:shadow-hover"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        Followers
        <div className="pl-2">
          <Image src={isOpen ? vector1 : vector2}
           alt="Toggle dropdown" width={16} height={16} />
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2
         w-36 rounded-md bg-white border-2 border-black">
          <div className="py-1" role="menu"
           aria-orientation="vertical" aria-labelledby="options-menu">
            <div onClick={(event) => event.stopPropagation()}>
              {renderItem('OpenSea')}
              {renderItem('Blur')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
