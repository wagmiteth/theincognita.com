import Head from 'next/head';

import CTAButton from "../components/CTAButton";


function dao() {
  return (
    <div className="pt-40">
      <Head>
        <title>DAO | The Incognita</title>
      </Head>
      <h1>The Incognita DAO</h1>
            <p>
              The incognita is built by the community. If you believe in our
              vision to build the most accurate dashboard for aspiring Network
              States, you should join us.
              <br /><br />
              Say GM! in our Discord and start building with us.
        </p>
      <div className="pt-10">
      <a href="https://discord.gg/EyvF2fEqWT" target="_blank" rel="noopener noreferrer">
                <CTAButton bgColor="var(--color-white)">
                  <h2>Join Discord</h2>
                </CTAButton>
              </a>
      </div>
              
    </div>
  );
}
  
  export default dao;
  
