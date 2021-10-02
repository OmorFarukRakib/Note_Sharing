import { useState, useEffect } from "react";
import Header from "./Header";
import MainBody from "./MainBody";
import Footer from "./Footer";
import Login from "./Login";
import WelcomeMessage from "./Components/ParticleBackground/WelcomeMessage";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import "./customStyle.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logoshow, setLogoShow] = useState(false);

  const [userAuthInfo, setUserAuthInfo] = useState({});
  useEffect(() => {
    setIsLoggedIn(false);
    if (localStorage.getItem("user-info")) {
      let LocalUserInfo = localStorage.getItem("user-info");
      LocalUserInfo = JSON.parse(LocalUserInfo);
      console.log(LocalUserInfo.username);
      console.log(LocalUserInfo.token);
      console.log(LocalUserInfo.user_level);
      if (LocalUserInfo.token) {
        setUserAuthInfo({
          userName: LocalUserInfo.username,
          token: LocalUserInfo.token,
          userLevel: LocalUserInfo.user_level,
        });
        setIsLoggedIn(true);
        setLogoShow(true);
      }
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLogoShow(false);
    }, 5000);
  }, [logoshow]);

  const ifSuccess = (username, token, user_level) => {
    setUserAuthInfo({
      userName: username,
      token: token,
      userLevel: user_level,
    });
    setIsLoggedIn(true);
    setLogoShow(true);
  };

  const isLoggedOut = () => {
    let localAuthInfo = {
      username: null,
      token: null,
      user_level: null,
    };
    localStorage.setItem("user-info", JSON.stringify(localAuthInfo));
    setUserAuthInfo({});
    setIsLoggedIn(false);
    setLogoShow(false);
  };
  return (
    <>
      {logoshow && <WelcomeMessage />}
      {!logoshow && (
        <>
          {isLoggedIn === false ? (
            <div>
              {" "}
              <Login ifSuccess={ifSuccess} />{" "}
            </div>
          ) : (
            <div className="body-container">
              <div className="header">
                <Header isLoggedOut={isLoggedOut} />
              </div>

              <div className="profile-content-wrapper">
                <MainBody userAuthInfo={userAuthInfo} />
              </div>
              <div className="footer">
                <Footer />
              </div>
            </div>
          )}{" "}
        </>
      )}
    </>
  );
};

export default App;
