import { Button } from "@material-ui/core";
import "./customStyle.css";

const Header = () => {
  return (
    <>
      <div className="title">VIPNote</div>
      <div className="logout">
        <Button
          variant="contained"
          color="red"
          style={{
            maxHeight: "4vh",
            width: "4rem",
            maxWidth: "4rem",
            fontSize: "0.7em",
            color: "white",
            background: "#4e4f50",
            border: "1px solid #525253",
            borderRadius: "8px",
          }}
        >
          <p>Logout</p>
        </Button>
      </div>
    </>
  );
};

export default Header;
