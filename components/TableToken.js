// TableToken.js
import React from 'react';
import Image from 'next/image';
import BlurP from '../src/img/icon-blur-handdrawn-3.png';
import OpenSeaP from '../src/img/icon-opensea-handdrawn-3.png';

const TokenIcon = ({ src, alt, url, price }) => (
  url && (
    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center gap-1 group">
      <div className="w-11 h-11 bg-teal rounded-full border border-black flex items-center justify-center transition-all group-hover:translate-x-0.5 group-hover:translate-y-0.5 shadow-custom group-hover:shadow-hover">
        {/* Optimize Image component */}
        <Image src={src} alt={alt} width={26} height={26} layout="fixed" loading="lazy" />
      </div>
      {/* Replace div with span since it's not a button and keep it accessible */}
      <span className="flex items-center h-5 bg-white px-1 border rounded-md text-xs transition-all group-hover:translate-x-0.5 group-hover:translate-y-0.5 shadow-custom group-hover:shadow-hover">
        {price}
      </span>
    </a>
  )
);

export default function TableToken({
  openSea,
  floorPrice,
  blur,
  BlurPrice = "2.9Ξ",
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {openSea && <TokenIcon src={OpenSeaP} alt="OpenSea Logo" url={openSea} price={floorPrice} />}
      {blur && <TokenIcon src={BlurP} alt="Blur Logo" url={blur} price={BlurPrice} />}
    </div>
  );
}
