import { useState } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Button, OutlinedInput } from "@mui/material";

interface SearchbarProps {
  value: string;
  onChange: (value: string) => void;
}

export const Searchbar: React.FC<SearchbarProps> = (props) => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <>
      <OutlinedInput
        style={{ background: "#a70000" }}
        fullWidth
        id="input-with-button"
        value={inputValue}
        onChange={(event) => setInputValue(event?.target.value)}
        placeholder=" Search city..."
        startAdornment={
          <InputAdornment position="start" style={{ padding: "0px" }}>
            <Button
              style={{ background: "#a70000", color: "white", width: "30px" }}
              onClick={() => props.onChange(inputValue)}
            >
              <SearchIcon
                style={{
                  width: "35px",
                  height: "35px",
                  position: "relative",
                  left: "-2px",
                  top: "2px",
                }}
              />
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
