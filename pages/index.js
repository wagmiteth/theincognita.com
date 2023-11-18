// index.js
import Head from 'next/head';

import React, { useState } from "react";
import CTAButton from "../components/CTAButton";
import TableHomepage from "../components/TableHomepage";
import Image from "next/image";
import BlobShape from "../src/img/blob-shape-2.png";
import Arrow from "../src/img/arrow-11.png";
import NewsItemYellow from "../components/NewsItemYellow";
import NewsItemGreen from "../components/NewsItemGreen";
import PopupForm from "../components/PopupForm"; // Import the PopupForm component

const Home = () => {
  // State to manage if the PopupForm is open or not
  const [isPopupOpen, setPopupOpen] = useState(false);

  // Function to open the PopupForm
  const handleOpenPopup = () => {
    setPopupOpen(true);
  };

  // Function to close the PopupForm
  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  return (
    <div>
      <Head>
        <title>The Incognita | - Open source dasboard for Network States</title>
      </Head>
      <main>
        <div className="upper-col">
          <div className="upper-left-col">
            <h1 class="text-4xl md:text-6xl lg:text-8xl">
              OPEN SOURCE DASBOARD FOR ASPIRING NETWORK STATES
            </h1>
            <div className="cta-btns">
            <CTAButton onClick={handleOpenPopup}>
          <h2 className="text-white">Get listed</h2>
        </CTAButton>
              <a href="https://discord.gg/EyvF2fEqWT" target="_blank" rel="noopener noreferrer">
                <CTAButton bgColor="var(--color-white)">
                  <h2>Join Discord</h2>
                </CTAButton>
              </a>
            </div>
            <div className="arrow">
              <Image
                src={Arrow}
                alt="Hand drawn arrow"
                width={100} // Provide width and height
                height={100}
              />
            </div>
          </div>
          <div className="upper-right-col">
            <div className="blobShape">
              <Image
                src={BlobShape}
                alt="Blob-shape"
                width={234} // Provide width and height
                height={257}
              />
            </div>
          </div>
        </div>
        <div className="lower-col">
          <div className="lower-left-col flex items-center justify-center">
            <p>
              The Incognita DAO are building a open 
              source database for web3 communities. 
               Search and find your future Network
              state or join the DAO to help us scale the concept.
              <br />
              <br />
              We are currently mapping 24 nodes. 
              <a href="https://discord.gg/EyvF2fEqWT"> Subscribe</a> for updates or apply to get listed.
            </p>
          </div>
          <div className="lower-middle-col"></div>
          <div className="lower-right-col">
            <NewsItemYellow />
            <NewsItemGreen/>
          </div>
        </div>
        <TableHomepage />
      </main>
      <PopupForm isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
};

export default Home;
