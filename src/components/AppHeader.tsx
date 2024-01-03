import { Search } from "@mui/icons-material";
import {
  AppBar,
  Autocomplete,
  Box,
  Button,
  IconButton,
  InputBase,
  InputBaseProps,
  MenuItem,
  Select,
  SelectProps,
  TextField,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import * as React from "react";
import { Component } from "react";

function AppHeader() {
  const [selected, setSelected] = React.useState("商品提案");
  const StyledInputBase = styled(InputBase)<InputBaseProps>(({ theme }) => ({
    border: "none",
    "&:focus": {
      border: "none",
    },
  }));
  return (
    <>
      <Box sx={{ flexGrow: 1, backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
        <AppBar position="static" color="transparent">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Select
              input={<StyledInputBase />}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selected}
              defaultValue="l;kj;"
              label="Age"
              onChange={(value) => setSelected(value.target.value as string)}
            >
              {["商品提案", "商品詳細", "商品選択", "テスト"].map(
                (element, index) => (
                  <MenuItem value={element}>{element}</MenuItem>
                )
              )}
            </Select>

            <TextField label={"検索してクリック"}></TextField>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default AppHeader;
