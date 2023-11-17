// components/TableCTA.js
import React from 'react';

export default function TableCTA({ application }) { // Accept application as a prop
  return (
    <a href={application} target="_blank" rel="noopener noreferrer" className="flex items-center min-h-[72px]">
      <button 
        type="button"
        aria-label="Join the community"
        className="text-black px-2 py-1 border-[2.5px] rounded-md 
        transition-transform transition-shadow duration-200 
        transform hover:translate-x-0.5 hover:translate-y-0.5
        shadow-custom hover:shadow-hover"
      >
        <h3>Join</h3>
      </button>
    </a>
  );
}
