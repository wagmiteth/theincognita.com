import CTAButton from "../components/CTAButton";


function token() {
  return (
    <div className="pt-40">
      <h1>Token</h1>
      <p>To be announced. Join Discord to stay updated! 👋</p>
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
  
  export default token;
  