// TableLocationsMobile.js
import React from "react";
import Locations from "./Locations";

export default function TableLocationsMobile({ baseLocations }) {
  const locationsContent = Array.isArray(baseLocations) ? (
    baseLocations.map((location, index) => (
      <Locations key={index} locationName={location.trim()} />
    ))
  ) : (
    <div>No locations available</div>
  );

  return (
    <div className="flex flex-wrap items-center py-1"> 
      <div className="flex flex-wrap gap-1">
        {locationsContent}
      </div>
    </div>
  );
}
