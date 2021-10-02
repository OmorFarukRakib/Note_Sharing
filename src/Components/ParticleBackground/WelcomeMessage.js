import "./WelcomeMessage.css";
import Logo from "./svg";
import { useState, useEffect } from "react";
import ParticleBackground from "./ParticalBackground";
function WelcomeMessage() {
  const [logoshow, setLogoShow] = useState(true);
  const getlogosize = () => {
    const logo = document.querySelectorAll("#ultra-logo path");
    console.log(logo);
    for (let i = 0; i < logo.length; i++) {
      console.log(`letter ${i} -> ${logo[i].getTotalLength()}`);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLogoShow(false);
    }, 4500);
  }, []);

  return (
    <>
      {/* {logoshow && ( */}
      <>
        <div className="logo-background">
          <ParticleBackground />
          <Logo />
          <div className="logo-sub-name"> Asia Pacific </div>
        </div>
      </>
      {/* )} */}
      {/* {!logoshow && <div className="App">Main Page</div>} */}
    </>
  );
}
export default WelcomeMessage;
