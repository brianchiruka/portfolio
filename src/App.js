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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" style={{ overflow: "hidden" }}>
        <Navbar />
        <Hero />
        <Work id="work" />
        <Resume />
        <About />
        <Contact />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
