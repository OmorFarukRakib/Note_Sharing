import { TextField } from "@material-ui/core";

const tableColumns = [
  {
    title: "Note ID",
    field: "note_id",
    editable: "never",
    cellStyle: {
      width: "5%",
      textAlign: "center",
      
    },
    headerStyle: {
      textAlign: "center",

      //  backgroundColor: "#039be5",
    },
  },
  {
    title: "Created By",
    field: "user_id",
    editable: "never",
    cellStyle: {
      width: "5%",
      textAlign: "center",
      
    },
    headerStyle: {
      textAlign: "center",

      //  backgroundColor: "#039be5",
    },
  },
  {
    title: "Created At",
    field: "createdAt",
    editable: "never",
    type: "datetime",
    cellStyle: {
      width: "5%",
      textAlign: "center",
    },
    headerStyle: {
      textAlign: "center",

      //  backgroundColor: "#039be5",
    },
  },
  {
    title: "Last Updated By",
    field: "updated_by_user_id",
    editable: "never",
    cellStyle: {
      width: "5%",
      textAlign: "center",
    },
    headerStyle: {
      textAlign: "center",
      //  backgroundColor: "#039be5",
    },
  },
  {
    title: "Updated At",
    field: "updatedAt",
    editable: "never",
    type: "datetime",
    cellStyle: {
      width: "5%",
      textAlign: "center",
    },
    headerStyle: {
      textAlign: "center",
      //  backgroundColor: "#039be5",
    },
  },

  {
    title: "Title",
    field: "title",
    cellStyle: {
      width: "10%",
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
    title: "Event ID",
    field: "event_id",
    cellStyle: {
      textAlign: "center",
      width: "5%",
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
    title: "Company ID",
    field: "company_id",
    cellStyle: {
      width: "5%",
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
    title: "Product ID",
    field: "product_id",
    cellStyle: {
      width: "5%",
      textAlign: "center",
    },
    headerStyle: {
      textAlign: "center",
      //  backgroundColor: "#039be5",
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
    title: "Content",
    field: "content",
    cellStyle: {
      textAlign: "center",
      width: "25%",
    },
    headerStyle: {
      textAlign: "center",
      //  backgroundColor: "#039be5",
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
    title: "Additional Info",
    field: "additional_info",
    cellStyle: {
      textAlign: "center",
      width: "25%",
    },
    headerStyle: {
      textAlign: "center",
      //  backgroundColor: "#039be5",
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
];
export default tableColumns;
