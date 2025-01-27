// TableLocations.js
import React from "react";
import Locations from "./Locations";

export default function TableLocations({ baseLocations }) {
  // Check if baseLocations is an array before mapping
  const locationsContent = Array.isArray(baseLocations) ? (
    baseLocations.map((location, index) => (
      <Locations key={index} locationName={location.trim()} />
    ))
  ) : (
    <div>No locations available</div> // Or any other fallback content
  );

  return (
    <div className="flex flex-wrap items-center min-h-[72px]">
      <div className="flex flex-wrap gap-1 items-start">{locationsContent}</div>
    </div>
  );
}
