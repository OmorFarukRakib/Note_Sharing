import "./customStyle.css";

import Header from "./Header";
import MainBody from "./MainBody";
import Footer from "./Footer";
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
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
