import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";

import { AlertTitle } from "@material-ui/lab";
import { DotLoader } from "react-spinners";

export const ErrorMessage = ({ error, handleClearMessage }) => {
  return (
    <>
      <Collapse in={error}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleClearMessage();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Error</AlertTitle>
          Sorry! Something Went wrong! — <strong> Please try again!</strong>
        </Alert>
      </Collapse>
    </>
  );
};
export const WarningMessageForForAddRequiredData = ({
  error,
  handleClearMessage,
}) => {
  return (
    <>
      <Collapse in={error}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleClearMessage();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Error!</AlertTitle>
          <strong>
            {" "}
            Please Enter All the information to create new Product!
          </strong>
        </Alert>
      </Collapse>
    </>
  );
};

export const ErrorValidationFailedMessage = ({ error, handleClearMessage }) => {
  return (
    <>
      <Collapse in={error}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleClearMessage();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Error!</AlertTitle>
          <strong> Please Enter Valid Email ID.</strong>
        </Alert>
      </Collapse>
    </>
  );
};

export const EditSuccessMessage = ({
  editSuccess,
  handleClearMessage,
  lastUpdateId,
}) => {
  return (
    <>
      <Collapse in={editSuccess}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleClearMessage();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Success</AlertTitle>
          Update Successful!! —{" "}
          <strong> Product ID: {lastUpdateId} has been modified! </strong>
        </Alert>
      </Collapse>
    </>
  );
};

export const DeleteSuccessMessage = ({
  deleteSuccess,
  handleClearMessage,
  lastUpdateId,
}) => {
  return (
    <>
      <Collapse in={deleteSuccess}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleClearMessage();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Success</AlertTitle>
          Delete Successful!! —{" "}
          <strong> Product ID: {lastUpdateId} has been deleted! </strong>
        </Alert>
      </Collapse>
    </>
  );
};
export const AddSuccessMessage = ({
  addSuccess,
  handleClearMessage,
  lastUpdateId,
}) => {
  return (
    <>
      <Collapse in={addSuccess}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleClearMessage();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Success</AlertTitle>
          New Product Add Successful!! —{" "}
          <strong> Product ID: {lastUpdateId} has been added! </strong>
        </Alert>
      </Collapse>
    </>
  );
};
export const ResetPasswordSuccessMessage = ({
  resetPassworddSuccess,
  handleClearMessage,
  lastUpdateId,
}) => {
  return (
    <>
      <Collapse in={resetPassworddSuccess}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                handleClearMessage();
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Success</AlertTitle>
          Password Reset Successful!! —{" "}
          <strong>Passwrod reset for user ID: {lastUpdateId} </strong>
        </Alert>
      </Collapse>
    </>
  );
};

export const Loading = ({ tableLoading }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DotLoader
        color={"#eee"}
        loading={tableLoading}
        css="margin-top: 15rem;"
        size={100}
      />
    </div>
  );
};
