// components/TableHomepageMobile.js
import React from "react";

export default function TableHomepageMobile() {
  return (
    <div className="lg:hidden">
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '200px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Redirecting to NSNodes...</h2>
          <p>Visit <a href="https://nsnodes.com/">nsnodes.com</a> for the full Network States dashboard.</p>
        </div>
      </div>
    </div>
  );
}