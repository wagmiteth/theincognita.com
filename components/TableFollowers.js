// TableFollowers.js
import React from "react";

const FollowersIcon = ({ followers }) => (
  <div className="inline-flex flex-col items-center gap-1 group">
    <div className="w-11 h-11 bg-teal rounded-full border border-black flex items-center justify-center transition-all group-hover:translate-x-0.5 group-hover:translate-y-0.5 shadow-custom group-hover:shadow-hover">
      <span className="text-lg font-bold">{followers}</span>
    </div>
    <span className="flex items-center h-5 bg-white px-1 border rounded-md text-xs transition-all group-hover:translate-x-0.5 group-hover:translate-y-0.5 shadow-custom group-hover:shadow-hover">
      Followers
    </span>
  </div>
);

export default function TableFollowers({ followers = "0K" }) {
  return (
    <div className="flex flex-col lg:flex-row gap-2">
      <FollowersIcon followers={followers} />
    </div>
  );
}
