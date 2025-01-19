// NewsItemGreen.js
import React from "react";
import Image from "next/image";
import Timer from "../src/img/tdesign-time-5.png";

const NewsItemGreen = ({ headerColor = "var(--color-green)" }) => {
    return (
    <div className="container hidden sm:block">
      <div className="header" style={{ backgroundColor: headerColor }}>
        <h3>NEWS</h3>{" "}
      </div>
      <div className="container-bottom">
        <div className="date">
          <Image
            src={Timer}
            alt="Hand drawn arrow"
            width={23} // Provide width and height
            height={21}
          />
          <h5>21 Jan 2025</h5>
        </div>
        <div className="title">
          <h3>Network State Writing Cohort</h3>
        </div>
        <div className="description">
          <span>
          Are you passionate about exploring and writing on network state-related topics?  Join ​Network State Writers Cohort!
          </span>
          <div><a href="https://lu.ma/ltp7r3iu"target="_blank" rel="noopener noreferrer"> Read more</a></div>
        </div>
      </div>

      <style jsx>{`
     .container {
        border: 2px solid black;
        margin-left: 40px;
        border-radius: 6px;
        background-color: var(--color-white);
        max-width: 250px;
        min-width: 222px;
        font-family: "Bebas Neue", Helvetica;
        transition: box-shadow 0.3s ease, transform 0.3s ease; // for smooth transition
        box-shadow: 3px 2px 0px 2px black; // solid 4px shadow to the right
      }
      
      .container:hover {
        box-shadow: 1px 0px 0px black; // reduce the shadow to give pressed effect
        transform: translateX(3px) translateY(3px);


      }
      

        .header {
          background-color: var(--color-yellow);
          border-radius: 4px 4px 0px 0px;
          border-bottom: 2px solid black;
          padding: 10px 16px 6px 16px;
          text-align: left;

        }

        .container-bottom{
            margin: 16px 26px;
        }

        .date {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .title {
          margin-top: 8px;
        }

        .description {
          margin-top: 4px;
        }

        .link {
          color: blue;
          text-decoration: underline;
          cursor: pointer;
        }

        a{
            font-family: 'Inria Sans', sans-serif;
            color: var(--color-purple);
            font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default NewsItemGreen;
