import "./customStyle.css";

import Header from "./Header";
import MainBody from "./MainBody";
const App = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <Header />
        </div>
        <div className="profile-content-wrapper">
          <MainBody />
        </div>
        <div className="footer">
          <p>Ultra-X Asia Pacific</p>
        </div>
      </div>
    </>
  );
};

export default App;
