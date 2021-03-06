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

const CompanyTable = (props) => {
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
    HandleDataCountAPI(props.userAuthInfo, ifSuccess, ifError);
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
    HandleAllDataReadAPI(props.userAuthInfo, ifSuccess, ifError);
  };

  const handleNewTableDataAdd = (addData) => {
    handleClearMessage();
    const ifSuccess = (company_id) => {
      handleTableDataShow();
      setLastUpdateId(`${company_id}`);
      setAddSuccess(true);
    };
    const ifError = () => {
      setError(true);
    };

    HandleAddAPI(props.userAuthInfo, addData, ifSuccess, ifError);
  };

  const handleTableDataEdit = (updatedData) => {
    handleClearMessage();
    const ifSuccess = () => {
      handleTableDataShow();
      setLastUpdateId(`${updatedData.company_id}`);
      setEditSuccess(true);
    };
    const ifError = () => {
      setError(true);
    };
    

    HandleEditAPI(props.userAuthInfo, updatedData, ifSuccess, ifError);
  };

  const handleTableDataDelete = (company_id) => {
    handleClearMessage();
    const ifSuccess = () => {
      handleTableDataShow();
      setLastUpdateId(`${company_id}`);
      setDeleteSuccess(true);
    };
    const ifError = () => {
      setError(true);
    };
    HandleDeleteAPI(props.userAuthInfo, `${company_id}`, ifSuccess, ifError);
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
            //             margin: "20px",
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
                    newRow.name &&
                    newRow.ux_sales &&
                    newRow.ux_tech &&
                    newRow.additional_info
                  ) {
                    const addData = {
                      name: newRow.name,
                      ux_sales: newRow.ux_sales,
                      ux_tech: newRow.ux_tech,
                      additional_info: newRow.additional_info,
                    };
                    handleNewTableDataAdd(addData);
                    res();
                  } else {
                    setWarningForAddRequiredData(true);
                    rej();
                  }
                }),
              onRowDelete: (selectedRow) =>
                new Promise((res, rej) => {
                  console.log(selectedRow.company_id);
                  handleTableDataDelete(selectedRow.company_id);
                  res();
                }),
              onRowUpdate: (updatedRow, oldRow) =>
                new Promise((res, rej) => {
                  console.log(updatedRow);
                  handleTableDataEdit(updatedRow);
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

export default CompanyTable;
