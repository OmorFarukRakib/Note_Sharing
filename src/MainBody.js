import { useState } from "react";
import { Button } from "@material-ui/core";
import "./customStyle.css";
import VIPNoteTable from "./Components/VIPNoteTable/MaterialTable";
import ProductTable from "./Components/ProductTable/MaterialTable";
import EventTable from "./Components/EvantTable/MaterialTable";
import CompanyTable from "./Components/CompanyTable/MaterialTable";
import UserTable from "./Components/UserTable/MaterialTable";
const MainBody = () => {
  const [selectTable, setSelectTable] = useState(1);
  const onNoteButtonClick = () => {
    setSelectTable(1);
  };
  const onProductButtonClick = () => {
    setSelectTable(2);
  };
  const onEventButtonClick = () => {
    setSelectTable(3);
  };
  const onCompanyButtonClick = () => {
    setSelectTable(4);
  };
  const onUserButtonClick = () => {
    setSelectTable(5);
  };
  return (
    <>
      <div className="profile-wrapper">dfg</div>
      <div className="content-wrapper">
        <div className="content-nav-btn-wrapper">
          <Button
            variant="contained"
            color={selectTable === 1 ? "#202124" : "secondary"}
            //style={{ height: `${modalSelect === 1}  ? "10rem" : null}` }}
            className={selectTable === 1 && "custom-btn"}
            onClick={onNoteButtonClick}
          >
            Note List
          </Button>
          <Button
            variant="contained"
            color={selectTable === 2 ? "#202124" : "secondary"}
            //style={{ height: `${modalSelect === 1}  ? "10rem" : null}` }}
            className={selectTable === 2 && "custom-btn"}
            onClick={onProductButtonClick}
          >
            Product List
          </Button>
          <Button
            variant="contained"
            color={selectTable === 3 ? "#202124" : "secondary"}
            //style={{ height: `${modalSelect === 1}  ? "10rem" : null}` }}
            className={selectTable === 3 && "custom-btn"}
            onClick={onEventButtonClick}
          >
            Event List
          </Button>
          <Button
            variant="contained"
            color={selectTable === 4 ? "#202124" : "secondary"}
            //style={{ height: `${modalSelect === 1}  ? "10rem" : null}` }}
            className={selectTable === 4 && "custom-btn"}
            onClick={onCompanyButtonClick}
          >
            Company List
          </Button>
          <Button
            variant="contained"
            color={selectTable === 5 ? "#202124" : "secondary"}
            //style={{ height: `${modalSelect === 1}  ? "10rem" : null}` }}
            className={selectTable === 5 && "custom-btn"}
            onClick={onUserButtonClick}
          >
            User List
          </Button>
        </div>
        <div className="content-table-wrapper">
          {selectTable === 1 && <VIPNoteTable />}
          {selectTable === 2 && <ProductTable />}
          {selectTable === 3 && <EventTable />}
          {selectTable === 4 && <CompanyTable />}
          {selectTable === 5 && <UserTable />}
        </div>
      </div>
    </>
  );
};
export default MainBody;
