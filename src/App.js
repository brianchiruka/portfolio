import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Work from "./pages/work/Work";
import Resume from "./pages/resume/Resume";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  return (
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
      </Container>
    </Router>
  );
}

export default App;
