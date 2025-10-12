// index.js
import Head from "next/head";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Redirect to nsnodes.com
    window.location.replace('https://nsnodes.com/');
  }, []);

  return (
    <div>
      <Head>
        <title>Redirecting to NSNodes</title>
        <meta httpEquiv="refresh" content="0;url=https://nsnodes.com/" />
        <link rel="canonical" href="https://nsnodes.com/" />
      </Head>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Redirecting to NSNodes...</h1>
          <p>If you are not redirected automatically, <a href="https://nsnodes.com/">click here</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
