import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { AppBar, Button, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import theme from "./providers/themeProvider";
import Table from "./components/Table";
import AppSideBar from "./components/AppSideBar";
import useSideBar from "./useComponents/useSideBar";

function App() {
  const [count, setCount] = useState(0);
  const { toggleDrawer, SideBar } = useSideBar();
  return (
    <>
      <button onClick={toggleDrawer}>aa</button>
      <SideBar></SideBar>
      <Header></Header>
      <Table></Table>
    </>
  );
}

export default App;
