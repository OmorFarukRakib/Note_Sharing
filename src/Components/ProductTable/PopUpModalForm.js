import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./modalStyle.css";
import Multiselect from "multiselect-react-dropdown";

export const EditModalForm = (props) => {
  const onSelect = (selectedList, selectedItem) => {
    console.log(selectedList);
  };
  const onRemove = (selectedList, removedItem) => {
    console.log(selectedList);
  };
  console.log(props.rowDataForEdit.name);
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
        <Form style={{ marginTop: "0px", marginBottom: "0px" }}>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              as="textarea"
              rows={1}
              placeholder={props.rowDataForEdit.name}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicEmail">
            <Form.Label>UX_Sales</Form.Label>
            <Multiselect
              selectedValues={[`${props.rowDataForEdit.ux_sales}`]}
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
            <Form.Control placeholder={props.rowDataForEdit.ux_tech} />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{ marginTop: "1rem", marginLeft: "40%" }}
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
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading for Add
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
