// Locations.js
import React from "react";

export default function Locations({locationName = "Location?"}) {
  return (
    <div className="bg-yellow flex items-center
     px-1 h-5 m-0.5 border-[1px] rounded-md text-sm
     shadow-custom">
      {locationName}
    </div>
  );
}
