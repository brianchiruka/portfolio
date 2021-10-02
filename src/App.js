import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import { Container, ThemeProvider } from "@material-ui/core";
import Work from "./pages/work/Work";
import Resume from "./pages/resume/Resume";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import theme from "./theme";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import SideLinks from "./components/menu/SideLinks";

function App() {
  const [sideNav, setSideNav] = useState(false);

  function sideNavigation() {
    if (window.scrollY >= 500) {
      setSideNav(true);
    } else {
      setSideNav(false);
    }
  }

  window.addEventListener("scroll", sideNavigation);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        {sideNav && <SideLinks />}
        <Container maxWidth="lg">
          <div style={{ marginLeft: 20, marginRight: 20, overflow: "hidden" }} id="home">
            <Navbar />
            <Hero />
            <Work />
            <Resume />
            <About />
            <Contact />
            <Footer />
          </div>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
