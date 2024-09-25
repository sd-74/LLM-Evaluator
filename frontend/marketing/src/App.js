import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import Hero from "./components/Hero";
import AboutUs from "./components/aboutUs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Slideshow />
      
    </div>
  );
}

export default App;
