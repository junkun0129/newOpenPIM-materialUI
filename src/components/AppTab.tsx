import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Paper, Tab, Table } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import { Component, useState } from "react";
import AppTable from "./AppTable";
import CustomTable, { columnTypes, rowTypes } from "./CustomTable";
function AppTab() {
  const [tabValue, setTabValue] = useState("1");
  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue);
  };
  const columnsData: columnTypes[] = [{ id: 1, name: "title", width: 100 }];

  // 行データ
  const rowsData: rowTypes[] = [
    { id: 1, title: "Row 1" },
    { id: 2, title: "Row 2" },
    { id: 3, title: "Row 3" },
  ];
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
            {/* <CustomTable columns={columnsData} rows={rowsData}></CustomTable> */}
            <AppTable></AppTable>
          </TabPanel>
          <TabPanel value="2">tab2</TabPanel>
        </TabContext>
      </Paper>
    </>
  );
}

export default AppTab;
