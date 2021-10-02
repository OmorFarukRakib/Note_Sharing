import React, {useState, useEffect} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import {JsonServer} from "../../APIs/API"





const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const names = [
//   "Oliver Hansen",
//   "Van Henry",
//   "April Tucker",
//   "Ralph Hubbard",
//   "Omar Alexander",
//   "Carlos Abbott",
//   "Miriam Wagner",
//   "Bradley Wilkerson",
//   "Virginia Andrews",
//   "Kelly Snyder",
// ];



function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect({value, onChange}) {
    const [names , setNames] = useState([]);
    const getCompanyIdsAPI = () => {
      //console.log(`ata delete koro ${note_id}`);
      JsonServer({
        method: "get",
        url: `/Company`,
      })
        .then((res) => {
          console.log(typeof `${res.data.ids}`);
          let string = `${res.data.ids}`;
          var newArray = string.split(",");
          console.log(newArray);
          setNames(newArray);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    useEffect(() => {
        getCompanyIdsAPI();
    }, [])
    
  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([value]);

  const handleChange = (event) => {
    onChange(event.target.value);
    setPersonName(event.target.value);
  };
  return (
    <div>
      <FormControl className={classes.formControl}>
        <button>Add new Company</button>
        <InputLabel id="demo-mutiple-chip-label">Chip</InputLabel>

        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
