import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { rows } from "./data";
import {
  AddModeratorOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

const Team = () => {
  const theme = useTheme();
  const columns = [
    { field: "id", headerName: "ID", width: 33 },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phone",
      headerName: "Phone",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      align: "center",
      headerAlign: "center",
      renderCell: (e) => {
        const access = e.value;
        return (
          <Box
            sx={{
              backgroundColor:
                access === "admin"
                  ? theme.palette.primary.dark
                  : access === "manager"
                    ? theme.palette.secondary.dark
                    : "#3da58a",
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              textAlign: "center",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {access === "admin" ? (
              <AddModeratorOutlined
                sx={{
                  color: "#fff",
                }}
                fontSize="small"
              />
            ) : access === "manager" ? (
              <SecurityOutlined
                sx={{
                  color: "#fff",
                }}
              />
            ) : access === "user" ? (
              <LockOpenOutlined
                sx={{
                  color: "#fff",
                }}
              />
            ) : (
              ""
            )}

            <Typography
              sx={{
                fontSize: "15px",
                color: "#fff",
              }}
            >
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <div>
      <Box sx={{ height: 600, width: "98%", m: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 9,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Team;
