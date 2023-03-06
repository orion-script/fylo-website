import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Productive from "./components/Productive";
import Gallery from "./components/Gallery";
import EarlyAccess from "./components/EarlyAccess";
import Footer from "./components/Footer";
import Collection from "./components/Collection";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Collection />
      <Productive />
      <Gallery />
      <EarlyAccess />
      <Footer />
    </div>
  );
}

export default App;
