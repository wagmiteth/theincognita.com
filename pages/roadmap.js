import TodoList from "../components/TodoList";
import CTAButton from "../components/CTAButton";
import Head from "next/head";

function roadmap() {
  return (
    <div className="pt-40">
      <Head>
        <title>Roadmap | How we grow as DAO | The Incognita</title>
      </Head>
      <h1>Roadmap</h1>
      <TodoList />
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

export default roadmap;

