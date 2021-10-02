import React, { useState, useEffect } from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  Form,
  Navbar,
  Container,
  Modal,
  Button,
  Row,
  Col,
  Card,
  ListGroupItem,
  ListGroup,
  Img,
} from "react-bootstrap";
import Update from "./Update";
import ChangePassword from "./ChangePassword";
//import { useLocation } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

const Profile = (props) => {
  console.log(props.userAuthInfo);
  //const location = useLocation();
  //console.log(location.state); // it is equal to yourData
  //const [username, setUsername] = useState({ ...props.username });
  const [username, setUsername] = useState({ ...props.username });
  //const[token,setToken] = useState({...props.user.token);
  const [user, setUser] = useState([]);
  //const[token, setToken] = useState("");
  console.log(username);

  //let item = (location.state);
  let item = {
    username: `${props.userAuthInfo.userName}`,
    token: `${props.userAuthInfo.token}`,
  };
  async function profile() {
    let result = await fetch(
      "http://bddev.ultra-x.jp/vipnoteApi/get_user_info",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result.json();
    setUser(result);
    console.log(result);
    // localStorage.setItem("user-info", JSON.stringify(result));
  }
  useEffect(() => {
    profile();
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <div className="">
            <Card style={{ width: "30rem" }}>
              <div className="">
                <div className="img1">
                  <Card.Img variant="top" height="150px" src="user.png" />
                </div>
              </div>

              <Card.Body>
                <Card.Title className="userInfo">User Information</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
              <ListGroup className="userInfoList">
                <ListGroupItem>
                  <span className="profilelist1">User Id:</span>
                  <span className="profilelist"> {user.user_id}</span>
                </ListGroupItem>
                <ListGroupItem>
                  <span className="profilelist1">Name:</span>{" "}
                  <span className="profilelist">{user.username}</span>
                </ListGroupItem>
                <ListGroupItem>
                  <span className="profilelist1">FullName:</span>
                  <span className="profilelist">{user.fullname}</span>{" "}
                </ListGroupItem>
                <ListGroupItem>
                  <span className="profilelist1">Email: </span>
                  <span className="profilelist">{user.email}</span>
                </ListGroupItem>
                <ListGroupItem>
                  <span className="profilelist1">Department:</span>{" "}
                  <span className="profilelist">{user.department}</span>
                </ListGroupItem>
              </ListGroup>
              <div className="extra1"></div>
              <Update user={user} item={item} />
              <div className="extra2"></div>
              <ChangePassword item={item} />
              <div className="extra3"></div>
            </Card>
          </div>
        </Col>
        {/* <Col xs={6}>
    <div className="bodyBox">
    <Button className="boxButton" variant="primary">Note</Button>
    <Button className="boxButton"variant="primary">Product</Button>
    <br/>
    <Button className="boxButton"variant="primary">Event</Button>
    <Button className="boxButton"variant="primary">Company</Button>
    </div>

    </Col>
    <Col></Col> */}
      </Row>
    </div>
  );
};
export default Profile;
