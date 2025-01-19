// Tags.js
import React from "react";

export default function Tags({ tagsName = "tags?" }) {
  return (
    <div
      className="bg-purple flex items-center
     px-1 h-5 m-0.5 border-[1px] rounded-md text-sm
     shadow-custom"
    >
      {tagsName}
    </div>
  );
}
