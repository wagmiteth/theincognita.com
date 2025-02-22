// components/Footer.js

import React from "react";
import Image from "next/image";
import XLogo from "../src/img/icon-x-21.png"; // Make sure this path matches your image location
import DiscordLogo from "../src/img/icon-discord.png"; // Make sure this path matches your image location

const Footer = () => {
  return (
    <footer className="mt-8">
      <hr className="w-full p-2 border-t-2 border-black" />{" "}
      {/* Add this line */}
      <div className="text-black text-center items-center justify-center p-4">
        <p>Made with ❤️ by The Incognita community</p>
        <p>
          Help us at{" "}
          <a
            href="https://github.com/wagmiteth/theincognita.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </p>
        <br />
        <p>theincognita.com</p>
        <div className="flex justify-center gap-4 my-4">
          <a
            href="https://x.com/incognitaeth"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Image src={XLogo} alt="X (Twitter) Logo" width={20} height={20} />
          </a>
          <a
            href="https://discord.gg/EyvF2fEqWT"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <Image
              src={DiscordLogo}
              alt="Discord Logo"
              width={20}
              height={20}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
