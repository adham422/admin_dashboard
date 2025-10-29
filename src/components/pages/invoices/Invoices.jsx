import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { GridToolbar } from '@mui/x-data-grid/internals'
import React from 'react'
import { rows } from './Data'

const Invoices = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 33 },
    {
      field: "registerid",
      headerName: "Register ID",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
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
      field: "age",
      headerName: "Age",
      type: "number",
      width: 33,
      editable: true,
      align: "center",
      headerAlign: "center",
      flex:1,
      
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
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
     {
      field: "city",
      headerName: "City",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
     {
      field: "zipcode",
      headerName: "Zip Code",
      width: 150,
      editable: true,
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
  ];
  return (
    <div>
      <Box sx={{ height: 600, width: "98%", m: "auto" }}>
        <DataGrid 
        
          rows={rows}
          columns={columns}
            slots={{ toolbar: GridToolbar }}
            showToolbar
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 9,
              },
            },
            
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  )
}

export default Invoices
