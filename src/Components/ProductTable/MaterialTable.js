import React, { useState, useEffect } from "react";
import MaterialTable from "material-table";
import { MuiThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { EditModalForm, AddModalForm } from "./PopUpModalForm";

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

const ProductTable = (props) => {
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
  const [editModalFormShow, SetEditModalFormShow] = useState(false);
  const [rowDataForEdit, SetRowDataForEdit] = useState({});
  const [addModalFormShow, SetAddModalFormShow] = useState(false);



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

  const handleNewTableDataAdd = (name, ux_sales, ux_tech) => {
    handleClearMessage();
    const ifSuccess = (product_id) => {
      handleTableDataShow();
      setLastUpdateId(`${product_id}`);
      setAddSuccess(true);
    };
    const ifError = () => {
      setError(true);
    };
    const addData = {
      name,
      ux_sales,
      ux_tech,
    };
    HandleAddAPI(props.userAuthInfo, addData, ifSuccess, ifError);
  };

  const handleTableDataEdit = (product_id, name, ux_sales, ux_tech) => {
    handleClearMessage();
    const ifSuccess = () => {
      handleTableDataShow();
      setLastUpdateId(`${product_id}`);
      setEditSuccess(true);
    };
    const ifError = () => {
      setError(true);
    };
    const editData = {
      product_id,
      name,
      ux_sales,
      ux_tech,
    };

    HandleEditAPI(props.userAuthInfo, editData, ifSuccess, ifError);
  };

  const handleTableDataDelete = (product_id) => {
    handleClearMessage();
    const ifSuccess = () => {
      handleTableDataShow();
      setLastUpdateId(`${product_id}`);
      setDeleteSuccess(true);
    };
    const ifError = () => {
      setError(true);
    };
    HandleDeleteAPI(props.userAuthInfo, `${product_id}`, ifSuccess, ifError);
  };

  const handleClearMessage = () => {
    setError(false);
    setWarningForAddRequiredData(false);
    setEditSuccess(false);
    setDeleteSuccess(false);
    setAddSuccess(false);
    setLastUpdateId(null);
  };
  const handleHideEditModal = () => {
    SetEditModalFormShow(false);
    SetRowDataForEdit({});
  }

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
      <EditModalForm
        rowDataForEdit={rowDataForEdit}
        handleTableDataEdit={handleTableDataEdit}
        show={editModalFormShow}
        //onHide={() => SetEditModalFormShow(false)}
        onHide={handleHideEditModal}
      />
      <AddModalForm
        handleNewTableDataAdd={handleNewTableDataAdd}
        show={addModalFormShow}
        onHide={() => SetAddModalFormShow(false)}
      />
      ;{tableLoading && <Loading tableLoading={tableLoading} />}
      {!tableLoading && (
        <MuiThemeProvider theme={theme}>
          <MaterialTable
            title={
              <h4 style={{ fontSize: "1.2rem" }}>Total Entries: {countData}</h4>
            }
            style={{
              width: "100%",
              // maxWidth: "90% !important",
              display: "inline-table",
              height: "90%",
              borderRadius: "2rem",
              fontSize: "inherit",
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
              // onRowAdd: (newRow) =>
              //   new Promise((res, rej) => {
              //     console.log(newRow);
              //     if (newRow.name && newRow.ux_sales && newRow.ux_tech) {
              //       handleNewTableDataAdd(
              //         newRow.name,
              //         newRow.ux_sales,
              //         newRow.ux_tech
              //       );
              //       res();
              //     } else {
              //       setWarningForAddRequiredData(true);
              //       rej();
              //     }
              //   }),
              onRowDelete: (selectedRow) =>
                new Promise((res, rej) => {
                  console.log(selectedRow.product_id);
                  handleTableDataDelete(selectedRow.product_id);
                  res();
                }),
              // onRowUpdate: (updatedRow, oldRow) =>
              //   new Promise((res, rej) => {
              //     console.log(updatedRow);
              //     handleTableDataEdit(
              //       updatedRow.product_id,
              //       updatedRow.name,
              //       updatedRow.ux_sales,
              //       updatedRow.ux_tech
              //     );
              //     res();
              //   }),
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
              {
                icon: "add",
                tooltip: "Add User",
                isFreeAction: true,
                onClick: (event) => {
                  SetAddModalFormShow(true);
                },
              },
              (rowData) => ({
                icon: "edit",
                tooltip: "Edit",
                isFreeAction: true,
                onClick: (event, rowData) => {
                  SetRowDataForEdit(rowData);
                  SetEditModalFormShow(true);
                  console.log(rowData);
                  //Do whatever you want with the row clicked data.
                },
              }),
              // (rowData) => ({
              //   icon: "add",
              //   tooltip: "Add",
              //   onClick: (event, rowData) => {
              //     console.log(rowData);
              //     //Do whatever you want with the row clicked data.
              //   },
              // }),
              // {
              //   icon: "edit",
              //   onClick: (rowData) => {
              //     console.log(rowData)
              //   },
              // },
              //   {
              //   icon: 'add',
              //   isFreeAction: true,
              //   onClick: () => {
              //     console.log("ADDDD");
              //   }
              // },
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
            // components={{
            //   Action: (props) => {
            //     if (props.action.icon === "edit") {
            //       return (
            //         <Button
            //           onClick={(event) =>
            //             props.action.onClick(event, props.data)
            //           }
            //           color="primary"
            //           variant="contained"
            //           style={{ textTransform: "none" }}
            //           size="small"
            //           disabled
            //         >
            //           My Button
            //         </Button>
            //       );
            //     }
            //     // if (props.action.icon === "save") {
            //     //   return (
            //     //     <Button
            //     //       onClick={(event) =>
            //     //         props.action.onClick(event, props.data)
            //     //       }
            //     //       color="primary"
            //     //       variant="contained"
            //     //       style={{ textTransform: "none" }}
            //     //       size="small"
            //     //     >
            //     //       My Button
            //     //     </Button>
            //     //   );
            //     // }
            //   },
            // }}
          />
        </MuiThemeProvider>
      )}
    </>
  );
};

export default ProductTable;
