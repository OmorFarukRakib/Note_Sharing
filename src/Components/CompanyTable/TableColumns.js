import { TextField } from "@material-ui/core";

const tableColumns = [
  {
    title: "Company ID",
    field: "company_id",
    editable: "never",
    cellStyle: {
      width: "10%",
      textAlign: "center",
    },
    headerStyle: {
      textAlign: "center",
      //  backgroundColor: "#039be5",
    },

    editComponent: ({ value, onChange }) => (
      <TextField
        autoFocus={true}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        multiline
        fullWidth
      />
    ),
  },
  {
    title: "Name",
    field: "name",
    cellStyle: {
      width: "20%",
      textAlign: "center",
    },
    headerStyle: {
      textAlign: "center",
      // backgroundColor: "#039be5",
    },
    editComponent: ({ value, onChange }) => (
      <TextField
        autoFocus={true}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        multiline
        fullWidth
      />
    ),
  },
  {
    title: "UX Sales",
    field: "ux_sales",
    cellStyle: {
      textAlign: "center",
      width: "20%",
    },
    headerStyle: {
      textAlign: "center",
      // backgroundColor: "#039be5",
    },
    editComponent: ({ value, onChange }) => (
      <TextField
        onChange={(e) => onChange(e.target.value)}
        value={value}
        multiline
        fullWidth
      />
    ),
  },
  {
    title: "UX Tech",
    field: "ux_tech",
    cellStyle: {
      width: "20%",
      textAlign: "center",
    },
    headerStyle: {
      // backgroundColor: "#039be5",
      textAlign: "center",
    },
    editComponent: ({ value, onChange }) => (
      <TextField
        onChange={(e) => onChange(e.target.value)}
        value={value}
        multiline
        fullWidth
      />
    ),
    //lookup: { 1: "İstanbul", 2: "Şanlıurfa" },
  },
  {
    title: "Additional Info",
    field: "additional_info",
    cellStyle: {
      width: "30%",
      textAlign: "center",
    },
    headerStyle: {
      // backgroundColor: "#039be5",
      textAlign: "center",
    },
    editComponent: ({ value, onChange }) => (
      <TextField
        onChange={(e) => onChange(e.target.value)}
        value={value}
        multiline
        fullWidth
      />
    ),
    //lookup: { 1: "İstanbul", 2: "Şanlıurfa" },
  },
  
];
export default tableColumns;
