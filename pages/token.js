import CTAButton from "../components/CTAButton";
import Head from "next/head";

function token() {
  return (
    <div className="pt-40">
      <Head>
        <title>Token | The Incognita</title>
      </Head>
      <h1>Token</h1>
      <p>To be announced. Join Our Discord to stay updated! 👋</p>
      <div className="pt-10">
        <a
          href="https://discord.gg/EyvF2fEqWT"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CTAButton bgColor="var(--color-white)">
            <h2>Join Our Discord</h2>
          </CTAButton>
        </a>
      </div>
    </div>
  );
}

export default token;

