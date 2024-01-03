import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import * as React from "react";
import { Component } from "react";

export type columnTypes = {
  id: number;
  name: string;
  width: number;
};

export type rowTypes = {
  id: number;
  title: string;
};
export type CustomTableTypes = {
  columns: columnTypes[];
  rows: rowTypes[];
};
function CustomTable({ columns, rows }: CustomTableTypes) {
  const displayedColumns = columns.map(({ id, width, ...rest }) => rest);
  const dispalyedRows = rows.map(({ id, ...rest }) => rest);
  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        {displayedColumns.map((column) => (
          <Box key={column.name}>{column.name}</Box>
        ))}
      </Box>
      <Box>
        {dispalyedRows.map((row) => (
          <Box
            key={row.title}
            sx={{
              "&:hover": { boxShadow: "revert", backgroundColor: "black" },
            }}
          >
            {displayedColumns.map((column) => (
              <Box key={column.name}>{row[column.name]}</Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CustomTable;
