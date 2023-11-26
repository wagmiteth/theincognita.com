import Head from "next/head";
import CTAButton from "../components/CTAButton";


function Roadmap() {
  return (
    <div>
      <Head>
        <title>How we grow as DAO | The Incognita</title>
      </Head>
      <h1>Contact</h1>
      <p>
Join us in Discord and reach out there!        </p>
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

export default Roadmap;
