import { TextField } from "@material-ui/core";
import MultipleSelect from "./MultiSelect";

const setTableColumns = (
  lookupobjectForProduct,
  lookupobjectForEvent,
  lookupobjectForCompany
) => {
    //const classes = useStyles();
    //const theme = useTheme();
    //const [personName, setPersonName] = useState([]);

    
  // console.log(lookupobject);
  // let lookup = JSON.stringify(lookupobject);
  // console.log(lookup);
  return [
    {
      title: "Note ID",
      field: "note_id",
      editable: "never",
      defaultSort: "desc",
      cellStyle: {
        width: "5%",
        textAlign: "center",
      },
      headerStyle: {
        textAlign: "center",

        //  backgroundColor: "#039be5",
      },
    },
    // {
    //   title: "Created By",
    //   field: "user_fullname",
    //   editable: "never",
    //   cellStyle: {
    //     width: "5%",
    //     textAlign: "center",
    //   },
    //   headerStyle: {
    //     textAlign: "center",

    //     //  backgroundColor: "#039be5",
    //   },
    // },
    // {
    //   title: "Created At",
    //   field: "createdAt",
    //   editable: "never",
    //   type: "datetime",
    //   cellStyle: {
    //     width: "5%",
    //     textAlign: "center",
    //   },
    //   headerStyle: {
    //     textAlign: "center",

    //     //  backgroundColor: "#039be5",
    //   },
    // },
    // {
    //   title: "Updated By",
    //   field: "updated_by_user_fullname",
    //   editable: "never",
    //   cellStyle: {
    //     width: "5%",
    //     textAlign: "center",
    //   },
    //   headerStyle: {
    //     textAlign: "center",
    //     //  backgroundColor: "#039be5",
    //   },
    // },
    // {
    //   title: "Updated At",
    //   field: "updatedAt",
    //   editable: "never",
    //   type: "datetime",
    //   cellStyle: {
    //     width: "5%",
    //     textAlign: "center",
    //   },
    //   headerStyle: {
    //     textAlign: "center",
    //     //  backgroundColor: "#039be5",
    //   },
    // },

    {
      title: "Title",
      field: "title",
      cellStyle: {
        width: "5%",
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
      title: "Event Name",
      field: "event_id",
      lookup: lookupobjectForEvent,
      cellStyle: {
        textAlign: "center",
        width: "5%",
      },
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
      title: "Company Name",
      field: "company_id",
      lookup: lookupobjectForCompany,
      cellStyle: {
        width: "5%",
        textAlign: "center",
      },
      headerStyle: {
        // backgroundColor: "#039be5",
        textAlign: "center",
      },
      editComponent: ({ value, onChange }) => {
          console.log(value);
          console.log(onChange);
          return(<>
      
      <MultipleSelect value={value} onChange={onChange}/>
      </>
      )}
      //lookup: { 1: "??stanbul", 2: "??anl??urfa" },
    },
    {
      title: "Product Name",
      field: "product_id",
      lookup: lookupobjectForProduct,
      // lookup: { 1: "??stanbul", 2: "??anl??urfa" },

      cellStyle: {
        width: "5%",
        textAlign: "center",
      },
      headerStyle: {
        textAlign: "center",
        //  backgroundColor: "#039be5",
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
      title: "Content",
      field: "content",
      cellStyle: {
        textAlign: "center",
        width: "60%",
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
        width: "20%",
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
  // return tableColumns;
};

export default setTableColumns;
