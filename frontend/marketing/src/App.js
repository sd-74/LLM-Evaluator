import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import Hero from "./components/Hero";
function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Hero />
      <Slideshow />
    </div>
  );
}

export default App;
