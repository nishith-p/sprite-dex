"use client";

import React from "react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { ApiRequest } from "@prisma/client";
import { useTheme } from "next-themes";
import { ThemeProvider, createTheme } from "@mui/material";

const columns: GridColDef[] = [
  {
    field: "col1",
    headerName: "API Key",
    width: 400,
    renderHeader(params) {
      return (
        <strong className="font-semibold">{params.colDef.headerName} 🔑</strong>
      );
    },
  },
  {
    field: "col2",
    headerName: "Path",
    width: 250,
    renderHeader(params) {
      return (
        <strong className="font-semibold">{params.colDef.headerName}</strong>
      );
    },
  },
  {
    field: "col3",
    headerName: "Time",
    width: 250,
    renderHeader(params) {
      return (
        <strong className="font-semibold">{params.colDef.headerName}</strong>
      );
    },
  },
  {
    field: "col4",
    headerName: "Duration",
    width: 150,
    renderHeader(params) {
      return (
        <strong className="font-semibold">{params.colDef.headerName}</strong>
      );
    },
  },
  {
    field: "col5",
    headerName: "Status",
    width: 150,
    renderHeader(params) {
      return (
        <strong className="font-semibold">{params.colDef.headerName}</strong>
      );
    },
  },
];

//We serialized the timestamp, so have to create this custom type
type ModifiedRequestType<K extends keyof ApiRequest> = Omit<ApiRequest, K> & {
  timestamp: string;
};

interface TableProps {
  userRequests: ModifiedRequestType<"timestamp">[];
}

const Table = ({ userRequests }: TableProps) => {
  const { theme: appTheme } = useTheme();

  const theme = createTheme({
    palette: {
      mode: appTheme === "light" ? "light" : "dark",
    },
  });

  const rows = userRequests.map((request) => ({
    id: request.id,
    col1: request.usedApiKey,
    col2: request.path,
    col3: `${request.timestamp} ago`,
    col4: `${request.duration} ms`,
    col5: request.status,
  }));

  return (
    <ThemeProvider theme={theme}>
      <DataGrid
        style={{
          backgroundColor: appTheme === "light" ? "white" : "#27272a",
          fontSize: "1rem",
        }}
        pageSizeOptions={[8]}
        disableRowSelectionOnClick
        autoHeight
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
          sorting: {
            sortModel: [{ field: "col3", sort: "asc" }],
          },
        }}
        columns={columns}
        rows={rows}
      />
    </ThemeProvider>
  );
};

export default Table;
