import { TextField } from "@material-ui/core";

const tableColumns = [
  {
    title: "User ID",
    field: "user_id",
    editable: "never",
    cellStyle: {
      width: "10%",
      textAlign: "center",
    },
    headerStyle: {
      textAlign: "center",
      //  backgroundColor: "#039be5",
    },

    // editComponent: ({ value, onChange }) => (
    //   <TextField
    //     autoFocus={true}
    //     onChange={(e) => onChange(e.target.value)}
    //     value={value}
    //     multiline
    //     fullWidth
    //   />
    // ),
    //lookup: { 1: "RESET", 2: "UserChoice" },
  },
  {
    title: "Username",
    field: "username",
    editable: "never",
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
    title: "User Level",
    field: "user_level",
    cellStyle: {
      textAlign: "center",
      width: "20%",
    },
    lookup: { 1: "Admin", 0: "User" },
    headerStyle: {
      textAlign: "center",
      // backgroundColor: "#039be5",
    },
    // editComponent: ({ value, onChange }) => (
    //   <TextField
    //     onChange={(e) => onChange(e.target.value)}
    //     value={value}
    //     multiline
    //     fullWidth
    //   />
    // ),
  },
  {
    title: "Fullname",
    field: "fullname",
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
    title: "Email",
    field: "email",
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
    title: "Department",
    field: "department",
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
    title: "Password Status",
    field: "passwordChanged",
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
    lookup: { 0: "RESET to default", 1: "User Password" },
  },
  {
    title: "ID Created At",
    field: "createdAt",
    editable: "never",
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
    title: "Last Updated At",
    field: "updatedAt",
    editable: "never",
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
