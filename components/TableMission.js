// components/TableMission.js
import React from "react";

export default function TableMission({ mission }) {
  return (
    <div className="flex flex-wrap items-center min-h-[72px] whitespace-normal">
      <p>{mission}</p>
    </div>
  );
}
