import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import { Container, ThemeProvider } from "@material-ui/core";
import Work from "./pages/work/Work";
import Resume from "./pages/resume/Resume";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import theme from "./theme";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" style={{ overflow: "hidden" }} id="home">
        <Router>
          <Navbar />
          <Hero />
          <Work />
          <Resume />
          <About />
          <Contact />
          <Footer />
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
