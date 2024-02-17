import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Button, OutlinedInput } from "@mui/material";
import classes from "./Searchbar.module.css";

interface SearchbarProps {
  value: string;
  onChange: (value: string) => void;
}

export const Searchbar: React.FC<SearchbarProps> = (props) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <>
      <OutlinedInput
        className={classes.outlinedInput}
        fullWidth
        id="input-with-button"
        value={inputValue}
        onChange={(event) => setInputValue(event?.target.value)}
        placeholder=" Search city..."
        startAdornment={
          <InputAdornment position="start" style={{ padding: "0px" }}>
            <Button
              className={classes.buton}
              onClick={() => props.onChange(inputValue)}
            >
              <SearchIcon className={classes.searchIcon} />
            </Button>
          </InputAdornment>
        }
        inputProps={{
          style: {
            width: "100%",
            paddingLeft: "10px",
            backgroundColor: "white",
            borderRadius: "0px 5px 5px 0px",
          },
        }}
      />
    </>
  );
};
