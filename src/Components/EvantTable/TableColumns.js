import { TextField } from "@material-ui/core";

const tableColumns = [
  {
    title: "Event ID",
    field: "event_id",
    defaultSort: "desc",
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
    title: "Information",
    field: "info",
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
    title: "Company List",
    field: "company_list",
    cellStyle: {
      width: "10%",
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
    title: "Started At",
    field: "startedAt",
    type: "datetime",
    //  filterComponent: (props) => <CustomDatePicker {...props} />,
    cellStyle: {
      width: "10%",
      textAlign: "center",
    },
    headerStyle: {
      // backgroundColor: "#039be5",
      textAlign: "center",
    },
    // editComponent: ({ value, onChange }) => (
    //   <TextField
    //     onChange={(e) => onChange(e.target.value)}
    //     value={value}
    //     multiline
    //     fullWidth
    //   />
    // ),
    //lookup: { 1: "İstanbul", 2: "Şanlıurfa" },
  },
  {
    title: "Ended At",
    field: "endedAt",
    type: "datetime",
    cellStyle: {
      width: "10%",
      textAlign: "center",
    },
    headerStyle: {
      // backgroundColor: "#039be5",
      textAlign: "center",
    },
    // editComponent: ({ value, onChange }) => (
    //   <TextField
    //     onChange={(e) => onChange(e.target.value)}
    //     value={value}
    //     multiline
    //     fullWidth
    //   />
    // ),
    //lookup: { 1: "İstanbul", 2: "Şanlıurfa" },
  },
  {
    title: "Expired",
    field: "expired",
    cellStyle: {
      width: "10%",
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
