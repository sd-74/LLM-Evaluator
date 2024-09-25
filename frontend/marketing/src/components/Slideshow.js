import "../styles/Slideshow.css";
import logo from "../assets/png/logo-no-background.png";

function Slideshow() {
  return (
    <div className="slideshow-container">
      <div className="scroll-container">
        <img src={logo} alt="excel" />
        <img src={logo} alt="microsoft" />
        <img src={logo} alt="salesforce" />
        <img src={logo} alt="box" />
        <img src={logo} alt="github" />
        <img src={logo} alt="notion" />
        <img src={logo} alt="sharepoint" />
        <img src={logo} alt="canvas" />
        <img src={logo} alt="gmail" />
        <img src={logo} alt="onenote" />
        <img src={logo} alt="slack" />
      </div>
      <div className="scroll-container-other">
        <img src={logo} alt="excel" />
        <img src={logo} alt="microsoft" />
        <img src={logo} alt="salesforce" />
        <img src={logo} alt="box" />
        <img src={logo} alt="github" />
        <img src={logo} alt="notion" />
        <img src={logo} alt="sharepoint" />
        <img src={logo} alt="canvas" />
        <img src={logo} alt="gmail" />
        <img src={logo} alt="onenote" />
        <img src={logo} alt="slack" />
      </div>
    </div>
  );
}

export default Slideshow;
