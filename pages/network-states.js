// network-states.js
import React, { useState } from 'react';
import CTAButton from "../components/CTAButton";
import TableHomepage from "../components/TableHomepage";

function NetworkStates() {
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="pt-40">
      <h1>Network States</h1>
            <p>
            A network state represents a tight digital community possessing the ability for united action. This entity engages in global fundraising efforts to secure physical territory, with the ultimate goal of attaining diplomatic acknowledgment from established states. Here is a comprehensive list of all Network States, complete with detailed information, relevant links, and accompanying statistics.
              <br /><br />
              We are currently mapping 24 nodes. 
              <a href="https://discord.gg/EyvF2fEqWT"> Subscribe</a> for updates or apply to get listed.
        </p>
        <TableHomepage />

      <div className="pt-10">
      <a href="https://discord.gg/EyvF2fEqWT" target="_blank" rel="noopener noreferrer">
                <CTAButton bgColor="var(--color-white)">
                  <h2>Join Discord</h2>
                </CTAButton>
              </a>
      </div>
      <h2>The Network State book Balaji Srinivasan</h2>
      <p>
      Starting a new country according to Balaji in the concepts outlined on The Network State book involves the establishment and development of what&apos;s called a Network State A network state is a highly aligned online community with a capacity for collective action that crowdfunds territory around the world and eventually gains diplomatic recognition from pre-existing states. Here&apos;s a more detailed breakdown of the stages and characteristics:        <a href= "https://thenetworkstate.com/"target="_blank"> here.</a>
      </p>
      <h2>How to start a new country?</h2>
      <p>
      Starting a new country according to Balaji in the concepts outlined on The Network State book involves the establishment and development of what&apos;s called a Network State A network state is a highly aligned online community with a capacity for collective action that crowdfunds territory around the world and eventually gains diplomatic recognition from pre-existing states. Here&apos;s a more detailed breakdown of the stages and characteristics:      </p>

    <ol>
        <li><strong>1. Startup Society:</strong> The journey begins by creating a startup society. This society can be thought of as a small scale version of the desired final state. The startup society seeks to scale into a network state that achieves diplomatic recognition from a pre-existing government, akin to how a startup company scales into a public company and achieves recognition from a pre-existing exchange like NASDAQ.</li>
        <li><strong>2. Network Union:</strong> The startup society transitions into a network union when it becomes a digital community capable of collective action.</li>
        <li><strong>3. Network Archipelago:</strong> The network union then transforms into a network archipelago, which manifests the collective action in the real world. The community crowdfunds physical properties around the world and connects them via the internet.</li>
        <li><strong>4. Network State:</strong> Finally, an impressive network archipelago can achieve diplomatic recognition from an existing government, thereby becoming a true network state.</li>
    </ol>
<br/>
      <a href="https://theincognita.com/learn/learn-how-to-establish-a-network-state" target="_blank"> Full article here.</a>

      <h2>FAQ</h2>
      <div>
     <button onClick={() => setIsOpen1(!isOpen1)} className="toggle-btn mb-4 bg-purple text-white font-bold shadow-custom2 p-2
          rounded-lg tracking-wider border-[2.5px] border-black border-solid transition-colors duration-200
           transition-transform transition-shadow duration-200 
           transform hover:translate-x-0.5 hover:translate-y-0.5
          hover:shadow-hover">
        What is a network state?
    </button>
      {isOpen1 && (
        <div className="toggle-content">
          <p>
          A network state is an online community with shared values and collective action capacity. It begins as a startup society, scales into a network union, and evolves into a network archipelago by crowdfunding physical territories. Once it gains diplomatic recognition from an existing government, it becomes a true network state, complete with its own integrated cryptocurrency.            <a href="https://theincognita.com/learn/learn-how-to-establish-a-network-state" target="_blank" rel="noopener noreferrer"> Full article here</a>
            </p>
          </div>
        )}
      </div>

      <div>
      <button onClick={() => setIsOpen2(!isOpen2)} className="toggle-btn mb-4 bg-purple text-white font-bold shadow-custom2 p-2
          rounded-lg tracking-wider border-[2.5px] border-black border-solid transition-colors duration-200
           transition-transform transition-shadow duration-200 
           transform hover:translate-x-0.5 hover:translate-y-0.5
          hover:shadow-hover">
Who is Balaji Srinivasan?
    </button>
      {isOpen2 && (
        <div className="toggle-content">
          <p>
          Balaji S. Srinivasan is a renowned technologist, entrepreneur, and investor known for his work in various domains, including cryptocurrencies, health technology, and theoretical frameworks for digital societies.            </p>
          </div>
        )}
      </div>

      <div>
      <button onClick={() => setIsOpen3(!isOpen3)} className="toggle-btn mb-4 bg-purple text-white font-bold shadow-custom2 p-2
          rounded-lg tracking-wider border-[2.5px] border-black border-solid transition-colors duration-200
           transition-transform transition-shadow duration-200 
           transform hover:translate-x-0.5 hover:translate-y-0.5
          hover:shadow-hover">
The Network State PDF
    </button>
      {isOpen3 && (
        <div className="toggle-content">
          <p>
          The book can be downloaded for free <a href="https://book.thenetworkstate.com/tns.pdf">here</a> or be read online at <a href="https://thenetworkstate.com/">https://thenetworkstate.com/</a>.            </p>
          </div>
        )}
      </div>

      <div>
      <button onClick={() => setIsOpen4(!isOpen4)} className="toggle-btn mb-4 bg-purple text-white font-bold shadow-custom2 p-2
          rounded-lg tracking-wider border-[2.5px] border-black border-solid transition-colors duration-200
           transition-transform transition-shadow duration-200 
           transform hover:translate-x-0.5 hover:translate-y-0.5
          hover:shadow-hover">
The network state audiobook
    </button>
      {isOpen4 && (
        <div className="toggle-content">
          <p>
          Right now there is no audiobook of The Network State. Are you up for recording it? <a href="https://discord.gg/EyvF2fEqWT">Join The Incognita DAO</a>.            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NetworkStates;