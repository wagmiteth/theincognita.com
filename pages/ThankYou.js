import Head from "next/head";

function ThankYou() {
  return (
    <div>
      <Head>
        <title>Thanks for your application! | The Incognita</title>
      </Head>
      <h1>Great!</h1>
      <p>
        Please join us in{" "}
        <a
          href="https://discord.gg/EyvF2fEqWT"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>{" "}
        👋
      </p>
    </div>
  );
}

export default ThankYou;

