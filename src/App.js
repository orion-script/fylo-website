import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Productive from "./components/Productive";
import Gallery from "./components/Gallery";
import EarlyAccess from "./components/EarlyAccess";
import Footer from "./components/Footer";
import Collection from "./components/Collection";

function App() {
  return (
    <Router>
      <Navbar />
      <Intro />
      <Collection />
      <Productive />
      <Gallery />
      <EarlyAccess />
      <Footer />
    </Router>
  );
}

export default App;
