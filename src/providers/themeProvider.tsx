import { Theme, ThemeProvider, createTheme } from "@mui/material/styles";

const theme = {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "red", // カスタマイズしたい背景色に変更
        },
      },
    },
  },
};

export default theme;
