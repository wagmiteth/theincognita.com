// TableSocial.js
import React from 'react';
import Image from 'next/image';
import XLogoP from '../src/img/icon-x-21.png';
import DiscordP from '../src/img/icon-discord.png';
import LinkP from '../src/img/icon-link-3.png';

const SocialIcon = ({ src, alt, followers, url }) => (
  url && (
    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex flex-col items-center gap-1 group">
      <div className="w-11 h-11 bg-green rounded-full border border-black flex items-center justify-center transition-all group-hover:translate-x-0.5 group-hover:translate-y-0.5 shadow-custom group-hover:shadow-hover">
        {/* Optimize Image component */}
        <Image src={src} alt={alt} width={26} height={26} layout="fixed" loading="lazy" />
      </div>
      {/* Replace div with span since it's not a button and keep it accessible */}
      <span className="flex items-center h-5 bg-white px-1 border rounded-md text-xs transition-all group-hover:translate-x-0.5 group-hover:translate-y-0.5 shadow-custom group-hover:shadow-hover">
        {followers}
      </span>
    </a>
  )
);

export default function TableSocial({
  linkUrl,
  xUrl,
  discordUrl,
  LinkFollowers = "URL",
  xFollowers,
  discordMembers,
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {linkUrl && <SocialIcon src={LinkP} alt="Link Logo" followers={LinkFollowers} url={linkUrl} />}
      {xUrl && <SocialIcon src={XLogoP} alt="X Logo" followers={xFollowers} url={xUrl} />}
      {discordUrl && <SocialIcon src={DiscordP} alt="Discord Logo" followers={discordMembers} url={discordUrl} />}
    </div>
  );
}
