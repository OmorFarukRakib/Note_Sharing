import React, { useState, useEffect } from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Form, Navbar, Container, Modal, Button } from "react-bootstrap";
import Profile from "./Profile";

import "bootstrap/dist/css/bootstrap.min.css";
//import "./App.css";

const Update = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [edit, setedit] = useState([]);
  //const[username,setUsername] = useState({...props.item.username});
  //const[token,setToken] = useState({...props.item.token});
  const [fullname, setFullname] = useState(props.user.fullname);
  const [email, setEmail] = useState(props.user.email);
  const [department, setDepartment] = useState(props.user.department);
  console.log(props.user.fullname);
  console.log(props.item.token);
  //let items=(props.item);
  //const[token, setToken] = useState("");
  //console.log(props.name);
  //token="TRhhaT3rblNvU2BnwNCbVFP5VBOEPNi6MnZU4wS1CRrqjRIciVvF03KEItNRcmqjV3pX4NnIX41YhVXvIp9Kfs4Ads22IQlS0bXz0BgEiUETu7uMMd8n3I5EeCudNzvB";

  let item = {
    username: props.item.username,
    token: props.item.token,
    fullname: fullname,
    email: email,
    department: department,
  };
  console.log(item);
  //let item = {username:"Kamal",token:"IQgrWG0lfUMF9moIBUSdbb62s2bWp6QsMJrcCk6BeiXS2w6UjuzBJZcfeGPtmT4Z2bbnLi9e3YzuLb6EYmaXbffW17zqr2MSx5314u0QIgmZNCIRiY5xZiQ005HWhUx8"};
  async function update() {
    let result = await fetch(
      "http://bddev.ultra-x.jp/vipnoteApi/update_user_info",
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
    //setUser(result);
    console.log(result);
    //localStorage.setItem('user-info',JSON.stringify(result));
    setShow(false);
    alert("successfully Updated !!!");
    //window.location.href="/Profile";
    window.location.reload();
  }
  useEffect(() => {
    setFullname(fullname);
    setEmail(email);
    setDepartment(department);
    //console.log(fullname);
    //profile();
  }, [fullname, email, department]);

  return (
    <div>
      <Button className="profileButton" variant="primary" onClick={handleShow}>
        Update Profile
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title className="modal-title">
            Update User Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="" controlId="formFullname">
            <Form.Label className="modal-label">Full Name</Form.Label>
            <Form.Control
              className="modal-text"
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder={props.user.fullname}
            />
          </Form.Group>
          <Form.Group className="" controlId="formEmail">
            <Form.Label className="modal-label">Email</Form.Label>
            <Form.Control
              className="modal-text"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={props.user.email}
            />
          </Form.Group>
          <Form.Group className="" controlId="formDepartment">
            <Form.Label className="modal-label">Department</Form.Label>
            <Form.Control
              className="modal-text"
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              placeholder={props.user.department}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="modal-button"
            variant="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button className="modal-button" variant="primary" onClick={update}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Update;
