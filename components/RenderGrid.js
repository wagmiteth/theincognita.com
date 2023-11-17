// RenderGrid.js
import React from "react";

const RenderGrid = ({ children, additionalClasses = "" }) => (
  <div
    className={`grid grid-cols-6 gap-4 p-3 
   ${additionalClasses}`}
    style={{ gridTemplateColumns: "190px 220px 140px auto auto 56px" }}
  >
    {children}
  </div>
);

export default RenderGrid;
