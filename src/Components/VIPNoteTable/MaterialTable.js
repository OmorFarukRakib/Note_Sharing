import React, { useState, useEffect } from "react";
import MultiSelect from "./MultiSelect";
import MaterialTable, {
  MTableBodyRow,
  MTableEditRow,
  MTableEditField,
} from "material-table";
import { MuiThemeProvider } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import { createTheme } from "@material-ui/core/styles";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { Autocomplete } from "@material-ui/lab";

import {
  HandleAllDataReadAPI,
  HandleGetProductIdListAPI,
  HandleGetEventIdListAPI,
  HandleGetCompanyIdListAPI,
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

import setTableColumns from "./TableColumns";

const VIPNoteTable = (props) => {
  console.log(props.userAuthInfo);
  const [countData, setCountData] = useState(0);
  const [data, setDataList] = useState([]);
  const [productIdList, setProductIdList] = useState({});
  const [eventIdList, setEventIdList] = useState({});
  const [companyIdList, setCompanyIdList] = useState({});
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
    handleGetProductIdList();
    handleGetEventIdList();
    handleGetCompanyIdList();
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

  const convertArrayForLookupInTable = (arr) => {
    let convertedObj = {};
    arr.forEach((f, i) => {
      Object.keys(f).forEach(function eachKey(key) {
        convertedObj[`${key}`] = `${f[key]}`;
      });
    });
    console.log(convertedObj);
    return convertedObj;
  };

  const handleGetCompanyIdList = () => {
    setTableLoading(true);
    const ifSuccess = (idList) => {
      const forLookUpInTable = convertArrayForLookupInTable(idList);
      setCompanyIdList(forLookUpInTable);
      console.log(companyIdList);
    };
    const ifError = () => {
      setError(true);
    };
    HandleGetCompanyIdListAPI(props.userAuthInfo, ifSuccess, ifError);
  };

  const handleGetEventIdList = () => {
    setTableLoading(true);
    const ifSuccess = (idList) => {
      const forLookUpInTable = convertArrayForLookupInTable(idList);
      setEventIdList(forLookUpInTable);
      console.log(eventIdList);
    };
    const ifError = () => {
      setError(true);
    };
    HandleGetEventIdListAPI(props.userAuthInfo, ifSuccess, ifError);
  };

  const handleGetProductIdList = () => {
    setTableLoading(true);
    const ifSuccess = (idList) => {
      const forLookUpInTable = convertArrayForLookupInTable(idList);
      setProductIdList(forLookUpInTable);
      console.log(productIdList);
    };
    const ifError = () => {
      setError(true);
    };
    HandleGetProductIdListAPI(props.userAuthInfo, ifSuccess, ifError);
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
    HandleAddAPI(props.userAuthInfo, addData, ifSuccess, ifError);
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

    HandleEditAPI(props.userAuthInfo, editData, ifSuccess, ifError);
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
    HandleDeleteAPI(props.userAuthInfo, `${note_id}`, ifSuccess, ifError);
  };

  const handleClearMessage = () => {
    setError(false);
    setWarningForAddRequiredData(false);
    setEditSuccess(false);
    setDeleteSuccess(false);
    setAddSuccess(false);
    setLastUpdateId(null);
  };
  //MUST BE DELTES
  // const handleRowHover = (event, propsData) => {
  //   console.log(event.target);
  //   console.log(propsData);
  //   return (
  //     <Tooltip title="Show Details">
  //       Hello<span>{propsData}</span>
  //     </Tooltip>
  //   );
  // };

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
            columns={setTableColumns(productIdList, eventIdList, companyIdList)}
            detailPanel={[
              {
                tooltip: "Show Details",
                render: (rowData) => {
                  return (
                    <div className="custom-detail-panel-wrapper">
                      <div className="custom-detail-panel">
                        <div className="custom-detail-panel-note_id">
                          <strong>Note id:</strong> {rowData.note_id}
                        </div>
                        <div className="custom-detail-panel-user_fullname">
                          <strong>Created By: </strong>
                          <br /> {rowData.user_fullname}
                        </div>
                        <div className="custom-detail-panel-createdAt">
                          <strong>Created At: </strong>
                          <br />
                          {rowData.createdAt}
                        </div>
                        <div className="custom-detail-panel-updated_by_user_fullname">
                          <strong>last Updated By:</strong>
                          <br />
                          {rowData.updated_by_user_fullname}
                        </div>
                        <div className="custom-detail-panel-updatedAt">
                          <strong>last Updated At:</strong>
                          <br />
                          {rowData.updatedAt}
                        </div>
                      </div>
                    </div>
                  );
                },
              },
            ]}
            onRowClick={(event, rowData, togglePanel) => togglePanel()}
            components={{
              // EditField: (fieldProps) => {
              //   const {
              //     columnDef: { lookup },
              //   } = fieldProps;
              //   if (lookup) {
              //     console.info(fieldProps);
              //     return <MultiSelect {...fieldProps} />;
              //     return null;
              //   } else {
              //     return (
              //       <MTableEditField
              //         {...{ ...fieldProps, value: fieldProps.value || "" }}
              //       />
              //     );
              //   }
              // },
              tooltip: "Show body",
              Row: (props) => {
                return (
                  <MTableBodyRow
                    {...props}
                    // onMouseEnter={(e) => handleRowHover(e, props)}
                    // onMouseEnter={render: rowData => <img src={rowData.url} style={{width: 50, borderRadius: '50%'}}/>}
                  />
                );
              },
            }}
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
                //backgroundColor: "rgb(64, 224, 208, .9)",
                //border: "1px solid black",
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
