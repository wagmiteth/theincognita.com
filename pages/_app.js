// pages/_app.js

import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../styles/theme"; // adjust path accordingly if your theme is located elsewhere
import "../styles/global.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Adjust the path to match the location of your Navbar component.
import "../fonts/inria-sans.css";

function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS to avoid any potential mismatch between client and server.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <Navbar />
        <main className="content">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
