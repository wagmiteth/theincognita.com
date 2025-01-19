// TableTagsMobile.js
import React from "react";
import Tags from "./Tags";

export default function TableTagsMobile({ baseTags }) {
  const tagsContent = Array.isArray(baseTags) ? (
    baseTags.map((tag, index) => <Tags key={index} tagsName={tag.trim()} />)
  ) : (
    <div>No tags available</div>
  );

  return (
    <div className="flex flex-wrap items-center py-1">
      <div className="flex flex-wrap gap-1">{tagsContent}</div>
    </div>
  );
}
