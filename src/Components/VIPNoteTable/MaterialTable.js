import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

import {
  HandleAllDataReadAPI,
  HandleDataCountAPI,
  HandleDeleteAPI,
  HandleEditAPI,
  HandleAddAPI,
} from "./HandleAPIFunctions";
import {
  ErrorMessage,
  WarningMessageForForAddRequiredData,
  EditSuccessMessage,
  DeleteSuccessMessage,
  AddSuccessMessage,
  Loading,
} from "./TableActionAlert";
import tableColumns from "./TableColumns";

const VIPNoteTable = () => {
  const [countData, setCountData] = useState(0);
  const [data, setDataList] = useState([]);
  const [preferDarkMode, setPreferDarkMode] = useState(() => {
    const mode = localStorage.getItem("_tableDarkMode");
    return mode === "true" || false;
  });
  const [tableLoading, setTableLoading] = useState(true);
  const [error, setError] = useState(false);
  const [editSuccess, setEditSuccess] = useState(false);
  const [addSuccess, setAddSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const [lastUpdateId, setLastUpdateId] = useState(null);
  const [warningForAddRequiredData, setWarningForAddRequiredData] =
    useState(false);
  // const [userName, setUserName] = useState("");
  // if(API){
  //   setUserName(API.data);
  // }

  useEffect(() => {
    handlecountData();
    handleClearMessage();
    handleTableDataShow();
  }, []);

  const theme = createTheme({
    palette: {
      type: preferDarkMode ? "dark" : "light",
    },
  });

  const handleDarkModeChange = () => {
    setPreferDarkMode((prev) => !prev);
    localStorage.setItem("_tableDarkMode", !preferDarkMode);
  };

  const handlecountData = () => {
    const ifSuccess = (countValue) => {
      setCountData(countValue);
    };
    const ifError = () => {
      setCountData(0);
    };
    HandleDataCountAPI(ifSuccess, ifError);
  };

  const handleTableDataShow = () => {
    setTableLoading(true);
    const ifSuccess = (allData) => {
      setDataList(allData);
      setTableLoading(false);
    };
    const ifError = () => {
      setError(true);
    };
    HandleAllDataReadAPI(ifSuccess, ifError);
  };

  const handleNewTableDataAdd = (
    title,
    event_id,
    company_id,
    product_id,
    content,
    additional_info
  ) => {
    handleClearMessage();
    const ifSuccess = (note_id) => {
      handleTableDataShow();
      setLastUpdateId(`${note_id}`);
      setAddSuccess(true);
    };
    const ifError = () => {
      setError(true);
    };
    const addData = {
      title,
      event_id,
      company_id,
      product_id,
      content,
      additional_info,
    };
    HandleAddAPI(addData, ifSuccess, ifError);
  };

  const handleTableDataEdit = (
    note_id,
    title,
    event_id,
    company_id,
    product_id,
    content,
    additional_info
  ) => {
    handleClearMessage();
    const ifSuccess = () => {
      handleTableDataShow();
      setLastUpdateId(`${note_id}`);
      setEditSuccess(true);
    };
    const ifError = () => {
      setError(true);
    };
    const editData = {
      note_id,
      title,
      event_id,
      company_id,
      product_id,
      content,
      additional_info,
    };

    HandleEditAPI(editData, ifSuccess, ifError);
  };

  const handleTableDataDelete = (note_id) => {
    handleClearMessage();
    const ifSuccess = () => {
      handleTableDataShow();
      setLastUpdateId(`${note_id}`);
      setDeleteSuccess(true);
    };
    const ifError = () => {
      setError(true);
    };
    HandleDeleteAPI(`${note_id}`, ifSuccess, ifError);
  };

  const handleClearMessage = () => {
    setError(false);
    setWarningForAddRequiredData(false);
    setEditSuccess(false);
    setDeleteSuccess(false);
    setAddSuccess(false);
    setLastUpdateId(null);
  };

  return (
    <>
      <ErrorMessage error={error} handleClearMessage={handleClearMessage} />
      <WarningMessageForForAddRequiredData
        error={warningForAddRequiredData}
        handleClearMessage={handleClearMessage}
      />
      <EditSuccessMessage
        editSuccess={editSuccess}
        handleClearMessage={handleClearMessage}
        lastUpdateId={lastUpdateId}
      />
      <DeleteSuccessMessage
        deleteSuccess={deleteSuccess}
        handleClearMessage={handleClearMessage}
        lastUpdateId={lastUpdateId}
      />
      <AddSuccessMessage
        addSuccess={addSuccess}
        handleClearMessage={handleClearMessage}
        lastUpdateId={lastUpdateId}
      />

      {tableLoading && <Loading tableLoading={tableLoading} />}
      {!tableLoading && (
        <MuiThemeProvider theme={theme}>
          <MaterialTable
            title={
              <h4 style={{ fontSize: "1.2rem" }}>Total Entries: {countData}</h4>
            }
            style={{
              width: "100%",
              // width: "100%",
              // maxWidth: "90% !important",
              display: "inline-table",
              // display: "inline-block",
              height: "90%",
              borderRadius: "2rem",
              // fontSize: "0.7rem",
              fontSize: "inherit",
              // paddingLeft: "0px",
              // paddingRight: "0px",
            }}
            data={data}
            columns={tableColumns}
            // detailPanel={[
            //   {
            //     tooltip: "Show body",
            //     render: (rowData) => {
            //       return (
            //         <div
            //           style={{
            //              margin: "20px",
            //             fontSize: 20,
            //             textAlign: "center",
            //             color: "black",
            //             backgroundColor: "white",
            //           }}
            //         >
            //           {rowData.content}
            //         </div>
            //       );
            //     },
            //   },
            // ]}
            editable={{
              onRowAdd: (newRow) =>
                new Promise((res, rej) => {
                  console.log(newRow);
                  if (
                    newRow.title &&
                    newRow.event_id &&
                    newRow.company_id &&
                    newRow.product_id &&
                    newRow.content &&
                    newRow.additional_info
                  ) {
                    handleNewTableDataAdd(
                      newRow.title,
                      newRow.event_id,
                      newRow.company_id,
                      newRow.product_id,
                      newRow.content,
                      newRow.additional_info
                    );
                    res();
                  } else {
                    setWarningForAddRequiredData(true);
                    rej();
                  }
                }),
              onRowDelete: (selectedRow) =>
                new Promise((res, rej) => {
                  console.log(selectedRow.note_id);
                  handleTableDataDelete(selectedRow.note_id);
                  res();
                }),
              onRowUpdate: (updatedRow, oldRow) =>
                new Promise((res, rej) => {
                  console.log(updatedRow);
                  handleTableDataEdit(
                    updatedRow.note_id,
                    updatedRow.title,
                    updatedRow.event_id,
                    updatedRow.company_id,
                    updatedRow.product_id,
                    updatedRow.content,
                    updatedRow.additional_info
                  );
                  res();
                }),
            }}
            options={{
              actionsColumnIndex: -1,
              addRowPosition: "first",
              //selection: true,
              paging: false,
              headerStyle: {
                position: "sticky",
                top: "0",
                fontSize: "1.1rem",
                fontWeight: "500",
                width: "0rem",
                paddingLeft: "0px",
                paddingRight: "0px",
                //backgroundColor: "#039be5",
              },
              maxBodyHeight: "60vh",
            }}
            actions={[
              // {
              //   hidden: true,
              //   tooltip: "Remove All Selected Users",
              //   icon: "delete",
              //   onClick: (evt, data) => {
              //     alert("You want to delete " + data.length + " rows");
              //     console.log(data);
              //   },
              // },

              {
                icon: () =>
                  preferDarkMode ? <Brightness7Icon /> : <Brightness4Icon />,
                tooltip: "Toggle Light/Dark Mode",
                onClick: handleDarkModeChange,
                isFreeAction: true,
              },
            ]}
          />
        </MuiThemeProvider>
      )}
    </>
  );
};

export default VIPNoteTable;
