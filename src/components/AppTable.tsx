import { Button, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";
import { Component } from "react";
import ScienceIcon from "@mui/icons-material/Science";
function AppTable() {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "firstName", headerName: "First name", width: 150 },
    { field: "lastName", headerName: "Last name", width: 150 },
  ];

  const rows = [
    { id: 1, lastName: "Doe", firstName: "John" },
    { id: 2, lastName: "Smith", firstName: "Jane" },
    { id: 2, lastName: "Smith", firstName: "Jane" },
    { id: 2, lastName: "Smith", firstName: "Jane" },
    { id: 2, lastName: "Smith", firstName: "Jane" },
    { id: 2, lastName: "Smith", firstName: "Jane" },
    { id: 2, lastName: "Smith", firstName: "Jane" },
    { id: 2, lastName: "Smith", firstName: "Jane" },
    { id: 2, lastName: "Smith", firstName: "Jane" },
    { id: 2, lastName: "Smith", firstName: "Jane" },
    // 他の行データ
  ];
  return (
    <>
      <Button variant="contained" endIcon={<ScienceIcon />}>
        フィルター
      </Button>
      <div style={{ height: "380px" }}>
        <DataGrid rows={rows} columns={columns} checkboxSelection></DataGrid>
      </div>
    </>
  );
}

export default AppTable;
