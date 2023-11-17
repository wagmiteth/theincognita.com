// components/Footer.js

const Footer = () => {
    return (
      <footer className="mt-8">
                <hr className="w-full p-2 border-t-2 border-black" /> {/* Add this line */}
        <div className=" text-black  text-center items-center justify-center p-4">
        <p>theincognita.com</p>
        <br />
        <p>Made with ❤️ by the Incognita community</p>
        <p>Help us at <a href="https://github.com/wagmiteth/theIncognita.github.io "target="_blank" rel="noopener noreferrer">Github</a> </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  