import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./modalStyle.css";
import Multiselect from "multiselect-react-dropdown";

export const EditModalForm = (props) => {
  const [editedProductId, setEditedProductId] = useState("");
  const [editedProductName, setEditedProductName] = useState("");
  const [editedProductUxSales, setEditedProductUxSales] = useState("");
  const [editedProductUxtech, setEditedProductUxtech] = useState("");

  useEffect(() => {
    console.log("inside UseEffect");
    setEditedProductId(props.rowDataForEdit.product_id);
    setEditedProductName(props.rowDataForEdit.name);
    setEditedProductUxSales(props.rowDataForEdit.ux_sales);
    setEditedProductUxtech(props.rowDataForEdit.ux_tech);
    console.log(editedProductName);
    console.log(editedProductUxSales);
  }, [props]);

  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedList);
    setEditedProductUxSales(
      selectedList.toString().replace(/,(?=[^\s])/g, ", ")
    );
  };
  const onRemove = (selectedList, removedItem) => {
    console.log(selectedList);
    setEditedProductUxSales(
      selectedList.toString().replace(/,(?=[^\s])/g, ", ")
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("This are all the data");
    console.log(editedProductId);
    console.log(editedProductName);
    console.log(editedProductUxSales);
    console.log(editedProductUxtech);
    props.handleTableDataEdit(
      editedProductId,
      editedProductName,
      editedProductUxSales,
      editedProductUxtech
    );
    props.onHide();
  };
  console.log(props.rowDataForEdit.name);
  console.log(props.rowDataForEdit.product_id);
  return (
    <Modal
      {...props}
      size="lg"
      dialogClassName="editModel"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ width: "fit-content", position: "absolute", left: "40%" }}
    >
      <Modal.Header
        closeButton
        closeVariant="white"
        style={{
          margin: "0px",
          paddingTop: "2px",
          paddingBottom: "2px",
          background: "#202124",
          color: "white",
        }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Product Info
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: "#202124", color: "white" }}>
        <h4>Product ID: {props.rowDataForEdit.product_id}</h4>
        <Form
          style={{ marginTop: "0px", marginBottom: "0px" }}
          onSubmit={onSubmit}
        >
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              value={`${editedProductName}`}
              onChange={(e) => setEditedProductName(e.target.value)}
              required
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>UX_Sales</Form.Label>
            <Multiselect
              selectedValues={`${props.rowDataForEdit.ux_sales}`.split(", ")}
              showCheckbox
              hidePlaceholder={false}
              closeOnSelect={false}
              isObject={false}
              onRemove={onRemove}
              onSearch={function noRefCheck() {}}
              onSelect={onSelect}
              options={[
                "Option 1",
                "Option 2",
                "Option 3",
                "Option 4",
                "Option 5",
              ]}
              style={{
                chips: {
                  background: "#0B5ED7",
                },
                multiselectContainer: {
                  color: "black",
                },
                searchBox: {
                  border: "none",
                  "border-bottom": "1px solid blue",
                  "border-radius": "0px",
                  background: "white",
                },
              }}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>UX_tech</Form.Label>
            <Form.Control
              value={`${editedProductUxtech}`}
              onChange={(e) => setEditedProductUxtech(e.target.value)}
              required
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ marginTop: "1rem", marginLeft: "40%" }}
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            Save
          </Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export const AddModalForm = (props) => {
  // const [editedProductId, setEditedProductId] = useState("");
  const [editedProductName, setEditedProductName] = useState("");
  const [editedProductUxSales, setEditedProductUxSales] = useState("");
  const [editedProductUxtech, setEditedProductUxtech] = useState("");

  useEffect(() => {
    console.log("inside UseEffect");
    // setEditedProductId(props.rowDataForEdit.product_id);
    // setEditedProductName(props.rowDataForEdit.name);
    // setEditedProductUxSales(props.rowDataForEdit.ux_sales);
    // setEditedProductUxtech(props.rowDataForEdit.ux_tech);
    // console.log(editedProductName);
    // console.log(editedProductUxSales);
  }, [props]);

  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedList);
    setEditedProductUxSales(
      selectedList.toString().replace(/,(?=[^\s])/g, ", ")
    );
  };
  const onRemove = (selectedList, removedItem) => {
    console.log(selectedList);
    setEditedProductUxSales(
      selectedList.toString().replace(/,(?=[^\s])/g, ", ")
    );
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("This are all the data");
    // console.log(editedProductId);
    console.log(editedProductName);
    console.log(editedProductUxSales);
    console.log(editedProductUxtech);
    props.handleNewTableDataAdd(
      editedProductName,
      editedProductUxSales,
      editedProductUxtech
    );
    props.onHide();
  };
  //console.log(props.rowDataForEdit.name);
  //console.log(props.rowDataForEdit.product_id);
  return (
    <Modal
      {...props}
      size="lg"
      dialogClassName="editModel"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ width: "fit-content", position: "absolute", left: "40%" }}
    >
      <Modal.Header
        closeButton
        closeVariant="white"
        style={{
          margin: "0px",
          paddingTop: "2px",
          paddingBottom: "2px",
          background: "#202124",
          color: "white",
        }}
      >
        <Modal.Title id="contained-modal-title-vcenter">
          Add Product Information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: "#202124", color: "white" }}>
        <h4>New Product Entry</h4>
        <Form
          style={{ marginTop: "0px", marginBottom: "0px" }}
          onSubmit={onSubmit}
        >
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              // value={`${editedProductName}`}
              placeholder="Enter Product Name"
              onChange={(e) => setEditedProductName(e.target.value)}
              required
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>UX_Sales</Form.Label>
            <Multiselect
              // selectedValues={[`${props.rowDataForEdit.ux_sales}`]}
              showCheckbox
              closeOnSelect={false}
              isObject={false}
              onRemove={onRemove}
              onSearch={function noRefCheck() {}}
              onSelect={onSelect}
              options={[
                "Option 1",
                "Option 2",
                "Option 3",
                "Option 4",
                "Option 5",
              ]}
              style={{
                chips: {
                  background: "#0B5ED7",
                },
                multiselectContainer: {
                  color: "black",
                },
                searchBox: {
                  border: "none",
                  "border-bottom": "1px solid blue",
                  "border-radius": "0px",
                  background: "white",
                },
              }}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>UX_tech</Form.Label>
            <Form.Control
              // value={`${editedProductUxtech}`}
              placeholder="Enter ux_tech"
              onChange={(e) => setEditedProductUxtech(e.target.value)}
              required
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ marginTop: "1rem", marginLeft: "40%" }}
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            Add
          </Button>
        </Form>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
};
