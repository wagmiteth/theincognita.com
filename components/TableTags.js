// TableTags.js
import React from "react";
import Tags from "./Tags";

export default function TableTags({ baseTags }) {  // Changed from basetags to baseTags
  const tagsContent = Array.isArray(baseTags) ? (
    baseTags.map((tag, index) => <Tags key={index} tagsName={tag.trim()} />)
  ) : (
    <div>No tags available</div>
  );

  return (
    <div className="flex flex-wrap items-center min-h-[72px]">
      <div className="flex flex-wrap gap-1">{tagsContent}</div>
    </div>
  );
}
