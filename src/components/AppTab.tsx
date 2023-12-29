import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Paper, Tab, Table } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import { Component, useState } from "react";
import AppTable from "./AppTable";
function AppTab() {
  const [tabValue, setTabValue] = useState("1");
  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  return (
    <>
      <Paper sx={{ height: "100%" }}>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="シリーズ" value="1"></Tab>
              <Tab label="SKU" value="2"></Tab>
            </TabList>
          </Box>
          <TabPanel value="1">
            <AppTable></AppTable>
          </TabPanel>
          <TabPanel value="2">tab2</TabPanel>
        </TabContext>
      </Paper>
    </>
  );
}

export default AppTab;
