// SortingTemplate.js
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import vector1 from "../src/img/vector-1.png";
import vector2 from "../src/img/vector-2.png";
import cross from "../src/img/cross.png";

export default function SortingTemplate() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleItem = (item, event) => {
    event.preventDefault();
    setSelectedItems((prevItems) =>
      prevItems.includes(item)
        ? prevItems.filter((i) => i !== item)
        : [...prevItems, item]
    );
  };

  const renderItem = (itemName) => (
    <a
      href="#"
      onClick={(event) => toggleItem(itemName, event)}
      className={`block px-4 py-2 mx-2 my-2 text-sm
       text-black hover:bg-hoverGray
        ${selectedItems.includes(itemName) ? 
          'bg-hoverGray border-2 border-black' : ''} 
          rounded-md flex justify-between items-center`}
      role="menuitem"
    >
      {itemName}
      {selectedItems.includes(itemName) && (
        <Image src={cross} alt="Cross icon" width={16} height={16} />
      )}
    </a>
  );

  useEffect(() => {
    const clickListener = (event) => {
      if (dropdownRef.current && 
        !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", clickListener);
    }

    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, [isOpen]);

  return (
    <div className="relative inline-block
     text-left z-50" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white shadow-custom2 p-2
         w-full flex items-center justify-between
          rounded-lg tracking-wider border-[2.5px]
           border-black transition-colors duration-200
           transition-transform transition-shadow duration-200 
           transform hover:translate-x-0.5 hover:translate-y-0.5
          hover:shadow-hover"
      >
        Dropdown
        <div className="pl-2">
          <Image src={isOpen ? vector1 : vector2}
           alt="Dropdown icon" width={16} height={16} />
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2
         w-36 rounded-md bg-white border-2 border-black">
          <div className="py-1" role="menu"
           aria-orientation="vertical" aria-labelledby="options-menu">
            <div onClick={(event) => event.stopPropagation()}>
              {/* Your dropdown items here */}
              {renderItem('Item 1')}
              {renderItem('Item 2')}
              {renderItem('Item 3')}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
