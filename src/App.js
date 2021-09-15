import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import { Container, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Work from "./pages/work/Work";
import Resume from "./pages/resume/Resume";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import theme from "./theme";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container maxWidth="lg">
          <Navbar />
          {/* <Route exact path="home"> */}
          <Hero />
          {/* </Route> */}
          <Work />
          <Resume />
          <About />
          <Contact />
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
