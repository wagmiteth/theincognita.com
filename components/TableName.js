// components/TableName.js
import React from "react";
import Image from 'next/image';

export default function TableName({ name, logo, linkUrl }) {
  return (
    <div className="container mx-auto">
      <div className="flex items-center gap-3 h-[72px]">
        {/* Wrap both Image and Name within the anchor tag */}
        <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
          {/* Left Column (Logo) */}
          {/* Commenting out the logo section */}
           <div className="flex-none w-11 h-11 relative">
            <div className="absolute inset-0 border-2 border-black rounded-full">
              <Image
                src={logo || '/path/to/default/image.png'}
                alt="Logo"
                layout="fill" // Use layout fill for responsive image size within the container
                objectFit="cover" // Cover to ensure the image covers the available space without stretching
                unoptimized // Add this prop to disable optimization
              />
            </div>
          </div>
          {/* Right Column (Heading) */}
          <div className="flex-grow overflow-hidden"> {/* Changed to overflow-hidden to prevent text spillover */}
            <h3>{name}</h3>
          </div>
        </a>
      </div>
    </div>
  );
}
